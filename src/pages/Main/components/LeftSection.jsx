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
	left: 9%;
	position: fixed;
	box-sizing: border-box;
	border: 1px solid black;
`
const RelativeContainer = styled.div`
	position: relative; /* 추가 */
	height: 160px;
`
