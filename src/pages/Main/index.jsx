import Layout from 'components/Layout/Layout'
import LeftSection from './components/LeftSection'
import MiddleSection from './components/MiddleSection'
import RightSection from './components/RightSection/RightSection'
import PostLists2 from './PostLists/_PostLists'
import RightInnerBanner from './components/RightSection/Banner'
import FriendsLists from './FriendsList/FriendsList'
import reduxConfig from 'redux/store/store'
import { Provider } from 'react-redux'

const MainPage = () => {
	const store = reduxConfig()
	return (
		<Provider store={store}>
			<Layout>
				<LeftSection>
					<FriendsLists />
				</LeftSection>
				<MiddleSection>
					<PostLists2 />
				</MiddleSection>
				<RightSection>
					<RightInnerBanner></RightInnerBanner>
				</RightSection>
			</Layout>
		</Provider>
	)
}

export default MainPage
