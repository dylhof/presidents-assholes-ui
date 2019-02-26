import {combineReducers} from 'redux'
import { loadingReducer, errorReducer, presidentsReducer, partyReducer } from './reducers'

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  error: errorReducer,
  presidents: presidentsReducer,
  party: partyReducer
})

export default rootReducer;