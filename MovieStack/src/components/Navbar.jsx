import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import { useState } from "react";

import "./Navbar.css";

const Navbar = () => {
	const [search, setSearch] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!search) return;
		
		navigate(`/search?q=${search}`);
		setSearch("");
	};

  return (
	<nav id="navbar">
		<h2 className="logo">
			<Link to="/"><BiCameraMovie /> MovieStack</Link>
		</h2>
		<form onSubmit={handleSubmit}>
			<label htmlFor="movieSearch"></label>
			<input
				type="text"
				id="movieSearch"
				placeholder="Busque um filme"
				onChange={(e) => setSearch(e.target.value)}
				value={search}
				/>
			<button className="submitButton">
				<BiSearchAlt2 />
			</button>
		</form>
	  </nav>
  )
}

export default Navbar