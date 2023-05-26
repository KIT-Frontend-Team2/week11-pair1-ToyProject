import LoginButton from 'components/Buttons/LoginButton'
import styled from 'styled-components'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
const RightInnerBanner = () => {
	return (
		<Wrapper>
			<Container>
				<Title>트위터에 처음이세요?</Title>
				<IntroduceText>
					지금 가입해서 나에게 맞춤 설정된 타임라인을 만들어 보세요!
					<LoginButtons>
						<LoginButton fontWeight={200}>
							<FcGoogle style={{ lineHeight: '16px' }} size={16} />
							Google 계정으로 가입하기
						</LoginButton>
						<LoginButton fontWeight={600}>
							<FaApple style={{ lineHeight: '16px' }} size={16} />
							Apple에서 가입하기
						</LoginButton>
						<LoginButton fontWeight={600}>계정 만들기</LoginButton>
					</LoginButtons>
				</IntroduceText>
				<BottomText>
					가입하시려면 <BottomTextBlue>쿠키 사용</BottomTextBlue>을 포함해{' '}
					<BottomTextBlue>이용약관</BottomTextBlue>과{' '}
					<BottomTextBlue>개인정보 처리방침</BottomTextBlue>에 동의해야 합니다.
				</BottomText>
			</Container>
			<BottomTexts>
				<Bottom>이용약관</Bottom>
				<Bottom>개인정보 처리방침</Bottom>
				<Bottom>쿠키 정책</Bottom>
				<Bottom>접근성</Bottom>
				<Bottom>광고 정보</Bottom>
				<Bottom>더 보기 ...</Bottom>
				<Bottom>© 2023 X Corp.</Bottom>
			</BottomTexts>
		</Wrapper>
	)
}

export default RightInnerBanner

const Wrapper = styled.div`
	margin: 10px 0 0 20px;
	max-width: 360px;
	min-width: 300px;
`

const Container = styled.div`
	border: 1px solid ${({ theme }) => theme.PALETTE.Border.OutLineBorder};
	border-radius: 10px;
	padding: 12px;
	padding-left: 24px;
`
const Title = styled.div`
	font-family: ${({ theme }) => theme.FONT_FAMILY.default};
	margin: 0 8px 8px 2px;
	font-size: 24px;
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
`

const IntroduceText = styled.span`
	color: ${({ theme }) => theme.PALETTE.fontColor.gray};
	font-size: ${({ theme }) => theme.FONT_SIZE.medium};
`
const LoginButtons = styled.div`
	margin-top: 20px;
	margin-bottom: 20px;
	max-width: 380px;
	margin-right: 10px;
`
const BottomText = styled.span`
	font-size: 14px;
	color: ${({ theme }) => theme.PALETTE.fontColor.gray};
`

const BottomTextBlue = styled.span`
	color: ${({ theme }) => theme.PALETTE.fontColor.skyblue};
`

const BottomTexts = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 15px;
`
const Bottom = styled.a`
	display: block;
	font-size: 13px;
	margin-right: 10px;
	color: ${({ theme }) => theme.PALETTE.fontColor.gray};
	cursor: pointer;
`
