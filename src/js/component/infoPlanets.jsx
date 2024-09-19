import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export function InfoPlanets(){
    const {store, actions}= useContext(Context)
    const {id} = useParams()


    useEffect(()=>{
        actions.getPlanetsDetails(id)
    },[store.planetsDetails])

    if(Object.keys(store.planetsDetails)===0){
        return(
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>)
    }

    return(
        <>
        <div className="container " >
            <div className="row g-0 my-4">
                <div className="col-md-7">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="card-img rounded-start" alt="..."/>
                </div>
                <div className="col-md-5">
                    <div className="card-body">
                        <h5 className="card-title">{store.planetsDetails.name}</h5>
                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis inventore assumenda quos ducimus, eos libero, perspiciatis ipsam expedita, veritatis quas fugit autem eius. Velit recusandae ipsum laudantium voluptatum ad!</p>
                    </div>
                </div>
            </div>
        <div className="borderRed d-flex justify-content-between text-danger">
            <div>
                <h4>Name:</h4>
                <h5>{store.planetsDetails.name}</h5>
            </div>
            <div>
                <h4>Climate:</h4>
                <h5>{store.planetsDetails.climate}</h5>
            </div>
            <div>
                <h4>Population:</h4>
                <h5>{store.planetsDetails.population}</h5>
            </div>
            <div>
                <h4>Orbital Period:</h4>
                <h5>{store.planetsDetails.orbital_period}</h5>
            </div>
            <div>
                <h4>Rotation Period:</h4>
                <h5>{store.planetsDetails.rotation_period}</h5>
            </div>
            <div>
                <h4>Diameter</h4>
                <h5>{store.planetsDetails.diameter}</h5>
            </div>
        </div>
    </div></>
    )
}