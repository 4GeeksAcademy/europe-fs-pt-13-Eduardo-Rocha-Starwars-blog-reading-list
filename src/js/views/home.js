import React from "react";
import "../../styles/home.css";

import { People } from "./component/people";
import { Vehicles } from "./views/vehicles";
import { Planets } from "./views/planets";

export const Home = () => {
	return(
		<div>
			<People />
			<Planets />
			<Vehicles />
		</div>
		)
};