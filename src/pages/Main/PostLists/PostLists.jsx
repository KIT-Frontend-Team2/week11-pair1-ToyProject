import styled from 'styled-components'
import { contentsMockData } from 'data/mock/content/mock_data'
import React, { useState } from 'react'
import shortid from 'shortid'
import { faker } from '@faker-js/faker'

const PostLists = () => {
	let array = contentsMockData(9)
	const [posts, setPosts] = useState([])

	// 게시물 추가
	const createNewPost = () => {
		const newPost = {
			postId: shortid.generate(),
			postTitle: faker.lorem.sentence(),
			postContent: faker.lorem.paragraph(),
			postUploadedTime: faker.date.past().toLocaleString(),
		}

		setPosts(prevPosts => [...prevPosts, newPost])
	}

	const onEdit = postId => {
		const updatedPosts = posts.map(post => {
			if (post.postId === postId) {
				return {
					...post,
					postTitle: faker.lorem.sentence(),
					postContent: faker.lorem.paragraph(),
				}
			}
			return post
		})
		setPosts(updatedPosts)
	}

	const onDelete = postId => {
		const filteredPosts = posts.filter(post => post.postId !== postId)
		setPosts(filteredPosts)
	}

	// 댓글
	const [comments, setComments] = useState(false)

	const Modal = () => {
		setComments(props => !props)
	}

	const ModalAdd = () => {
		return (
			<div>
				<button onClick={Modal}>X</button>
				<h2>댓글 번호</h2>
				<p>댓글 업데이트 시간</p>
			</div>
		)
	}

	return (
		<Wrapper>
			<Container>
				{array.map(post => {
					return (
						<PostList>
							<span>
								<button onClick={createNewPost}>게시물 만들기</button>
								<button onClick={() => onEdit(post.postId)}>수정</button>
								<button onClick={() => onDelete(post.postId)}>삭제</button>
							</span>
							<li key={post.postId}>
								<p>{post.postId}</p>
								<h3>{post.postTitle}</h3>
								<p>{post.postContent}</p>
								<p>{post.postUploadedTime}</p>
							</li>
							<button onClick={Modal}>댓글보기</button>
							{comments === true ? <ModalAdd /> : null}
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
	height: auto;
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
