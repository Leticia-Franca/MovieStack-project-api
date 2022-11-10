// import useSearchParams to be able to extract the query string from the url
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from "../components/MovieCard";

import "./MovieGrid.css";

const Search = () => {
	const [movies, setMovies] = useState([]);
	const [useParams] = useSearchParams();
	const query = useParams.get("q");

	useEffect(() => {
		axios.get(`/.netlify/functions/movieSearched?query=${query}`).then((response) => {
			setMovies(response.data.results)
		}).catch((error) => {
			console.log(error)
		})

	}, [query]);

  return (
	<div>
		<h2 className="best_movies_title">Resultados para: <span className="query_select">{query}</span></h2>
		<div className="movies_container">
			{movies.length === 0 && <p>Carregando...</p>}
			{movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} /> )}
		</div>
	</div>
  )
}

export default Search