import React, { useContext } from "react";
import "../../styles/home.css";

import { People } from "../component/people";
import { Planets } from "../component/planets";
import { Vehicles } from "../component/vehicles";

export const Home = () => {
	return(
		<>
		<div>
			<People />
		</div>
		<div>
			<Planets />
		</div>
		<div>
			<Vehicles />
		</div>
		</>
	);
};