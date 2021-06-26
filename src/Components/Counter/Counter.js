import React, {useState, useEffect} from 'react';
import './Counter.css';
import {GiMeal} from 'react-icons/gi';
import {FaHandsHelping} from 'react-icons/fa';
import {GiAngelWings} from 'react-icons/gi';
import {FaRegIdCard} from 'react-icons/fa';
import CountUp from 'react-countup';

function Counter() {
  const [count, setCount] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/").then(response => response.json()).then(res => {
      if (res[0].name) {
        setCount(res);
        console.log(res[0].name);
      }
    }).catch(error => {
      console.log(error);
    })

  },[])

  return (<div className="counter-container bg-white">
      {
        count.map((item, index) => {
          if(index===0 || (index%2)===0){
            return (<div className="floatCard grow pointer flex-column justify-center bg-white shadow-2 mb2 br3 tc mh4 pv4 ph4">
              <GiMeal color="#FF9800" size="3em"/>
              <div className="pv2">
                <span className="txt num1">
                  <CountUp end={item.count} duration={10}></CountUp>
                </span>
                <div className="pv2"><span className="txt">{item.name}</span></div>
              </div>
            </div>)
          }
          else if(index===1 ||(index%2)!==0){
            return (<div className="floatCard grow pointer flex-column justify-center bg-white shadow-2 mb2 br3 tc mh4 pv4 ph4">
              <GiMeal color="#8BCA4E" size="3em"/>
              <div className="pv2">
                <span className="txt num1" style={{color:"#8BCA4E"}}>
                  <CountUp end={item.count} duration={10}></CountUp>
                </span>
                <div className="pv2"><span className="txt">{item.name}</span></div>
              </div>
            </div>)
          }

      })
    }
  </div>)
}

export default Counter;
