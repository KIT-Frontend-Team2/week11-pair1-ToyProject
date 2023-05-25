import styled from 'styled-components'

const RightSection = ({ children }) => {
	return (
		<Wrapper>
			<RelativeContainer>{children}</RelativeContainer>
		</Wrapper>
	)
}

export default RightSection

const Wrapper = styled.div`
	width: 19%;
	height: 100%;
	background-color: white;
	position: fixed;
	z-index: 1;
	right: 19%;
	box-sizing: border-box;
	border: 1px solid black;
`
const RelativeContainer = styled.div`
	position: relative;
`
