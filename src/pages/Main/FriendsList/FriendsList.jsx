import { listMockData } from 'data/mock/list/friends_mock_data'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setArray } from 'redux/reducer/action'
import styled from 'styled-components'

const FriendsLists = () => {
	const array = useSelector(state => state.array)
	const dispatch = useDispatch()
	const getRandomNumber = () => {
		return Math.floor(Math.random() * 12) + 1
	}
	const loadArrayData = () => {
		const randomLength = getRandomNumber()
		const data = listMockData(randomLength)
		dispatch(setArray(data))
	}
	useEffect(() => {
		loadArrayData()
	}, [])

	return (
		<Wrapper>
			<Container>
				{array.map(data => {
					return (
						<FriendsList key={data.friendsName}>
							<ProfilePhoto src={data.profilePhoto} alt="프로필사진" />
							<Name>{data.friendsName}</Name>
						</FriendsList>
					)
				})}
			</Container>
		</Wrapper>
	)
}

export default FriendsLists

const Wrapper = styled.div`
	width: 100%;
	padding-top: 80px;
`

const Container = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	flex-direction: column;
	box-sizing: content-box;
	gap: 8px;
`

const FriendsList = styled.div`
	width: 86%;
	list-style: none;
	height: 52px;
	background-color: ${props => props.theme.PALETTE.secondary};
	cursor: pointer;
	display: flex;
	align-items: center;
	padding: 0 16px;
`

const ProfilePhoto = styled.img`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	margin-right: 8px;
`

const Name = styled.span`
	font-size: ${props => props.theme.FONT_SIZE.small};
	font-weight: ${props => props.theme.FONT_WEIGHT.regular};
	color: ${props => props.theme.PALETTE.fontColor.black};
`
