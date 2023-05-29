import { createStore } from 'redux'
import { rootReducer } from 'redux/reducer'

const reduxConfig = () => {
	const store = createStore(rootReducer)
	return store
}

export default reduxConfig
