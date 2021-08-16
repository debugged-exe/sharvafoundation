import React from 'react';
import Events from "../Components/Events/Events";
import Footer from "../Components/Footer/Footer.js";

function Eventspage({initiative,setInitiative,setCarousel}){
    return(
        <div>
            <Events  initiative={initiative} setCarousel={setCarousel} />
            <Footer setInitiative={setInitiative} />
        </div>

    )
}

export default Eventspage;
