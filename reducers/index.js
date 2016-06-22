import { combineReducers } from 'redux'
import taskReducer from './taskReducer'
import userReducer from './userReducer'
import noteReducer from './noteReducer'

const rootReducer = combineReducers({
  tasks: taskReducer,
  user: userReducer
})

export default rootReducer
