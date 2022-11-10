import axios from "axios";
import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard";

import "./MovieGrid.css"

const Home = () => {
	const [topMovies, setTopMovies] = useState([]);

	useEffect(() => {
		axios.get('/.netlify/functions/index').then((response) => {
			setTopMovies(response.data.results);
		}).catch((error) => {
			console.log(error.message);
		})
	}, []);

  return (
	<div className="container">
		<h2 className="best_movies_title">Melhores filmes</h2>
		<div className="movies_container">
			{topMovies.length === 0 && <p>Carregando...</p>}
			{topMovies.length > 0 && topMovies.map((topMovie) => <MovieCard key={topMovie.id} movie={topMovie} /> )}
		</div>
	</div>
  )
}

export default Home