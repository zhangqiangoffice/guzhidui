import { connect } from 'react-redux'
import { askMorePapers, goWritePaper } from '../actions'
import PaperList from '../components/PaperList'

const mapStateToProps = state => ({
  paperList: state.paperList,
  canAsking: state.canAsking,
})

const mapDispatchToProps = (dispatch) => ({
  onCheckMore: () => {
    dispatch(askMorePapers())
  },
  onWritePaper: () => {
    dispatch(goWritePaper())
  }
})

const PaperListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaperList)

export default PaperListContainer
