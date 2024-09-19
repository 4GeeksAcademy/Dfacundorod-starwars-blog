import React from "react";
import { Link } from "react-router-dom";

export function CardVehicle(props){
    
    const urlVehicle = props.urlVehicle;
	const id = urlVehicle.match(/\/(\d+)\//)[1];
	console.log(id);


    return(
        <div key={id}>
            <div className="card" style= {{width: "18rem", minHeight:"500px"}}>
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">Populaiton: {props.model}.</p>
                    <p className="card-text">Terrain: {props.cost}.</p>
                    <Link to={`/info-vehicles/${id}`} className="btn btn-outline-primary">Learn More!!</Link>
                </div>
            </div>
	    </div>
    )
}