import styled from 'styled-components'

const LoginButton = ({ backgroudColor, color, children, fontWeight }) => {
	return <Button fontWeight={fontWeight}>{children}</Button>
}

export default LoginButton

const Button = styled.button`
	border-radius: 30px;
	border: 1px solid ${({ theme }) => theme.PALETTE.Border.InnerBorder};
	width: 100%;
	background-color: ${({ theme }) => theme.PALETTE.background.white};
	margin-right: 30px;
	margin: 5px 0 5px 0;
	padding: 10px 10px 10px 0;
	cursor: pointer;
	font-size: ${({ theme }) => theme.FONT_SIZE.medium};
	font-weight: ${({ fontWeight }) => fontWeight};
	position: relative;
	min-width: 250px;
`
