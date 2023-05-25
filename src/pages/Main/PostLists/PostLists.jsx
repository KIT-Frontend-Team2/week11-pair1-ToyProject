import styled from 'styled-components'

const PostLists = () => {
	let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
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
	position: relative;
	left: 22.5%;
	width: 55%;
	display: flex;
	flex-direction: column;
	gap: 10px;
	box-sizing: content-box;
	justify-content: center;
`

const PostList = styled.div`
	width: 100%;
	list-style: none;
	height: 300px;
	background-color: green;
	cursor: pointer;
`

const Wrapper = styled.div`
	width: 100%;
	padding-top: 50px;
`
