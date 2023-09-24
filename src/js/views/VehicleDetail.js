import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehicleDetail = props => {
	const { store, actions } = useContext(Context);
	const [vehicle, setVehicle] = useState({})
	const params = useParams();

	function getVehicle(){
		fetch('https://swapi.tech/api/vehicles/'+params.uid)
		.then((response) => response.json())
		.then((data) => {
			console.log(data.result.properties)
			setVehicle(data.result.properties);
			console.log(vehicle)
		} )
	}

	useEffect(()=>{
		getVehicle();
		console.log(vehicle)
	},[])

	return (
        <div className="">
			<div className="row">
				<div className="col-6 text-center">
					<img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.uid}.jpg`} className="col-6" />
				</div>
				<div className="col-6 text-center">
					<h1 className="col-6">{vehicle.name}</h1>
					<p className="col-3"> </p>
					<div className="col-6">
						<p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget vehicula elit, sit amet fringilla eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum tincidunt libero nec neque mattis, quis ultricies justo fermentum. Ut ac pulvinar arcu. Suspendisse porta sodales mi sit amet iaculis. Aliquam ac augue varius, blandit est quis, pulvinar nisl. Cras massa quam, molestie lobortis mollis sed, rutrum at risus. Sed a rhoncus dolor. Quisque dignissim nisi turpis, eget aliquet purus mattis vitae.</p>				
					</div>
					<p className="col-3"> </p>
				</div>
			</div>
			<hr className="my-4 bg-danger" />
			<div className="row text-center">
				<div className="col text-danger">
					<h5>Terrain</h5>
					<p>{vehicle.model}</p>
				</div>
				<div className="col text-danger">
					<h5>Climate</h5>
					<p>{vehicle.class}</p>
				</div>
				<div className="col text-danger">
					<h5>Diameter</h5>
					<p>{vehicle.manufacturer}</p>
				</div>
				<div className="col text-danger">
					<h5>Gravity</h5>
					<p>{vehicle.crew}</p>
				</div>
				<div className="col text-danger">
					<h5>Population</h5>
					<p>{vehicle.passengers}</p>
				</div>
				<div className="col text-danger">
					<h5>Rotation period</h5>
					<p>{vehicle.cargo_capacity}</p>
				</div>
			</div>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
    );
};