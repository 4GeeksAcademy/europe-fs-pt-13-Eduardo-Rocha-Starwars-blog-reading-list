import React, { useContext } from "react";
import "../../styles/home.css";

import { People } from "../component/people";
import { Planets } from "../component/planets";
import { Vehicles } from "../component/vehicles";

export const Home = () => {
	return(
		<>
		<div className="my-4">
			<People />
		</div>
		<div className="my-4">
			<Planets />
		</div>
		<div className="my-4">
			<Vehicles />
		</div>
		</>
	);
};