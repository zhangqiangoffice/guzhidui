import { connect } from 'react-redux'
import { goLogin, goWritePaper, changeWord, searchWord } from '../actions'
import KeyWord from '../components/KeyWord'

const mapStateToProps = (state) => ({
  keyWord: state.keyWord,
})

  
const KeyWordContainer = connect(
  mapStateToProps
)(KeyWord)

export default KeyWordContainer
