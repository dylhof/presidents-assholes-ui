import {combineReducers} from 'redux'
import { loadingReducer, errorReducer, presidentsReducer } from './reducers'

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  error: errorReducer,
  presidents: presidentsReducer
})

export default rootReducer;