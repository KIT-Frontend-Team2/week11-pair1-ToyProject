import styled from 'styled-components'

const Header = () => {
	return <HeaderDiv>HeaderSection</HeaderDiv>
}

export default Header

const HeaderDiv = styled.div`
	position: fixed;
	top: 0;
	height: 100px;
	width: 48%;
	background-color: white;
	border-top: 1px solid black;
	border-bottom: 1px solid black;
	box-sizing: border-box;
`
