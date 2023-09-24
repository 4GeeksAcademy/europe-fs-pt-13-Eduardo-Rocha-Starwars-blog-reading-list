import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-4 ps-1 py-4">
			<span className="navbar-brand mb-0 ms-5 h1">StarWars Logo</span>
			<div class="dropdown">
				<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites<span className="badge">no.items</span>
				</button>
				<ul class="dropdown-menu dropdown-menu-dark">
					<li><span className="dropdown-item" href="#">Character1</span><button>x</button></li>
					<li><span className="dropdown-item" href="#">Character3</span><button>x</button></li>
					<li><span className="dropdown-item" href="#">Character4</span><button>x</button></li>
				</ul>
				
			</div>
		</nav>
	);
};
