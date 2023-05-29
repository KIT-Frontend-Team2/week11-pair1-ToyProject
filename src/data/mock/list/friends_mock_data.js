import generateRandomId from 'data/id/RandomId'
import faker from 'faker'

export const listMockData = number =>
	Array(number)
		.fill()
		.map(() => ({
			friendsId: generateRandomId(),
			friendsName: faker.name.findName(),
			phoneNumber: faker.phone.phoneNumber(),
			profilePhoto: faker.image.imageUrl(40, 40, true),
		}))
