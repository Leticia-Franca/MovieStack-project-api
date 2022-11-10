const axios = require('axios')
require('dotenv').config()

const moviesURL = "https://api.themoviedb.org/3/movie/";
const apiKey = "api_key=e0babfb2ae1efaf81c00b84e697198ba";
const movieSearchURL = "https://api.themoviedb.org/3/search/movie/";

// below: request to the specific movie
exports.handler = async function(event, context) {
	const querystring = event.queryStringParameters;
	const id = querystring.id
	console.log('id param: ', id)
	const movUrl = `${moviesURL}${id}?${apiKey}`
	const options = {
		method: "GET",
		url: movUrl,
		headers: {
			'moviedbapi-key': process.env.VITE_API_KEY
		}
	}

	try {
		const res = await axios.request(options);

		return {
			statusCode: 200,
			body: JSON.stringify(res.data)
		}

	} catch (error) {
		console.log(error);
		return {
			statusCode: 500,
			body: JSON.stringify(error)
		}
	}
}
