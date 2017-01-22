import zAJAX from 'z-ajax'

//获取纸条列表
export const getPapers = (fisrt, state, cb) => {
  const datas = {
    word: state.word,
    page: state.page
  }

  if (fisrt) {
    datas.page = 0
  }

  zAJAX('api/getPapers', datas, cb)
}

//登录接口
export const login = (state, cb) => {
  const datas = {
    username: state.username,
    password: state.password
  }

  zAJAX('api/login', datas, cb)
}

//注册接口
export const register = (state, cb) => {
  const datas = {
    name: state.name,
    username: state.username,
    password: state.password
  }

  zAJAX('api/register', datas, cb)
}

//退出登录接口
export const logout = (state, cb) => {
  const datas = {
    username: state.username,
  }

  zAJAX('api/logout', datas, cb)
}

//检查登录是否有效
export const check = (state, cb) => {
  const datas = {
    username: state.username,
  }

  zAJAX('api/check', datas, cb)
}

//检查用户名是否被已注册
export const checkUsername = (state, cb) => {
  const datas = {
    username: state.username,
  }
  zAJAX('api/checkUsername', datas, cb)
}

//提交新纸条
export const submitPaper = (state, cb) => {
  const datas = {
    paperContent: state.paperContent,
    key1: state.key1,
    key2: state.key2,
    key3: state.key3,
  }

  zAJAX('api/submitPaper', datas, cb)
}

//提交搜索关键词
export const searchWord = (state, cb) => {
  const datas = {
    word: state.word,
  }

  zAJAX('api/searchWord', datas, cb)
}

//数字前补零
const tran_val = (val) => {
  if((val - 0) < 10){
    val = "0" + val;
  }
  return val;
}

//日期转字符串
export const dateToString = (time) => {
  const datenew = new Date(time); 

  const year = datenew.getFullYear(); 
  const month = tran_val(datenew.getMonth() + 1);
  const date = tran_val(datenew.getDate()); 
  const hour = tran_val(datenew.getHours());
  const minute = tran_val(datenew.getMinutes()); 

  return year + '-' + month + '-' + date + ' ' + hour + ':' + minute;
}
