import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const favorites = //process favorites selected with onclick in home view


export const FavoriteButton = () => {
    const { store, actions } = useContext(Context);
  
    return (
      <ul>
        {store.favorites.map((item, index) => (
          <li key={index}>
            <li><span className="dropdown-item" href="#">{store.character.name}</span><button onClick={() => store.addFavorites()}>x</button></li>
          </li>
        ))}
      </ul>
    ) 
};