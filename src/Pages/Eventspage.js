import React from 'react';
import Events from "../Components/Events/Events";

function Eventspage({initiative,setCarousel}){
    return(
        <div>
            <Events  initiative={initiative} setCarousel={setCarousel} />
        </div>

    )
}

export default Eventspage;
