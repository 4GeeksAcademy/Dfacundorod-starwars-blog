import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardCharacter } from "../component/cardCharacter.jsx";
import { CardPlanet } from "../component/cardPlanet.jsx";
import { CardVehicle } from "../component/cardVehicles.jsx";

export const Home = () => {

	const {store, actions}=useContext(Context);
	console.log(`en home desde flux`,store.people)

	return (<>
		<h1 className="text-danger">Characters</h1>
		<div className="d-flex mb-5">{(store.people).map((person)=>(<CardCharacter key={person.url} name={person.name} urlCharacter={person.url} hairColor={person.hair_color} eyeColor={person.eye_color} gender={person.gender} />))}</div>
		<h1 className="text-danger">Planets</h1>
		<div className="d-flex  mb-5">{(store.planets).map((planet)=>(<CardPlanet key={planet.url} name={planet.name} urlPlanet={planet.url} terrain={planet.terrain} populaiton={planet.population}/>))}</div>
		<h1 className="text-danger">Vehicles</h1>
		<div className="d-flex">{(store.vehicles).map((vehicle)=>(<CardVehicle key={vehicle.url} name={vehicle.name} urlVehicle={vehicle.url} model={vehicle.model} cost={vehicle.cost_in_credits}/>))}</div>

		</>
	)
};
