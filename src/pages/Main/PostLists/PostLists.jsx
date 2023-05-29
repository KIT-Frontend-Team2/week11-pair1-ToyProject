import styled from 'styled-components'
import { contentsMockData } from 'data/mock/content/mock_data'
import { useState } from 'react'

const PostLists = () => {
	let array = contentsMockData(9)
	/*
	처음에 모달창이 보이지 않도록 false로 설정하기 
	그리고 댓글 보기 버튼을 누르면 모달창을 보여준다.
	그때 false가 true로 변경됨  
	*/
	const [modal, setModal] = useState(false)

	const ModalAdd = () => {
		return (
			<Modal>
				<h2>제목</h2>
			</Modal>
		)
	}
	return (
		<Wrapper>
			<Container>
				{array.map(data => {
					return (
						<PostList>
							<div>
								<p>{data.postId}</p>
								<p>{data.postTitle}</p>
								<p>{data.postContent}</p>
								<p>{data.postUploadedTime}</p>
							</div>
							<button
								onClick={() => {
									setModal(true)
								}}
							>
								댓글보기
							</button>
							{modal === true ? <ModalAdd /> : null}
						</PostList>
					)
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
const Modal = styled.div`
	background-color: #ee23;
`
