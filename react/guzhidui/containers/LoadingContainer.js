import { connect } from 'react-redux'
import Loading from '../components/Loading'

const mapStateToProps = (state) => ({
  showLoading: state.showLoading
})

const LoadingContainer = connect(
  mapStateToProps
)(Loading)

export default LoadingContainer