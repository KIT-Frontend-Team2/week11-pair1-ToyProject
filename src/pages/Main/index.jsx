import Layout from 'components/Layout'
import LeftSection from './components/LeftSection'
import MiddleSection from './components/MiddleSection'
import RightSection from './components/RightSection'
import PostLists from './PostLists/PostLists'

const MainPage = () => {
	return (
		<Layout>
			<LeftSection>leftSection</LeftSection>
			<MiddleSection>
				<PostLists />
			</MiddleSection>
			<RightSection>RightSection</RightSection>
		</Layout>
	)
}

export default MainPage
