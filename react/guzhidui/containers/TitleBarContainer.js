import { connect } from 'react-redux'
import { goLogin, goWritePaper, changeWord, searchWord, goLogout, goRegister } from '../actions'
import TitleBar from '../components/TitleBar'

const mapStateToProps = (state) => ({
  hasLogin: state.hasLogin,
  name: state.name,
  word: state.word,
})

const mapDispatchToProps = (dispatch, state) => ({
  onGoLogin: () => {
    dispatch(goLogin())
  },
  onGoWritePaper: () => {
    dispatch(goWritePaper())
  },
  onSearch: () => {
    dispatch(searchWord())
  },
  onChangeWord: (event) => {
    dispatch(changeWord((event.target.value).trim()))
  },
  onKeyUpEnter: (event) => {
    if (event.keyCode === 13) {
      dispatch(searchWord())
    }
  },
  onLogout: () => {
    window.localStorage.gzd_has = ''
    window.localStorage.gzd_name = ''
    window.localStorage.gzd_username = ''
    dispatch(goLogout())
  },
  onGoRegister: () => {
    dispatch(goRegister())
  }
})
  
const TitleBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleBar)

export default TitleBarContainer
