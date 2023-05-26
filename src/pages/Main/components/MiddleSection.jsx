import styled from 'styled-components'
import Header from './Header'

const MiddleSection = ({ children }) => {
	return (
		<Wrapper>
			<Header />
			{children}
		</Wrapper>
	)
}

export default MiddleSection

const Wrapper = styled.div`
	background-color: white;
	width: 48%;
	position: block;
	margin-left: 24%;
	padding-top: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
