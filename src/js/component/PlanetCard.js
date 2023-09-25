import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetCard = (props) => {
    const [planet, setPlanet] = useState({});
    const [planetdata, setPlanetData] = useState({});
    const { store, actions } = useContext(Context);

    useEffect(()=> {
        fetch(`https://www.swapi.tech/api/planets/${props.uid}`)
        .then(res => res.json())
        .then(data => 
            {setPlanet(data.result)
            setPlanetData(data.result.properties)}
            )
        .catch(err => console.error(err))
    }, [])

    console.log(planet);
    console.log("***", planetdata);
    

    return (
        <div className="card mt-2 mx-1" >
            <img src={`https://starwars-visualguide.com/assets/img/planets/${props.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <p className="card-text">Description: {planet.description}</p>
                <p className="card-text">Population: {planetdata.population}</p>
                <p className="card-text">Terrain: {planetdata.terrain}</p>
                <div className="row">
                    <Link to={"/CharacterDetail/"+props.uid} className="btn btn-primary col-5">Learn more</Link>
                    <p className="col-5"></p>
                    <button className="btn btn-warning col-2" onClick={()=> actions.addFavorites(planet.name)}><i className="far fa-heart"></i></button>
                </div>               
            </div>
        </div>
    )
};



