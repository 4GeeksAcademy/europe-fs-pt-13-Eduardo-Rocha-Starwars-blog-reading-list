import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";

import { CharacterCard } from "../component/CharacterCard";
import { PlanetCard } from "../component/PlanetCard";
import { VehicleCard } from "../component/VehicleCard";

export const Home = () => {
	const [characters, setCharacters] = useState([])
	const [planets, setPlanets] = useState([])
	const [vehicles, setVehicles] = useState([])

	function getPeople () {
		fetch('https://swapi.tech/api/people')
		.then((response) => response.json())
		.then((data) => setCharacters(data.results) )
	}
	function getPlanets () {
		fetch('https://swapi.tech/api/planets')
		.then((response) => response.json())
		.then((data) => setPlanets(data.results) )
	}

	function getVehicles () {
		fetch('https://swapi.tech/api/vehicles')
		.then((response) => response.json())
		.then((data) => setVehicles(data.results) )
	}

	useEffect(()=>{
		getPeople(),
		getPlanets(),
		getVehicles()
	},[])

	return(
		<div className="mt-5">
		<h2 className="text-danger">Characters</h2>
			<div className="d-flex overflow-auto">
				{characters.map((person, index) => (
					<CharacterCard className="card" key={index} uid={person.uid} name={person.name} url={person.url} />
				))}
        	</div>
			<h2 className="text-danger mt-5">Planets</h2>
			<div className="d-flex overflow-auto">
				{planets.map((planet, index) => (
					<PlanetCard className="card" key={index} uid={planet.uid} name={planet.name} url={planet.url} />
				))}
        	</div>
			<h2 className="text-danger mt-5">Planets</h2>
			<div className="d-flex overflow-auto">
				{vehicles.map((vehicle, index) => (
					<VehicleCard className="card" key={index} uid={vehicle.uid} name={vehicle.name} url={vehicle.url} />
				))}
        	</div>
		</div>
	)
};
