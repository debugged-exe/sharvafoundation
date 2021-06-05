import React from 'react';
import BackgroundCarousel from "../Components/BackgroundCarousel/BackgroundCarousel";
import Counter from "../Components/Counter/Counter";
 import Aboutus from "../Components/Aboutus/Aboutus";
import OurGoals from "../Components/OurGoals/OurGoals";


function Homepage(){
    return(
        <div>
            
            <BackgroundCarousel />
            <Counter />
            <Aboutus /> 
            <OurGoals />
            
        </div>

    )
}
        
export default Homepage;