import { useEffect, useState } from "react";
import { useFetcher, useParams } from "react-router-dom"
import {
	BsGraphUp,
	BsWallet2,
	BsHourglassSplit,
	BsFillFileEarmarkTextFill
} from 'react-icons/bs'

import MovieCard from "../components/MovieCard";
import './Movie.css';
import axios from "axios";

const Movie = () => {
	const {id} = useParams();
	const [movie, setMovie] = useState(null);

	useEffect(() => {

		axios.get(`/.netlify/functions/movieDetails?id=${id}`).then((response) => {
			setMovie(response.data)
		}).catch((error) => {
			console.log(error)
		})

	}, []);

	const formatCurrency = (number) => {
		return number.toLocaleString("en-US", {
			style: "currency",
			currency: "USD",
		});
	};

  return (
	<div className="movie_page">
		{movie && (
			<>
				<MovieCard movie={movie} showLink={false} />
				<div className="content-wrapper">
					<p className="tagline">{movie.tagline}</p>
					<div className="info">
						<h3>
							<BsWallet2 /> Orçamento
						</h3>
						<p>{formatCurrency(movie.budget)}</p>
					</div>
					<div className="info">
						<h3>
							<BsGraphUp /> Receita
						</h3>
						<p>{formatCurrency(movie.revenue)}</p>
					</div>
					<div className="info">
						<h3>
							<BsHourglassSplit /> Duração
						</h3>
						<p>{movie.runtime} minutos</p>
					</div>
					<div className="info description">
						<h3>
							<BsFillFileEarmarkTextFill /> Descrição
						</h3>
						<p>{movie.overview}</p>
					</div>
				</div>
			</>
		)}
	</div>
  )
}

export default Movie