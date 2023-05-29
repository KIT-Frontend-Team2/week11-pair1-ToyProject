import { useState } from 'react'
import CommentsList from './PostCommnets'
import PostSlider from './PostSlider'
import styled from 'styled-components'

const OnePost = ({ data }) => {
	const [isShow, setIsShow] = useState(false)
	return (
		<S.PostList key={Math.floor(Math.random() * 10000)}>
			{data.myPost && (
				<S.CreateMode>
					<button>수정</button>
					<button>삭제</button>
				</S.CreateMode>
			)}
			<S.PostTitle>
				<div>
					<img src={data.user.postProfileImage} width={60} height={60} />
				</div>
				<S.PostHeader>
					<div>{data.user.postNickname}</div>
					<div>{data.postUploadedTime}</div>
				</S.PostHeader>
			</S.PostTitle>
			<PostSlider data={data.slide} />
			<S.PostContent>{data.postContent}</S.PostContent>
			<S.PostBottom>
				<button
					onClick={() => {
						setIsShow(prev => !prev)
					}}
				>
					{isShow ? '댓글닫기' : '댓글보기'}
				</button>
			</S.PostBottom>
			{isShow ? <CommentsList data={data.comments} /> : null}
		</S.PostList>
	)
}

export default OnePost

const PostList = styled.div`
	width: 100%;
	list-style: none;
	height: auto;
	background-color: rgba('ff', 'ff', 'ff', 1);
	transition: 1s;
	:hover {
		background-color: rgba(0, 0, 0, 0.03);
	}
	border-bottom: 1px solid ${({ theme }) => theme.PALETTE.Border.OutLineBorder};
`

const PostTitle = styled.div`
	display: flex;
	justify-content: space-between;
`

const PostHeader = styled.div`
	padding: 5px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`
const PostBottom = styled.div``

const PostContent = styled.div`
	margin: 5px;
`
const CreateMode = styled.div`
	display: flex;
	margin: 5px 0 5px 0;
	justify-content: flex-end;
	gap: 5px;
`
const S = {
	PostTitle,
	PostHeader,
	PostBottom,
	PostContent,
	CreateMode,
	PostList,
}
