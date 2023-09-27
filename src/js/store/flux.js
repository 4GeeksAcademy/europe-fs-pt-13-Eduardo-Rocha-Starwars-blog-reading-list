import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {

			URLBASE: "https://www.swapi.tech/api",
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],

		},


		actions: {
			getItems: () => {
				const store = getStore();
				const natures = ['people', 'planets', 'vehicles'];

				natures.forEach(async (nature) => {
					const url = `${store.URLBASE}/${nature}`;

					try {
						const response = await fetch(`${url}`)
						const data = await response.json()

						data.results.forEach(async (item) => {
							const responseTwo = await fetch(`${url}/${item.uid}`)
							// console.log(responseTwo)
							const dataTwo = await responseTwo.json()

							setStore({
								[nature]: [...store[nature], dataTwo.result]
							})
						})

					} catch (error) {
						console.log(error)

					}
				})
			},


			addFavorite: (element) => {
				const store = getStore();
				const { favorites } = store
				const isFavorite = favorites.filter(item => item.properties.name == element.properties.name);
				console.log(favorites)

				if (isFavorite.length == 0) {
					setStore({
						favorites: [...favorites, element]
					})
				} else {
					console.log("ya existe")
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

		}
	}
};

export default getState;
