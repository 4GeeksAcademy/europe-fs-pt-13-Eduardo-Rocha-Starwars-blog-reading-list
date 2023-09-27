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
			addFavorite: (resourceData, resourceType) => {
				const store = getStore();

				if (store.favorites.filter((item) => item.uid === resourceData.uid && item.resourceType === resourceType).length > 0) {
					let newFavorites = store.favorites.filter((item) => !(item.uid === resourceData.uid && item.resourceType === resourceType))
					setStore({ favorites: newFavorites });
				} else {
					setStore({ favorites: [...store.favorites, { resourceData, resourceType: resourceType }] })
					console.log("item already exists in favorrite")
				}
			},
			deleteFavorite: (element) => {
				const store = getStore();
				const { favorites } = store;
				const unFavorite = favorites.filter(item => item.properties.name != element.properties.name);

				setStore({
					favorites: unFavorite
				})
			}
		},
	};
};

export default getState;
