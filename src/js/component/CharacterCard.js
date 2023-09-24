import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterCard = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="card mt-2 mx-1" >
        <img src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.gender}</p>
            <p className="card-text">{props.hair_color}</p>
            <p className="card-text">{props.eye_color}</p>
            <div className="row">
                <Link to={"/CharacterDetail/"+props.uid} className="btn btn-primary col-5">Learn more</Link>
                <p className="col-5"></p>
                <button className="btn btn-warning col-2" onClick={()=> actions.addFavorites(props.name)}><i className="far fa-heart"></i></button>
            </div>
            
            
        </div>
    </div>
    )
};
