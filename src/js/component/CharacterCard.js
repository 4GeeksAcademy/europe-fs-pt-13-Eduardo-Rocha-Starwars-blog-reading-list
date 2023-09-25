import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterCard = (props) => {
    const [character, setCharacter] = useState({});
    const [characterdata, setCharacterData] = useState({});
    const { store, actions } = useContext(Context);

    useEffect(()=> {
        fetch(`https://www.swapi.tech/api/people/${props.uid}`)
        .then(res => res.json())
        .then(data => 
            {setCharacter(data.result)
            setCharacterData(data.result.properties)}
            )
        .catch(err => console.error(err))
    }, [])

    console.log("***", character);
    console.log("*data*", characterdata);
    

    return (
        <div className="card mt-2 mx-1" >
            <img src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">Gender: {characterdata.gender}</p>
                <p className="card-text">Hair-Color: {characterdata.hair_color}</p>
                <p className="card-text">Eye-Color: {characterdata.eye_color}</p>
                <div className="row">
                    <Link to={"/CharacterDetail/"} className="btn btn-primary col-5">Learn more</Link>
                    <p className="col-5"></p>
                    <button className="btn btn-warning col-2" onClick={()=> actions.addFavorites(character.name)}><i className="far fa-heart"></i></button>
                </div>               
            </div>
        </div>
    )
};


