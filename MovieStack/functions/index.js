const axios = require('axios')
require('dotenv').config()

const moviesURL = "https://api.themoviedb.org/3/movie/";
const apiKey = "api_key=e0babfb2ae1efaf81c00b84e697198ba";
const movieSearchURL = process.env.VITE_SEARCH;

exports.handler = async function(event, context) {
	const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
	const options = {
		method: "GET",
		url: topRatedUrl,
		headers: {
			'moviedbapi-key': process.env.VITE_API_KEY,
		}
	}

	try {
		const res = await axios.request(options);
		return {
			statusCode: 200,
			body: JSON.stringify(res.data),
		}

	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify(error),
		}
	}
}
