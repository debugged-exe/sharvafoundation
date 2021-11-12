import React from 'react';
import BackgroundCarousel from "../Components/BackgroundCarousel/BackgroundCarousel";
import Counter from "../Components/Counter/Counter";
import Merchandise from "../Components/Merchandise/Merchandise";
 import Aboutus from "../Components/Aboutus/Aboutus";
import OurGoals from "../Components/OurGoals/OurGoals";
import Footer from "../Components/Footer/Footer";
import RecentEvents from "../Components/RecentEvents/RecentEvents";



function Homepage({setInitiative}){
    return(
        <div>

            <BackgroundCarousel />
            <Counter />
            <Aboutus id="#aboutus"/>
            <OurGoals id="#ourgoals"/>
            <Merchandise />
        <RecentEvents setInitiative={setInitiative} />
        
            <Footer setInitiative={setInitiative} />
        </div>

    )
}

export default Homepage;
