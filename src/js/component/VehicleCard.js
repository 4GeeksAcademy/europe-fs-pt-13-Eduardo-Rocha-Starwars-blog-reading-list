import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehicleCard = (props) => {
    const [vehicle, setVehicle] = useState({});
    const [vehicledata, setVehicleData] = useState({});
    const { store, actions } = useContext(Context);

    useEffect(()=> {
        fetch(`https://www.swapi.tech/api/vehicles/${props.uid}`)
        .then(res => res.json())
        .then(data => 
            {setVehicle(data.result)
            setVehicleData(data.result.properties)}
            )
        .catch(err => console.error(err))
    }, [])

    console.log(vehicle);
    console.log("***", vehicledata);
    
    return (
    <div className="card mt-2 mx-1" >
        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.uid}.jpg`} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Name: {vehicle.name}</h5>
            <p className="card-text">Manufacturer: {vehicledata.manufacturer}</p>
            <p className="card-text">Model: {vehicledata.model}</p>
            <p className="card-text">Passengers: {vehicledata.passengers}</p>
            <Link to={"/VehicleDetail/"+props.uid} className="btn btn-primary">Learn more</Link>
            <button className="btn btn-warning" onClick={()=> actions.addFavorites(vehicle.name)}><i className="far fa-heart"></i></button>
        </div>
    </div>
)};
