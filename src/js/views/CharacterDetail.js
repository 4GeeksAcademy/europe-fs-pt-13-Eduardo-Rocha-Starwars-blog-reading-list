import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterDetail = (props) => {
	const [character, setCharacter] = useState({});
	const [characterdata, setCharacterData] = useState({});
    const { store, actions } = useContext(Context);

	useEffect(()=> {
        fetch(`https://www.swapi.tech/api/people/${props.uid}`)
        .then(res => res.json())
        .then(data => setCharacter(data.result))
        .catch(err => console.error(err))
    }, [])

    console.log(character);

	useEffect(()=> {
        fetch(`https://www.swapi.tech/api/people/${props.uid}`)
        .then(res => res.json())
        .then(data => setCharacterData(data.result.properties))
        .catch(err => console.error(err))
    }, [])

    console.log("***", characterdata);

	return (
		<div className="">
			<div className="row">
				<div className="col-6 text-center">
					<img src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`} className="col-6" />
				</div>
				<div className="col-6 text-center">
					<h1 className="col-6">{character.name}</h1>
					<p className="col-3"> </p>
					<div className="col-6">
						<p className="text">{character.description}</p>				
					</div>
					<p className="col-3"> </p>
				</div>
			</div>
			<hr className="my-4 bg-danger" />
			<div className="row text-center">
				<div className="col text-danger">
					<h5>Gender</h5>
					<p>{characterdata.gender}</p>
				</div>
				<div className="col text-danger">
					<h5>Height</h5>
					<p>{characterdata.height}</p>
				</div>
				<div className="col text-danger">
					<h5>Mass</h5>
					<p>{characterdata.mass}</p>
				</div>
				<div className="col text-danger">
					<h5>Hair color</h5>
					<p>{characterdata.hair_color}</p>
				</div>
				<div className="col text-danger">
					<h5>Skin color</h5>
					<p>{characterdata.skin_color}</p>
				</div>
				<div className="col text-danger">
					<h5>Birth year</h5>
					<p>{characterdata.birth_year}</p>
				</div>
			</div>

			<Link to="/">
				<span className="btn btn-primary btn-lg mt-5" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};