import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
	try {
		const { data } = await axios.get(url, {
			headers: {
				'X-RapidAPI-Key': '66d4c99beamsh27c68636688655ep101183jsn719f2ef68e6d',
				'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
			},
		})

		return data
	} catch (error) {
		console.log(error)
	}
}
