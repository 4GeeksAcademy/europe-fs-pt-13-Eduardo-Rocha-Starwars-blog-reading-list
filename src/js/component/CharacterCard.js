import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterCard = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
                <div className="card" >
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">Gender: {props.gender}</p>
                        <p className="card-text">Hair-Color: {props.hair_color}</p>
                        <p className="card-text">Eye-Color: {props.eye_color}</p>
                        <div className="row">
                            <Link to={"/CharacterDetail/"+props.uid} className="btn btn-primary col-5">Learn more</Link>
                            <p className="col-5"></p>
                            <button className="btn btn-warning col-2" onClick={()=> actions.addFavorites(props.name)}><i className="far fa-heart"></i></button>
                        </div>               
                    </div>
                </div>
            </div>
        </div>
    )
};

CharacterCard.propTypes = {
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    hair_color: PropTypes.string.isRequired,
    eye_color: PropTypes.string.isRequired,
};
