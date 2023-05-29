import { usePostStore } from 'data/store/posts'
import styled from 'styled-components'
import OnePost from './components/onePost'

const PostLists2 = () => {
	const [state, dispatch] = usePostStore()

	return (
		<S.Wrapper>
			<S.Container>
				<form action="">
					<CommentArea />
					<CommentButton>작성하기</CommentButton>
				</form>
				{state.map(data => {
					return <OnePost key={Math.floor(Math.random() * 10000)} data={data} />
				})}
			</S.Container>
		</S.Wrapper>
	)
}
export default PostLists2

const CommentArea = styled.textarea`
	box-sizing: border-box;
	outline: none;
	display: block;
	width: 100%;
`

const CommentButton = styled.button`
	box-sizing: border-box;
	display: block;
	width: 100%;
`

const Wrapper = styled.div`
	width: 100%;
	padding-top: 50px;
`

const Container = styled.div`
	position: relative;
	left: 22.5%;
	width: 55%;
	display: flex;
	flex-direction: column;
	gap: 10px;
	box-sizing: content-box;
	justify-content: center;
`
const S = {
	Wrapper,
	Container,
}
