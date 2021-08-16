import React from 'react';
import BackgroundCarousel from "../Components/BackgroundCarousel/BackgroundCarousel";
import Counter from "../Components/Counter/Counter";
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

            <OurGoals />
        <RecentEvents setInitiative={setInitiative} />
            <Footer setInitiative={setInitiative} />
        </div>

    )
}

export default Homepage;
