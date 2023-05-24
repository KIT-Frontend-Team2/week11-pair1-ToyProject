import styled from 'styled-components'

const PostLists = () => {
	let array = [1, 2, 3, 4, 5]
	return (
		<Wrapper>
			<Container>
				{array.map(data => {
					return <PostList>Contents</PostList>
				})}
			</Container>
		</Wrapper>
	)
}
export default PostLists

const Container = styled.div`
	width: 500px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	box-sizing: content-box;
	justify-content: center;
`

const PostList = styled.div`
	width: inherit;
	list-style: none;
	height: 300px;
	background-color: green;
`

const Wrapper = styled.div`
	padding-top: 50px;
`
