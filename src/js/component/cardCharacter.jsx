import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const CardCharacter = (props) => {

	const urlCharacter = props.urlCharacter;
	const id = urlCharacter.match(/\/(\d+)\//)[1];
	console.log(id);


    return (
		<div key={id}>
			<div className="card" style= {{width: "18rem",}}>
				<img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">Gender: {props.gender}.</p>
					<p className="card-text">Hair color: {props.hairColor}.</p>
					<p className="card-text">Eye color: {props.eyeColor}.</p>
					<Link to={`/info-characters/${id}`} className="btn btn-outline-primary">Learn More!!</Link>
				</div>
			</div>
		</div>
);
}
