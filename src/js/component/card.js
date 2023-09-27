import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext.js'
import "../../styles/home.css";
import { Link } from "react-router-dom";





export const Card = ({ item, type }) => {

    const { actions } = useContext(Context)
    const { properties } = item
    const { uid } = item


    return (
        <>
            {type == "person" && <div className="card col-4 m-2">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
                        className="card-img-top img w-100" alt="character-img" />
                    <div className="card-body">
                        <h3 className="card-title"><strong>{properties.name}</strong></h3>
                        <p className="card-text fs-5 p-0 m-0"><strong>Gender: </strong>{properties.gender}</p>
                        <p className="card-text fs-5 p-0 m-0"><strong>Birth year: </strong>{properties.birth_year}</p>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-between">
                            <Link to={`learn/${type}/${uid}`}>
                                < button className="btn btn-primary">Learn more!</button>
                            </Link>
                            < button className="btn btn-warning" onClick={() => actions.addFavorite(item)}>
                                heart icon
                            </button>
                        </div>
                    </div>
                </div>
            }


            {
                type == "planet"
                &&
                <div className="card col-4 m-2">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
                        className="card-img-top img-planet" alt="planet-img" />
                    <div className="card-body">
                        <h3 className="card-title"><strong>{properties.name}</strong></h3>
                        <p className="card-text fs-5 p-0 m-0"><strong>Population: </strong>{properties.population}</p>
                        <p className="card-text fs-5 p-0 m-0"><strong>Terrain: </strong>{properties.terrain}</p>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-between">
                            <Link to={`learn/${type}/${uid}`}>
                                < button className="btn btn-primary">Learn more!</button>
                            </Link>
                            < button className="btn btn-warning"
                                onClick={() => actions.addFavorite(item)}
                            >
                                
                            </button>
                        </div>
                    </div>
                </div>
            }


            {
                type == "vehicle"
                &&
                <div className="card col-4 m-2">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`}
                        className="card-img-top img w-100" alt="vehicle-img" />
                    <div className="card-body">
                        <h3 className="card-title"><strong>{properties.name}</strong></h3>
                        <p className="card-text fs-5 p-0 m-0"><strong>Model: </strong>{properties.model}</p>
                        <p className="card-text fs-5 p-0 m-0"><strong>Manufacturer: </strong>{properties.manufacturer}</p>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-between">
                            <Link to={`learn/${type}/${uid}`}>
                                < button className="btn btn-primary">Learn more!</button>
                            </Link>
                            < button className="btn btn-warning"
                                onClick={() => actions.addFavorite(item)}
                            >
                                
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}


