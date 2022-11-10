const axios = require('axios')
require('dotenv').config()

const moviesURL = "https://api.themoviedb.org/3/movie/";
const apiKey = "api_key=e0babfb2ae1efaf81c00b84e697198ba";
const movieSearchURL = "https://api.themoviedb.org/3/search/movie/";

exports.handler = async function(event, context) {
	const querystring = event.queryStringParameters;
	const query = querystring.query
	console.log('query param: ', query)
	const searchedMoviesUrl = `${movieSearchURL}?${apiKey}&query=${query}`;
	const options = {
		method: "GET",
		url: searchedMoviesUrl,
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
		return {
			statusCode: 500,
			body: JSON.stringify(error)
		}
	}
}
