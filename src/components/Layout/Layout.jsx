import styled from 'styled-components'

const Layout = ({ children }) => {
	return <Wrapper>{children}</Wrapper>
}

export default Layout

const Wrapper = styled.div`
	width: 100%;
	display: flex;
`
