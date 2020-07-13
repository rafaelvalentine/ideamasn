import User from './UserReducer'
import Carowners from './CarOwnersReducers'
import Loading from './pageLoaderReducer'
import Results from './ResultReducer'
import SelectedResult from './SelectedResult'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
  User,
  Carowners,
  Loading,
  Results,
  SelectedResult
})

export default rootReducers