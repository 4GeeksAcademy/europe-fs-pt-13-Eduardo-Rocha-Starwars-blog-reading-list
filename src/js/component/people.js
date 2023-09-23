import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const People = props => {
    const { store, actions } = useContext(Context);

    return (
        <div className="row row-cols-1 row-cols-md-3 mx-1 g-4">
        {store.people.map((e, index) =>     
            <div key={index} className="col">
                <div className="card " style={{ width: "18rem" }}>                       
                    <img src="..." className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{e.name}</h5>
                        <p className="card-text">{e.gender} gender</p>
                        <p className="card-text">{e.hair_color} hair_color</p>
                        <p className="card-text">{e.eye_color} eye_color</p>
                    <div className="d-flex justify-content-between">
                        <button type="button" className="btn btn-outline-primary mx-1">Learn more!</button>
                        <button type="button" className="btn btn-outline-warning mx-1"><i className="fa-regular fa-heart"></i></button>               
                    </div>
                    </div>
                </div>
            </div>
        )}    
        </div>   
    )
};
