import React from 'react';
import './Counter.css';
import { GiMeal } from 'react-icons/gi';
import { FaHandsHelping } from 'react-icons/fa';
import { GiAngelWings } from 'react-icons/gi';
import { FaRegIdCard } from 'react-icons/fa';

function Counter() {
    return (
        <div className="counter-container bg-white">
            <div className="floatCard grow pointer flex-column justify-center bg-white shadow-2 br3 tc mh4 pv4 ph4">
                <GiMeal color="#FF9800" size="3em" />
                <div className="pv2"><span className="txt num1">100</span></div>
                <div className="pv2"><span className="txt">Food Kits</span></div>
            </div>
            <div className="floatCard grow pointer flex-column justify-center bg-white shadow-2 br3 tc mh4 pv4 ph4">
                <FaHandsHelping color="#8BCA4E" size="3em" />
                <div className="pv2"><span className="txt num2">200</span></div>
                <div className="pv2"><span className="txt">People Helped</span></div>
            </div>
            <div className="floatCard grow pointer flex-column justify-center bg-white shadow-2 br3 tc mh4 pv4 ph4">
                <GiAngelWings color="#FF9800" size="3em" />
                <div className="pv2"><span className="txt num1">300</span></div>
                <div className="pv2"><span className="txt">Sanitary</span></div>
            </div>
            <div className="floatCard grow pointer flex-column justify-center bg-white shadow-2 br3 tc mh4 pv4 ph4">
                <FaRegIdCard color="#FF9800" size="3em" />
                <div className="pv2"><span className="txt num2">400</span></div>
                <div className="pv2"><span className="txt">Volunteers</span></div>
            </div>
        </div>
    )
}

export default Counter;