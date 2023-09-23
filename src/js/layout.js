import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToTop from "./component/scrollToTop";
import { Navbar } from "./component/navbar";

import { Home } from "./views/home";
import { Peopleview } from "./views/peopleview";
import { Planetsview } from "./views/planetsview";
import { Vehiclesview } from "./views/vehiclesview";

import injectContext from "./store/appContext";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/people" element={<Peopleview />} />
						<Route exact path="/planets" element={<Planetsview />} />
						<Route exact path="/vehicles" element={<Vehiclesview />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
