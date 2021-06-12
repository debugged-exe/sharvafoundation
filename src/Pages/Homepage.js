import React from 'react';
import {Link} from "react-router-dom";
import BackgroundCarousel from "../Components/BackgroundCarousel/BackgroundCarousel";
import Counter from "../Components/Counter/Counter";
 import Aboutus from "../Components/Aboutus/Aboutus";
import OurGoals from "../Components/OurGoals/OurGoals";


function Homepage(){
    return(
        <div>
            
            <BackgroundCarousel />
            <Counter />
            <Aboutus id="#aboutus"/> 
            <OurGoals />
            
        </div>

    )
}
        
export default Homepage;