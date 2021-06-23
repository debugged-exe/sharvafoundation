import React, { useState } from 'react';
import './OurGoals.css';
import Carousel from 'react-elastic-carousel';
import Card from './Card.js';


const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 760, itemsToShow: 3, itemsToScroll: 1 },
    { width: 1200, itemsToShow: 3, itemsToScroll: 1 },
    { showArrows: true },
]

function OurGoals() {
    const [hover1, toggleHover1] = useState(false);
    const [hover2, toggleHover2] = useState(false);
    const [show, setShow] = useState(false);

    const toggleHandler1 = () => {
        toggleHover1(!hover1)
    }

    const toggleHandler2 = () => {
        toggleHover2(!hover2)
    }
    return (
        <div>
            <div className="ourGoals mt4 pa3">
                <div className="mw5 mw7-ns center topText pa3 ">
                    <h2 className="center" style={{ paddingBottom: '10px', textDecoration: 'underline', textDecorationColor: '#ff8c00', textAlign: 'center' }}>OUR GOALS</h2>
                    <p className="lh-copy " style={{ textAlign: "center" }}>
                        The optimus goal of Sharva Foundation is to be completely equipped and primed with relief funds so as to be ready with an optimum amount for any event or uncalled situation.
                    </p>
                </div>
            </div>
            <Carousel breakPoints={breakPoints}>
                <Card />
                <Card />
                <Card />
                <Card />
            </Carousel>
            <div className="join-box">
                <p className="join-head fw6" style={{ fontSize: '35px' }}>Join Us Now!!</p>
                <div className="button-div">
                    <button onClick={() => setShow(true)} className=" fw6 bg-white black pa3 ph4 f4 grow pointer" style={{ borderRadius: '8px', border: 'none' }}>
                        Join Us
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OurGoals;
