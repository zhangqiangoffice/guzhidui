import * as api from '../api'

export const RECEIVE_PAPERS = 'RECEIVE_PAPERS'
export const END_ASKING = 'END_ASKING'
export const GO_LOGIN = 'GO_LOGIN'
export const CHANGE_USERNAME = 'CHANGE_USERNAME'
export const CHANGE_NAME = 'CHANGE_NAME'
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'
export const CHANGE_PASSWORD1 = 'CHANGE_PASSWORD1'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const INIT_LOCAL_STORAGE = 'INIT_LOCAL_STORAGE'
export const SHOW_PAPER_BOX = 'SHOW_PAPER_BOX'
export const CHANGE_PAPER_CONTENT = 'CHANGE_PAPER_CONTENT'
export const CHANGE_KEY1 = 'CHANGE_KEY1'
export const CHANGE_KEY2 = 'CHANGE_KEY2'
export const CHANGE_KEY3 = 'CHANGE_KEY3'
export const CHANGE_WORD = 'CHANGE_WORD'
export const SEARCH_WORD = 'SEARCH_WORD'
export const SHOW_LOADING = 'SHOW_LOADING'
export const SUBMIT_SUCCESS = 'SUBMIT_SUCCESS'
export const START_ASKING = 'START_ASKING'
export const CLOSE_BOX = 'CLOSE_BOX'
export const LOGOUT = 'LOGOUT'
export const GO_REGISTER = 'GO_REGISTER'
export const ALERT_REGISTER_TIPS = 'ALERT_REGISTER_TIPS'

//获取纸条列表
const receivePapers = (first, papers, word) => ({
  type: RECEIVE_PAPERS,
  first,
  papers,
  word,
})

//首次打开页面，获取纸条，初始化登录值
export const getAllPapers = () => (dispatch, getState) => { 
  
  //从本地获取用户信息
  let has = window.localStorage.gzd_has
  if (has) {
    let name = window.localStorage.gzd_name
    let username = window.localStorage.gzd_username
    dispatch(initLocalStorage(name, username))
  }

  //请求首页纸条列表
  api.getPapers(true, getState(), msg => {
    
    if (msg.result === 1) {
      dispatch(receivePapers(true, msg.list, msg.word))
    } else {
      alert(msg.message)
    } 
  })
}

//点击搜索按钮
export const searchWord = () => (dispatch, getState) => { 
  dispatch(showLoading())

  api.getPapers(true, getState(), msg => {
    
    if (msg.result === 1) {
      dispatch(receivePapers(true, msg.list , msg.word))
    } else {
      alert(msg.message)
    } 
  })
}

//请求更多纸条
export const askMorePapers = () => (dispatch, getState) => { 
  dispatch(startAsking())

  api.getPapers(false, getState(), msg => {
    
    if (msg.result === 1) {
      dispatch(receivePapers(false, msg.list , msg.word))
    } else {
      alert(msg.message)
    } 
  })
}

//开始请求更多纸条
export const startAsking = () => ({
  type: START_ASKING,
})

//点击登录按钮，打开登录框
export const goLogin = () => ({
  type: GO_LOGIN,
})

//点击注册按钮，打开注册框
export const goRegister = () => ({
  type: GO_REGISTER,
})

//显示遮罩层
export const showLoading = () => ({
  type: SHOW_LOADING,
})

//点击登录提交按钮
export const login = () => (dispatch, getState) => {
  dispatch(showLoading());

  api.login(getState(), msg => {
    
    if (msg.result === 1) {
      window.localStorage.gzd_has = true
      window.localStorage.gzd_name = msg.name
      window.localStorage.gzd_username = msg.username

      dispatch(loginSuccess(msg.name))
    } else {
      alert(msg.message)
      dispatch(goLogin())
    } 
  })
}

//进行注册
export const register = () => (dispatch, getState) => {
  dispatch(showLoading());

  api.register(getState(), msg => {
    
    if (msg.result === 1) {
      window.localStorage.gzd_has = true
      window.localStorage.gzd_name = msg.name
      window.localStorage.gzd_username = msg.username

      dispatch(loginSuccess(msg.name))
    } else {
      alert(msg.message)
      dispatch(alterRegisterTips())
    } 
  })
}


//输入账号
export const changeUsername = (username) => ({
  type: CHANGE_USERNAME,
  username,
})

//输入姓名或昵称
export const changeName = (name) => ({
  type: CHANGE_NAME,
  name,
})

//输入密码
export const changePassword = (val) => ({
  type: CHANGE_PASSWORD,
  val,
})

//输入注册密码1
export const changePassword1 = (val) => ({
  type: CHANGE_PASSWORD1,
  val,
})

//提示注册错误信息
export const alertRegisterTips = (message) => ({
  type: ALERT_REGISTER_TIPS,
  message,
})

//登录成功
export const loginSuccess = (name) => ({
  type: LOGIN_SUCCESS,
  name,
})

//打开页面，检查本地是否有存用户名
export const initLocalStorage = (name, username) => ({
  type: INIT_LOCAL_STORAGE,
  name,
  username,
})

//检查是否登录，未登录则登录，已登录则打开发纸条框
export const goWritePaper = () => (dispatch, getState) => {
  api.check(getState(), msg => {
    
    if (msg.result === 1) {
      if (msg.check) {
        dispatch(showPaperBox())
      } else {
        dispatch(goLogin())
      }
    } else {
      alert(msg.message)
    } 
  })
}

//显示写纸条输入框
export const showPaperBox = () => ({
  type: SHOW_PAPER_BOX,
})

//编辑写纸条的内容
export const changePaperContent = (val) => ({
  type: CHANGE_PAPER_CONTENT,
  val,
})

//编辑写标签1的内容
export const changeKey1 = (val) => ({
  type: CHANGE_KEY1,
  val,
})

//编辑写标签2的内容
export const changeKey2 = (val) => ({
  type: CHANGE_KEY2,
  val,
})

//编辑写标签3的内容
export const changeKey3 = (val) => ({
  type: CHANGE_KEY3,
  val,
})

//发表新纸条
export const submitPaper = () => (dispatch, getState) => {
  dispatch(showLoading())

  api.submitPaper(getState(), msg => {
    
    if (msg.result === 1) {
      dispatch(submitSuccess(msg.key1))
      dispatch(searchWord())
      alert('写新纸条成功！')
    } else {
      alert(msg.message)
      dispatch(showPaperBox())
    } 
  })
}

//发表成功
export const submitSuccess = (key1) => ({
  type: SUBMIT_SUCCESS,
  key1,
})

//修改搜索关键字
export const changeWord = (word) => ({
  type: CHANGE_WORD,
  word,
})

//关闭登录框或写纸条框
export const closeBox = () => ({
  type: CLOSE_BOX
})

//退出登录
export const logout = () => ({
  type: LOGOUT
})

//通知后台退出登录
export const goLogout = () => (dispatch, getState) => {
  dispatch(logout())
  api.logout(getState(), msg => {
    if (msg.result !== 1) {
      alert(msg.message)
    } 
  })
}

//检查用户名是否已被注册
export const checkUsername = () => (dispatch, getState) => {
  api.checkUsername(getState(), msg => {
    if (msg.result === 0) {
      dispatch(alertRegisterTips(msg.message))
    }
  })
}

