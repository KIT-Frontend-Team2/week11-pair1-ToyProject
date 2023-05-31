import { postsMockData } from 'data/mock/content/_mock_data'
import { createContext, useContext, useReducer } from 'react'
import postReducer from 'reducer/posts'

const PostStore = createContext()

export const usePostStore = () => useContext(PostStore)

const initailState = postsMockData(100)

const PostStoreProvider = ({ children }) => {
	const [state, dispatch] = useReducer(postReducer, initailState)
	return (
		<PostStore.Provider value={[state, dispatch]}>
			{children}
		</PostStore.Provider>
	)
}
export default PostStoreProvider
