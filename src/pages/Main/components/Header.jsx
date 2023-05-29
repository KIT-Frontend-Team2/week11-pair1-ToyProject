import styled from 'styled-components'
import { TbSettings } from 'react-icons/tb'
const Header = () => {
	return (
		<HeaderDiv>
			<Title>탐색하기</Title>

			<TbSettings size={30}></TbSettings>
		</HeaderDiv>
	)
}

export default Header

const HeaderDiv = styled.div`
	position: fixed;
	top: 0;
	height: 53px;
	width: 28%;
	background-color: rgba(255, 255, 255, 0.85);
	box-sizing: border-box;
	z-index: 100;
	display: flex;
	justify-content: space-between;
	padding: 12px;
`

const Title = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.large};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`
