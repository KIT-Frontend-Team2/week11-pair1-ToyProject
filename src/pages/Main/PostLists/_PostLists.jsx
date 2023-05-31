import { usePostStore } from 'data/store/posts'
import { useState } from 'react'
import styled from 'styled-components'
import OnePost from './components/onePost'
import Pagination from 'react-js-pagination'

const PostLists2 = () => {
	const [state, dispatch] = usePostStore()
	const itemPerPage = 10
	const [activePage, setActivePage] = useState(1)
	const startIndex = (activePage - 1) * itemPerPage
	const endIndex = startIndex + itemPerPage
	const displayedPosts = state.slice(startIndex, endIndex)
	const totalPage = Math.ceil(state.length / itemPerPage)

	const handlePageChange = page => {
		setActivePage(page)
	}

	return (
		<S.Wrapper>
			<S.Container>
				<form action="">
					<CommentArea />
					<CommentButton>작성하기</CommentButton>
				</form>
				{displayedPosts.map(data => {
					return <OnePost key={Math.floor(Math.random() * 10000)} data={data} />
				})}
				<S.PaginationContainer>
					<Pagination
						activePage={activePage}
						itemsCountPerPage={itemPerPage}
						totalItemsCount={state.length}
						onChange={handlePageChange}
						pageRangeDisplayed={5}
						prevPageText={'‹'}
						nextPageText={'›'}
						itemClass="page-item"
						linkClass="page-link"
						activeClass="active"
					/>
				</S.PaginationContainer>
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

const PaginationContainer = styled.ul`
	display: flex;
	justify-content: center;
	margin-top: 20px;

	.page-item {
		display: inline-block;
		margin: 0 2px;
	}

	.page-link {
		padding: 4px 8px;
		border: 1px solid #ddd;
		background-color: #f9f9f9;
		color: #333;
		cursor: pointer;
		text-decoration: none;
	}

	.page-link:hover {
		background-color: #e9e9e9;
	}

	.active {
		background-color: #007bff;
		border-color: #007bff;
		color: #fff;
		font-weight: bold;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		outline: none;
		transition: background-color 0.3s ease-in-out;
	}

	.prev-page {
		margin-right: 5px;
	}

	.next-page {
		margin-left: 5px;
	}
`

const S = {
	Wrapper,
	Container,
	PaginationContainer,
}
