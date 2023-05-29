import { combineReducers } from 'redux'
import arrayReducer from './reducers'

export const rootReducer = combineReducers({
	array: arrayReducer,
})
