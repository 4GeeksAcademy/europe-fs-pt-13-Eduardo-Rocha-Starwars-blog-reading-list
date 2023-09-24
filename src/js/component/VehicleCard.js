import React, { Component, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehicleCard = (props) => {
    const {store, actions} = useContext(Context)
    
    return (
    <div className="card mt-2 mx-1" >
        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.uid}.jpg`} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.manufacturer}</p>
            <p className="card-text">{props.model}</p>
            <p className="card-text">{props.passengers}</p>
            <Link to={"/VehicleDetail/"+props.uid} className="btn btn-primary">Learn more</Link>
            <button className="btn btn-warning" onClick={()=> actions.addFavorites(props.name)}><i className="far fa-heart"></i></button>
        </div>
    </div>
)};
