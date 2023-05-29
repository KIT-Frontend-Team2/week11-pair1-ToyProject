const initialState = []

const arrayReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_ARRAY':
			return action.payload
		default:
			return state
	}
}

export default arrayReducer
