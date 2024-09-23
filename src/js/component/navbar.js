import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons"

export const Navbar = () => {

const{store,actions}= useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light mb-3 justify-content-around">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="ml-auto">
					<div className="dropdown">
						<Link className="btn btn-primary dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites<span className="badge text-bg-primary">{(store.favorites).length}</span>
						</Link>
						<ul className="dropdown-menu">
							{store.favorites.map((item, index)=>
							(<li className="d-flex">
								<Link key={index} className="dropdown-item" to={item.url}>{item.name}</Link>
								<button className="delete" onClick={()=>{
									actions.deleteFavorite(item.url)
								}}><FontAwesomeIcon icon={faTrash} /></button>
								</li>)
							)}
						</ul>
					</div>
			</div>
		</nav>
	);
};
