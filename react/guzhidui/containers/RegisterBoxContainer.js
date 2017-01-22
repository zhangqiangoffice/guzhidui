import { connect } from 'react-redux'
import { login, changeUsername, changeName, changePassword1, changePassword, checkUsername, register, alertRegisterTips, closeBox } from '../actions'
import RegisterBox from '../components/RegisterBox'

const mapStateToProps = (state) => ({
  showRegisterBox: state.showRegisterBox,
  username: state.username,
  password: state.password,
  password1: state.password1,
  showRegisterTips: state.showRegisterTips,
  registerTips: state.registerTips,
})

const mapDispatchToProps = (dispatch, state) => ({
  onCheckData: (name, username, p, p1) => {
    if (!name) {
      dispatch(alertRegisterTips('姓名昵称不得为空'))
    }
    if (!username) {
      dispatch(alertRegisterTips('账号不得为空'))
    }
    if (!p) {
      dispatch(alertRegisterTips('密码不得为空'))
    }
    if (p === p1) {
      dispatch(register())
    } else {
      dispatch(alertRegisterTips('两次密码不一致'))
    }
  },
  onCheckUsername: () => {
    dispatch(checkUsername())
  },
  onChangeUsername: (event) => {
    dispatch(changeUsername((event.target.value).trim()))
  },
  onChangeName: (event) => {
    dispatch(changeName((event.target.value).trim()))
  },
  onChangePassword1: (event) => {
    dispatch(changePassword1((event.target.value).trim()))
  },
  onChangePassword: (event) => {
    dispatch(changePassword((event.target.value).trim()))
  },
  onClose: () => {
    dispatch(closeBox())
  }
})
  
const RegisterBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterBox)

export default RegisterBoxContainer
