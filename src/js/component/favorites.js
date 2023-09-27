import React, { useContext } from 'react';
import { Context } from '../store/appContext';



export const Favorites = () => {
    const { store, actions } = useContext(Context)
    const { favorites } = store

    return (
        <>
            <div className="btn-group me-5">
                <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites 
                    <span className='px-2 rounded-1 fw-bold text-center bg-primary'>
                        {favorites.length}
                    </span>
                </button>
                <ul className="dropdown-menu">
                    {
                        favorites.length == 0
                            ?
                            <p className='text-center'>... Empty</p>
                            :
                            favorites.map((item, index) => {
                                return (
                                    <li className='d-flex justify-content-between align-items-center p-1'
                                        key={index}>
                                        {favorites[index].properties.name}
                                        <a href="#" onClick={() => { actions.deleteFavorite(item, index); }}>
                                            <i className="fa-solid fa-trash-can"></i>
                                        </a>
                                    </li>

                                )
                            })
                    }
                </ul>
            </div>
        </>
    )
}