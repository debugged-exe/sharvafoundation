import React from 'react';
import Carousel from 'react-elastic-carousel';
import AltCard from './AltCard';


const breakPoints = [
    { width : 1, itemsToShow : 1, itemsToScroll:1},
    { width : 550, itemsToShow : 2, itemsToScroll:1},
    { width : 760, itemsToShow : 3, itemsToScroll:1},
    { width : 1200, itemsToShow : 3, itemsToScroll:1},
]

function Listcard(){

    return(
        <div>
            <Carousel breakPoints={breakPoints}>
            <AltCard />
            <AltCard />
            <AltCard />
            <AltCard />
            
            </Carousel>
        </div>
    )
}

export default Listcard;