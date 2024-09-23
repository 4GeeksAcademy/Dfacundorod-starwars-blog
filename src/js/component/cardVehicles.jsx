import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-regular-svg-icons"

export function CardVehicle(props){
    const {store, actions} = useContext(Context)
    
    const urlVehicle = props.urlVehicle;
	const id = urlVehicle.match(/\/(\d+)\//)[1];
    const nameVehicle = props.name;
    const linkComponent = `/info-vehicles/${id}`
	const [favorite, setFavorite] = useState(`favorite`)

    useEffect(()=>{
        const isAFavorite = store.favorites.some((favorite)=>(favorite.name === nameVehicle));
        setFavorite(isAFavorite ? 'favorite' : 'noFavorite')
    },[store.favorites])

    
    return(
        <div key={id}>
            <div className="card" style= {{width: "18rem", minHeight:"500px"}}>
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">Populaiton: {props.model}.</p>
                    <p className="card-text">Terrain: {props.cost}.</p>
                    <div className="d-flex justify-content-around ">
                        <Link to={`/info-vehicles/${id}`} className="btn btn-outline-primary">Learn More!!</Link>
                        <button className={favorite} onClick={()=>{actions.addFavorite(linkComponent, nameVehicle); isFavorite()}}>
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                    </div>
                </div>
            </div>
	    </div>
    )
}