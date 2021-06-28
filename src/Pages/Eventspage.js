import React from 'react';
import Events from "../Components/Events/Events";

function Eventspage({initiative}){
    return(
        <div>
            <Events  initiative={initiative} />
        </div>

    )
}

export default Eventspage;
