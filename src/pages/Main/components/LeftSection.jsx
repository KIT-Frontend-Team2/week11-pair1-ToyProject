import styled from 'styled-components'

const LeftSection = ({ children }) => {
	return (
		<Wrapper>
			<RelativeContainer>{children}</RelativeContainer>
		</Wrapper>
	)
}
export default LeftSection

const Wrapper = styled.div`
	width: 15%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	background-color: white;
	left: 19%;
	position: fixed;
	box-sizing: border-box;
	border-right: 1px solid ${({ theme }) => theme.PALETTE.Border.OutLineBorder};
`
const RelativeContainer = styled.div`
	position: relative; /* 추가 */
	height: 160px;
`
