import React, { useContext } from 'react';
import { Context } from '../store/appContext';

export const Navbar = () => {
	const { store, actions } = useContext(Context)
    const { favorites } = store

	return (
		<nav className="navbar navbar-dark bg-dark mb-4 ps-1 py-4">
			<span className="navbar-brand mb-0 ms-5 h1">
				<img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" className="logo-img"></img>
			</span>
			
			<div className="btn-group me-5">
                <button className="btn btn-primary dropdown-toggle position-relative" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites 
					<span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                        {favorites.length}
                    </span>
                </button>
                <ul className="dropdown-menu">
                    {favorites.length == 0 ? <p className='text-center'>... Empty</p> : favorites.map((item, index) => {
                        return (
                            <li className='d-flex justify-content-between align-items-center p-1'
                                key={index}>
                                {favorites[index].character.name}
                                <a href="#" onClick={() => { actions.deleteFavorite(item, index); }}>X</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
		</nav>
	);
};
