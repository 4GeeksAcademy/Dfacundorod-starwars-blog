import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-regular-svg-icons"
export const CardCharacter = (props) => {
	
	const {store, actions}= useContext(Context)
	const urlCharacter = props.urlCharacter;
	const id = urlCharacter.match(/\/(\d+)\//)[1];
	const nameCharacter = props.name;
	const linkComponent = `/info-characters/${id}`
	const [favorite, setFavorite] = useState(`favorite`)

    useEffect(()=>{
        const isAFavorite = store.favorites.some((favorite)=>(favorite.name === nameCharacter));
        setFavorite(isAFavorite ? 'favorite' : 'noFavorite')
    },[store.favorites])

    return (
		<div key={id}>
			<div className="card" style= {{width: "18rem", minHeight:"500px"}}>
				<img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">Gender: {props.gender}.</p>
					<p className="card-text">Hair color: {props.hairColor}.</p>
					<p className="card-text">Eye color: {props.eyeColor}.</p>
					<div className="d-flex justify-content-around">
						<Link to={`/info-characters/${id}`} className="btn btn-outline-primary">Learn More!!</Link>
						<button className={favorite}  onClick={()=>{actions.addFavorite(linkComponent, nameCharacter)}}>
							<FontAwesomeIcon icon={faHeart} />
						</button>
					</div>
				</div>
			</div>
		</div>
);
}
