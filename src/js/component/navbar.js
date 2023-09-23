import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-4 ps-1 py-4">
			<span className="navbar-brand mb-0 mx-1 h1">React SWAPI</span>
			<div className="ml-auto">
				<Link to="/">
					<button className="btn btn-primary mx-1">Home</button>
				</Link>
				<Link to="/people">
					<button className="btn btn-primary mx-1">People</button>
				</Link>
				<Link to="/planets">
					<button className="btn btn-primary mx-1">Planets</button>
				</Link>
				<Link to="/vehicles">
					<button className="btn btn-primary mx-1">Vehicles</button>
				</Link>
			</div>
		</nav>
	);
};
