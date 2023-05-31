import styled from 'styled-components'

const RightSection = ({ children }) => {
	return (
		<S.Wrapper>
			<S.RelativeContainer>{children}</S.RelativeContainer>
		</S.Wrapper>
	)
}

export default RightSection

const Wrapper = styled.div`
	width: 23%;
	height: 100%;
	background-color: white;
	position: fixed;
	z-index: 1;
	right: 15%;
	box-sizing: border-box;
	border-left: 1px solid ${({ theme }) => theme.PALETTE.Border.OutLineBorder};
`
const RelativeContainer = styled.div`
	position: relative;
`
const S = {
	Wrapper,
	RelativeContainer,
}
