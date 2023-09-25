import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const FavoriteButton = () => {
    const { store, actions } = useContext(Context);
  
    return (
      <div class="dropdown">
				<button className="btn btn-primary dropdown-toggle me-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites<span className="badge">no.items</span>
				</button>
				<ul class="dropdown-menu dropdown-menu-dark">
					<li><span className="dropdown-item" href="#">Character1</span><button>x</button></li>
					<li><span className="dropdown-item" href="#">Character3</span><button>x</button></li>
					<li><span className="dropdown-item" href="#">Character4</span><button>x</button></li>
				</ul>
      </div>
    ) 
};