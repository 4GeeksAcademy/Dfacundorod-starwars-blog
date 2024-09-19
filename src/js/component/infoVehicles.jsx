import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export function InfoVehicles(){

    const {store, actions}= useContext(Context)
    const {id} = useParams()

    useEffect(()=>{
        actions.getVehiclesDetails(id)
    },[store.vehiclesDetails])

    if(Object.keys(store.vehiclesDetails).length===0){
        return <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    }

    return(<>
        <div className="container" >
            <div className="row g-0 my-4">
                <div className="col-md-7">
                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} className="card-img rounded-start" alt="..."/>
                </div>
                <div className="col-md-5">
                    <div className="card-body">
                        <h5 className="card-title">{store.vehiclesDetails.name}</h5>
                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis inventore assumenda quos ducimus, eos libero, perspiciatis ipsam expedita, veritatis quas fugit autem eius. Velit recusandae ipsum laudantium voluptatum ad!</p>
                    </div>
                </div>
            </div>
            <div className="borderRed d-flex justify-content-between text-danger">
                <div>
                <h4>Name</h4>
                <h5>{store.vehiclesDetails.name}</h5>
                </div>
                <div>
                    <h4>Model</h4>
                    <h5>{store.vehiclesDetails.model}</h5>
                </div>
                <div>
                    <h4>Cost</h4>
                    <h5>{store.vehiclesDetails.cost_in_credits}</h5>
                </div>
                <div>
                    <h4>Manufacturer</h4>
                    <h5>{store.vehiclesDetails.manufacturer}</h5>
                </div>
                <div>
                    <h4>Passengers</h4>
                    <h5>{store.vehiclesDetails.passengers}</h5>
                </div>
                <div>
                    <h4>Carge Capacity</h4>
                    <h5>{store.vehiclesDetails.cargo_capacity}</h5>
                </div>
            </div>
        </div>
    </>
    )
}