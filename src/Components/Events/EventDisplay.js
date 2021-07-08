import React,{useState,useEffect} from 'react';
import { SiOpencontainersinitiative } from 'react-icons/si';
import {Link} from 'react-router-dom';
import './EventDisplay.css';

const EventDisplay = ({proj,initiative,setInitiative}) => {

    return(
      <div className="mt6 tc" id="project">
        <Link to="/events" onClick={()=>setInitiative(initiative)} >
        <p className="return">Back button</p>
        </Link>
       
        <h1 className="black">#{initiative.toUpperCase()}</h1>
         <div className="grid-component mt3">
            {
              proj.map((item,index)=>{
                return(
                    <div className="ma3" key={index}>
                      <img src={item} style={{width:'100%',height:'100%',objectFit:'fill'}}/>
                    </div>
                )
              })
            }
         </div>
        </div>
    );
}

export default EventDisplay;
