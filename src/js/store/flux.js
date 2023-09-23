const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			person: [],
			vehicles: [],
			planets: []
		},
		actions: {
			loadPeople: () => {
				fetch("https://www.swapi.tech/api/people/")
				.then(res => res.json())
				.then(data => setStore({people: data["results"]}))
				.catch(err => console.log(err))
			},

			loadVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles")
				.then(res => res.json())
				.then(data => setStore({vehicles: data["results"]}))
				.catch(err => console.log(err))
			},
			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
				.then(res => res.json())
				.then(data => setStore({planets: data["results"]}))
				.catch(err => console.log(err))
			},
		},
	};
};

export default getState;
