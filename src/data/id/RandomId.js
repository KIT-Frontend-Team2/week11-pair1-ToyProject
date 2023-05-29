const generateRandomId = () => {
	const characters =
		'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
	const idLength = 10
	let randomId = ''

	for (let i = 0; i < idLength; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length)
		randomId += characters.charAt(randomIndex)
	}

	return randomId
}

export default generateRandomId
