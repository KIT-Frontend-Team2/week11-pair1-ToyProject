const postReducer = (state, action) => {
	switch (action.type) {
		case 'Delete':
			const filterUser = state.filter(user => user.id !== action.id)
			return filterUser // 전달받은 action의 id값을 넣어줍니다.
		case 'Added':
			const newUser = {
				id: Math.floor(Math.random() * 1000000),
				name: action.name, // 전달받은 action의 name 값을 넣어줍니다.
			}
			return [...state, newUser]
		default:
			return state
	}
}

export default postReducer
