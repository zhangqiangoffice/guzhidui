import { combineReducers } from 'redux'

import * as act from '../actions'

//纸条列表
const paperList = (state = [], action) => {
  switch (action.type) {
    case act.RECEIVE_PAPERS:
      return action.first ? action.papers : state.concat(action.papers)
    default:
      return state
  }
}

//页数，分页获取纸条列表
const page = (state = 0, action) => {
  switch (action.type) {
    case act.RECEIVE_PAPERS:
      return action.first ? 1 : (action.papers.length ? ++state : state)
    default:
      return state
  }
}

//搜索框标签关键字
const word = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_WORD:
      return action.word
    case act.SUBMIT_SUCCESS:
      return action.key1
    default:
      return state
  }
}

//纸条列表顶部关键词
const keyWord = (state = '', action) => {
  switch (action.type) {
    case act.RECEIVE_PAPERS:
      return action.first ? action.word : state
    default:
      return state
  }
}

//是否已经登录
const hasLogin = (state = false, action) => {
  switch (action.type) {
    case act.LOGIN_SUCCESS:
    case act.INIT_LOCAL_STORAGE:
      return true
    case act.LOGOUT:
      return false
    default:
      return state
  }
}

//是否显示登陆框正在登陆
const showLoginBox = (state = false, action) => {
  switch (action.type) {
    case act.GO_LOGIN:
      return true
    case act.LOGIN_SUCCESS:
    case act.SHOW_LOADING:
    case act.CLOSE_BOX:
      return false
    default:
      return state
  }
}

//是否显示注册登录框
const showRegisterBox = (state = false, action) => {
  switch (action.type) {
    case act.GO_REGISTER:
      return true
    case act.SHOW_LOADING:
    case act.CLOSE_BOX:
      return false
    default:
      return state
  }
}

//是否显示注册提示
const showRegisterTips = (state = false, action) => {
  switch (action.type) {
    case act.ALERT_REGISTER_TIPS:
      return true
    case act.CHANGE_NAME:
    case act.CHANGE_USERNAME:
    case act.CHANGE_PASSWORD:
    case act.CHANGE_PASSWORD1:
    case act.GO_REGISTER:
      return false
    default:
      return state
  }
}

//注册框提示信息
const registerTips = (state = '', action) => {
  switch (action.type) {
    case act.ALERT_REGISTER_TIPS:
      return action.message
    default:
      return state
  }
}

//显隐加载中遮罩层
const showLoading = (state = true, action) => {
  switch (action.type) {
    case act.GO_LOGIN:
    case act.GO_REGISTER:
    case act.SHOW_PAPER_BOX:
    case act.SHOW_LOADING:
      return true
    case act.LOGIN_SUCCESS:
    case act.CLOSE_BOX:
      return false
    case act.RECEIVE_PAPERS:
      return action.first ? false : state 
    default:
      return state
  }
}

//登录用户名
const username = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_USERNAME:
    case act.INIT_LOCAL_STORAGE:
      return action.username
    case act.GO_LOGIN:
    case act.GO_REGISTER:
      return ''
    default:
      return state
  }
}

//登录密码
const password = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_PASSWORD:
      return action.val
    case act.LOGIN_SUCCESS:
    case act.GO_LOGIN:
    case act.GO_REGISTER:
      return ''
    default:
      return state
  }
}

//注册重复密码1
const password1 = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_PASSWORD1:
      return action.val
    case act.GO_REGISTER:
      return ''
    default:
      return state
  }
}

//姓名
const name = (state = '', action) => {
  switch (action.type) {
    case act.LOGIN_SUCCESS:
    case act.INIT_LOCAL_STORAGE:
    case act.CHANGE_NAME:
      return action.name
    default:
      return state
  }
}

//是否显示写纸条框
const showPaperBox = (state = false, action) => {
  switch (action.type) {
    case act.SHOW_PAPER_BOX:
      return true
    case act.CLOSE_BOX:
    case act.SHOW_LOADING:
    case act.SUBMIT_SUCCESS:
      return false
    default:
      return state
  }
}

//新写纸条的内容
const paperContent = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_PAPER_CONTENT:
      return action.val
    case act.SUBMIT_SUCCESS:
      return ''
    default:
      return state
  }
}

//标签1的内容
const key1 = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_KEY1:
      return action.val
    case act.SUBMIT_SUCCESS:
      return ''
    default:
      return state
  }
}

//标签2的内容
const key2 = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_KEY2:
      return action.val
    case act.SUBMIT_SUCCESS:
      return ''
    default:
      return state
  }
}

//标签3的内容
const key3 = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_KEY3:
      return action.val
    case act.SUBMIT_SUCCESS:
      return ''
    default:
      return state
  }
}

//是否允许请求纸条
const canAsking = (state = false, action) => {
  switch (action.type) {
    case act.SUBMIT_SUCCESS:
    case act.LOGIN_SUCCESS:
      return true
    case act.SHOW_LOADING:
    case act.START_ASKING:
      return false
    case act.RECEIVE_PAPERS:
      return action.papers.length ? true : false
    default:
      return state
  }
}

const rootReducer = combineReducers({
  paperList,
  page,
  word,
  keyWord,
  hasLogin,
  showLoading,
  username,
  password,
  password1,
  name,
  showLoginBox,
  showRegisterBox,
  showRegisterTips,
  registerTips,
  showPaperBox,
  paperContent,
  key1,
  key2,
  key3,
  canAsking,
})

export default rootReducer