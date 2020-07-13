import Home from '../../pages/home'
import { connect } from 'react-redux'
import { handleFetchFilters, handleFilterRequest, handlePageLoader, handleFetchResults } from '../../store/actions'

/**
 * here we handle passing redux to our component and export
 */
const mapStateToProps = state => ({
  Results: state.Results.data.games.game
})

const mapDispatchToProps = dispatch => ({
  handleFetchFilters: () => dispatch(handleFetchFilters()),
  handleFilterRequest: data => dispatch(handleFilterRequest(data)),
  handlePageLoader: value => dispatch(handlePageLoader(value)),
  handleFetchResults: () => dispatch(handleFetchResults())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
