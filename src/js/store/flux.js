const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			peopleDetails:{},
			planets:[],
			planetsDetails:[],
			vehicles:[],
			vehiclesDetails:[],
			favorites:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getPeopleApi: async()=>{
				const resp = await fetch(`https://swapi.dev/api/people`);
				const data = await resp.json();
				await setStore({people: data.results});
			},
			getPeopleDetails: (id)=>{
				fetch(`https://swapi.dev/api/people/${id}`)
				.then(resp=> resp.json())
				.then(data=> setStore({peopleDetails: data}))
			},
			getPlanetsApi: async()=>{
				const resp = await fetch(`https://swapi.dev/api/planets`);
				const data = await resp.json();
				await setStore({planets: data.results});
			},
			getPlanetsDetails: (id)=>{
				fetch(`https://swapi.dev/api/planets/${id}`)
				.then(resp=> resp.json())
				.then(data=> setStore({planetsDetails: data}))
			},
			getVehiclesApi: async()=>{
				const resp = await fetch(`https://swapi.dev/api/vehicles`);
				const data = await resp.json();
				await setStore({vehicles: data.results});
			},
			getVehiclesDetails: (id)=>{
				fetch(`https://swapi.dev/api/vehicles/${id}`)
				.then(resp=> resp.json())
				.then(data=> setStore({vehiclesDetails: data}))
			},
			addFavorite:(url, name)=>{
				const store = getStore();
				const data = {url, name};
				const isFavorite = store.favorites.some((favorite)=>(favorite.name === name));
				
				if(!isFavorite){
				setStore({
					...store,
					favorites:[...store.favorites, data]
				})
			} else{
				const deleteFavorite= store.favorites.filter((favorite)=>(favorite.name !== name))
				setStore({
					...store,
					favorites: deleteFavorite
				})
			}
				
				
			},
			deleteFavorite:(url)=>{
				const store= getStore()
				const updateFavortites = store.favorites.filter((favorite)=>(favorite.url !== url));
				setStore({favorites: updateFavortites})
			}
		}
	};
};

export default getState;
