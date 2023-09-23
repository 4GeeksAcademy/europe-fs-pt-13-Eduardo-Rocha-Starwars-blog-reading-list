import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Vehicles = () => {
    const { store, actions } = useContext(Context);

    let vehiclesdata = store.vehicles;
    console.log(vehiclesdata);

    return(
        <div className="row row-cols-1 row-cols-md-3 mx-1 g-4">
        {store.vehicles.map((e, index) =>     
            <div key={index} className="col">
                <div className="card " style={{ width: "18rem" }}>                       
                    <img src="..." className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{e.name}</h5>
                        <p className="card-text">{e.model} gender</p>
                        <p className="card-text">{e.vehicle_class} hair_color</p>
                        <p className="card-text">{e.passengers} eye_color</p>
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
