import React, { Component, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetCard = (props) => {
    const {store, actions} = useContext(Context)
    
    return (
    <div className="card mt-2 mx-1" >
        <img src={`https://starwars-visualguide.com/assets/img/planets/${props.uid}.jpg`} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.population}</p>
            <p className="card-text">{props.terrain}</p>
            <Link to={"/PlanetDetail/"+props.uid} className="btn btn-primary">Learn more</Link>
            <button className="btn btn-warning" onClick={()=> actions.addFavorites(props.name)}><i className="far fa-heart"></i></button>
        </div>
    </div>
)};
