import React from 'react';
import BackgroundCarousel from "../Components/BackgroundCarousel/BackgroundCarousel";
import Counter from "../Components/Counter/Counter";
 import Aboutus from "../Components/Aboutus/Aboutus";
import OurGoals from "../Components/OurGoals/OurGoals";
import RecentEvents from "../Components/RecentEvents/RecentEvents";
import Footer from "../Components/Footer/Footer";


function Homepage({setInitiative}){
    return(
        <div>

            <BackgroundCarousel />
            <Counter />
            <Aboutus id="#aboutus"/>
            <OurGoals />
          <RecentEvents />
          <Footer  setInitiative={setInitiative} />

        </div>

    )
}

export default Homepage;
