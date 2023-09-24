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
				{characters.map((characters, index) => (
					<CharacterCard className="card" key={index} uid={characters.uid} name={characters.name} url={characters.url} />
				))}
        	</div>
			<h2 className="text-danger mt-5">Planets</h2>
			<div className="d-flex overflow-auto">
				{planets.map((planets, index) => (
					<PlanetCard className="card" key={index} uid={planets.uid} name={planets.name} url={planets.url} />
				))}
        	</div>
			<h2 className="text-danger mt-5">Vehicles</h2>
			<div className="d-flex overflow-auto">
				{vehicles.map((vehicles, index) => (
					<VehicleCard className="card" key={index} uid={vehicles.uid} name={vehicles.name} url={vehicles.url} />
				))}
        	</div>
		</div>
	)
};
