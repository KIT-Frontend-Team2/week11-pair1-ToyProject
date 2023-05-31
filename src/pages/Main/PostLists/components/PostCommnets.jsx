import styled from 'styled-components'

const CommentsList = ({ data }) => {
	console.log(data)
	return (
		<S.Wrapper>
			<S.CommentForm>
				<S.CommentInput type="text" />
				<S.CommentButton>작성</S.CommentButton>
			</S.CommentForm>
			{data.map(data => {
				return (
					<S.CommentContainer key={Math.floor(Math.random() * 10000)}>
						<S.CommentTitle>
							<S.CommentWriter>{data.commentId}</S.CommentWriter>
							{data.myComment && (
								<S.CreateMode>
									<button>수정</button>
									<button>삭제</button>
								</S.CreateMode>
							)}
						</S.CommentTitle>
						<S.CommentContent>{data.commentContent}</S.CommentContent>
					</S.CommentContainer>
				)
			})}
		</S.Wrapper>
	)
}

export default CommentsList

const CommentForm = styled.form`
	display: flex;
`
const CommentButton = styled.button`
	width: 50px;
`

const CommentInput = styled.textarea`
	width: 100%;
	height: 50px;
	margin: 0;
	padding: 0;
	outline: none;
`

const Wrapper = styled.div`
	margin-top: 10px;
`

const CommentContainer = styled.div`
	padding: 0.3rem;
	margin: 3px;
`

const CommentTitle = styled.div`
	padding: 0;
	margin: 0;
	display: flex;
	justify-content: space-between;
`
const CommentWriter = styled.h5`
	margin: 0;
	padding: 0;
`

const CommentContent = styled.p``

const CreateMode = styled.div`
	margin-left: 5px;
	display: flex;
	gap: 5px;
`
const S = {
	CreateMode,
	CommentContent,
	CommentWriter,
	CommentTitle,
	CommentContainer,
	Wrapper,
	CommentInput,
	CommentForm,
	CommentButton,
}
