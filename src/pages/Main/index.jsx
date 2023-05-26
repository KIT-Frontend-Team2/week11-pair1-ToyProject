import Layout from 'components/Layout/Layout'
import LeftSection from './components/LeftSection'
import MiddleSection from './components/MiddleSection'
import RightSection from './components/RightSection/RightSection'
import PostLists from './PostLists/PostLists'
import RightInnerBanner from './components/RightSection/Banner'

const MainPage = () => {
	return (
		<Layout>
			<LeftSection>leftSection</LeftSection>
			<MiddleSection>
				<PostLists />
			</MiddleSection>
			<RightSection>
				<RightInnerBanner></RightInnerBanner>
			</RightSection>
		</Layout>
	)
}

export default MainPage
