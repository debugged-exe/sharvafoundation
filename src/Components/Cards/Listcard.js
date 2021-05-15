import React,{useState} from 'react';
import './Listcard.css';
import Carousel from 'react-elastic-carousel';
import Altcard from './Altcard.js';


const breakPoints = [
    { width : 1, itemsToShow : 1, itemsToScroll:1},
    { width : 550, itemsToShow : 2, itemsToScroll:1},
    { width : 760, itemsToShow : 3, itemsToScroll:1},
    { width : 1200, itemsToShow : 3, itemsToScroll:1},
    {showArrows:true},
]

function Listcard(){
    const [hover1, toggleHover1] = useState(false);
    const [hover2, toggleHover2] = useState(false);

    const toggleHandler1 = () => {
        toggleHover1(!hover1)
    }

    const toggleHandler2 = () => {
        toggleHover2(!hover2)
    }
    return(
        <div>
            <div className="ourGoals mt4 pa5">
            <div className="mw5 mw7-ns center topText pa3 ">
                <h2 className="center" style={{paddingBottom:'1em'}}>OUR GOALS</h2>
                <p className="lh-copy ">
                The optimus goal of Sharva Foundation is to be completely equipped and primed with relief funds so as to be ready with an optimum amount for any event or uncalled situation.
                </p>
            </div>
            </div>
            <Carousel breakPoints={breakPoints}>
            <Altcard />
            <Altcard />
            <Altcard />
            <Altcard />
            </Carousel>
            <div data-aos='fade-up' className='w-100 ourButtons mt4 mb4 flex justify-center'>
            	<div style={hover1?{color: 'white', fontWeight: 'bold', border:'2px solid #e88f0a'}:{color: '#e88f0a', fontWeight: 'bold', border:'1.5px solid #e88f0a'}} onMouseEnter = {() => toggleHandler1()} onMouseLeave = {() => toggleHandler1()} className = "mh2 br4 mt2 mb4 ba btn ph4 pv3 grow">MAKE DONATION</div>
            	<div style={hover2?{color: 'white', fontWeight: 'bold', border:'2px solid #e88f0a'}:{color: '#e88f0a', fontWeight: 'bold', border:'1.5px solid #e88f0a'}} onMouseEnter = {() => toggleHandler2()} onMouseLeave = {() => toggleHandler2()} className = "mh2 br4 mt2 mb4 ba btn ph4 pv3 grow">BECOME A VOLUNTEER</div>
            </div>
        </div>
    )
}

export default Listcard;