const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			character:[],
			vehicles: [],
			planets: [],
			favorites: []
		},
		actions: {
			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
				.then(res => res.json())
				.then(data => setStore({characters: data.results}))
				.catch(err => console.log(err))
			},
			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles")
				.then(res => res.json())
				.then(data => setStore({vehicles: data.results}))
				.catch(err => console.log(err))
			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
				.then(res => res.json())
				.then(data => setStore({planets: data.results}))
				.catch(err => console.log(err))
			},
			addFavorites: (param) => {
				const store = getStore();
				if (store.favorites.includes(param) == false){
					const favorites = store.favorites.concat(param);
					setStore({favorites: favorites})
				} else {
					const favorites = store.favorites.filter(e => e !== param);
					setStore({favorites: favorites})
				}
			}
		},
	};
};

export default getState;
