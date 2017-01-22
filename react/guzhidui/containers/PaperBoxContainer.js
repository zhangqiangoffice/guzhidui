import { connect } from 'react-redux'
import { changePaperContent, submitPaper, changeKey1, changeKey2, changeKey3, closeBox } from '../actions'
import PaperBox from '../components/PaperBox'

const mapStateToProps = (state) => ({
  showPaperBox: state.showPaperBox,
  paperContent: state.paperContent,
  key1: state.key1,
  key2: state.key2,
  key3: state.key3,
})

const mapDispatchToProps = (dispatch, state) => ({
  onChangePaperContent: (event) => {
    dispatch(changePaperContent(event.target.value))
  },
  onSubmitPaper: () => {
    dispatch(submitPaper())
  },
  onClose: () => {
    dispatch(closeBox())
  },
  onChangeKey1: (event) => {
    dispatch(changeKey1((event.target.value).trim()))
  },
  onChangeKey2: (event) => {
    dispatch(changeKey2((event.target.value).trim()))
  },
  onChangeKey3: (event) => {
    dispatch(changeKey3((event.target.value).trim()))
  },
})
  
const PaperBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaperBox)

export default PaperBoxContainer
