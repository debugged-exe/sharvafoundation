import React from 'react';
import Awareness from '../Components/Awareness/Awareness';
import Footer from "../Components/Footer/Footer";

function Awarenesspage({setInitiative}) {
    return (
        <div>
            <Awareness />
            <Footer setInitiative={setInitiative} />
        </div>)
}

export default Awarenesspage;