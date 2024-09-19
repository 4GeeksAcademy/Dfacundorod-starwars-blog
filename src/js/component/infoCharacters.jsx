import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export function InfoCharacters(props){

    const {store, actions}= useContext(Context)
    const {id} = useParams()

    useEffect(()=>{
        actions.getPeopleDetails(id)
    },[store.peopleDetails])

    if(Object.keys(store.peopleDetails).length===0){
        return <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    }

    return(<>
        <div className="container" >
            <div className="row g-0 my-4">
                <div className="col-md-7">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img rounded-start" alt="..."/>
                </div>
                <div className="col-md-5">
                    <div className="card-body">
                        <h5 className="card-title">{store.peopleDetails.name}</h5>
                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis inventore assumenda quos ducimus, eos libero, perspiciatis ipsam expedita, veritatis quas fugit autem eius. Velit recusandae ipsum laudantium voluptatum ad!</p>
                    </div>
                </div>
            </div>
            <div className="borderRed d-flex justify-content-between text-danger">
                <div>
                <h4>Name</h4>
                <h5>{store.peopleDetails.name}</h5>
                </div>
                <div>
                    <h4>Birth Year</h4>
                    <h5>{store.peopleDetails.birth_year}</h5>
                </div>
                <div>
                    <h4>Gender</h4>
                    <h5>{store.peopleDetails.gender}</h5>
                </div>
                <div>
                    <h4>Height</h4>
                    <h5>{store.peopleDetails.height}</h5>
                </div>
                <div>
                    <h4>Skin Color</h4>
                    <h5>{store.peopleDetails.skin_color}</h5>
                </div>
                <div>
                    <h4>Eye Color</h4>
                    <h5>{store.peopleDetails.eye_color}</h5>
                </div>
            </div>
        </div>
    </>
    )
}