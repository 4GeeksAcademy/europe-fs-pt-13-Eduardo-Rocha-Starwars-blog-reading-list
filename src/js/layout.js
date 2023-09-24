import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import { Home } from "./views/home";
import { CharacterDetail } from "./views/CharacterDetail";
import { PlanetDetail } from "./views/PlanetDetail";
import { VehicleDetail } from "./views/VehicleDetail";

import injectContext from "./store/appContext";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Navbar />
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/CharacterDetail" element={<CharacterDetail />} />
						<Route exact path="/PlanetDetail" element={<PlanetDetail />} />
						<Route exact path="/VehicleDetail" element={<VehicleDetail />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
