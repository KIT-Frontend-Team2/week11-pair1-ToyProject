import shortid from 'shortid'
import faker from 'faker'

export const postsMockData = number =>
	Array(number)
		.fill()
		.map((_, i) => ({
			postNumber: i,
			// 아이디
			postId: shortid.generate(),
			// 제목
			postTitle: faker.lorem.sentence(),
			// 내용
			postContent: faker.lorem.paragraph(),
			// 업데이트 시간
			postUploadedTime: faker.date.past().toLocaleString(),
			// 내가 올린 포스트 확인
			myPost: false,
			// 올린 회원 정보
			user: {
				// 회원 아이디
				postMemberId: shortid.generate(),
				// 회원 닉네임
				postNickname: faker.internet.userName(),
				// 회원 프로필이미지
				postProfileImage: faker.image.imageUrl(),
				// 회원 작성 내용
				commentContent: faker.lorem.paragraph(),
			},

			/* 2. 슬라이드 */
			slide: Array(Math.floor(Math.random() * 10) + 1)
				.fill()
				.map(() => {
					return {
						// 번호
						slideId: shortid.generate(),
						// 내용
						slideContent: faker.lorem.paragraph(),
						// 이미지
						slideImage: faker.image.imageUrl(),
					}
				}),

			// 올린 댓글들 정보
			comments: Array(Math.floor(Math.random() * 10) + 1)
				.fill()
				.map(() => {
					return {
						// 번호
						commentId: shortid.generate(),
						// 업데이트 시간
						commentContent: faker.lorem.paragraph(),
						commentUpdateTime: faker.date.past().toLocaleString(),
						myComment: false,
					}
				}),
		}))
