import React, {useState,useEffect} from 'react';
import './RecentsEvents.css';
import {HashLink as Link} from 'react-router-hash-link';


function RecentEvents({setInitiative}){

  const [recentA, setRecentA] = useState([]);
  const [recentB, setRecentB]= useState([]);
  const [recentC, setRecentC]= useState([]);


  useEffect(() => {
    fetch("https://thawing-shelf-77571.herokuapp.com/events")
    .then(response => response.json())
    .then(res => {
      if (res[0].tagline) {
        setRecentA(res);
      }
    }).catch(error => {
      console.log(error);
    })


    fetch("https://thawing-shelf-77571.herokuapp.com/strive")
    .then(response => response.json())
    .then(res => {
      if (res[0].tagline) {
        setRecentB(res);
      }
    }).catch(error => {
      console.log(error);
    })



    fetch("https://thawing-shelf-77571.herokuapp.com/wings")
    .then(response => response.json())
    .then(res => {
      if (res[0].tagline) {
        setRecentC(res);
      }
    }).catch(error => {
      console.log(error);
    })



  }, [])


  return(

    <div className="flex flex-column justify-center items-center mb3">
		 <h1>Recent Events</h1>
       <div className="RecentEvents-container">

    {
          recentA.map((item,index) =>{
            // console.log("item",item.events);
            return(
              item.events.map((i,index)=>{
                if(index===(item.events.length-1))
                  {
                    return(
                    <Link to="/events">
                    <div key={index} className=" item  mt2 mb2 mr2 ml2 shadow-2 grow pointer"  style={{background:`rgba(0, 0, 0, .4) url(${i.image[0]}) no-repeat center center`,backgroundSize:'cover', backgroundBlendMode:"darken"}}>
                      <div className="middleNameLocation" onClick={() => {setInitiative(item.initiative);}}>
                      <p className="ma3">{i.date}</p>
                      <p className="ma3 ">{i.place}</p>
                    </div>
                    </div>
                    </Link>
                    )
                  }
              })


        )
      }
      )
    }
    <div>
      {
        recentB.map((item,index) =>{
          // console.log("item",item.events);
          return(
            item.events.map((i,index)=>{
              if(index===(item.events.length-1))
                {
                  return(
                    <Link to="/events">
                  <div key={index} className="item  mt2 mb2 mr2 ml2 shadow-2 grow pointer"  style={{background:`rgba(0, 0, 0, .4) url(${i.image[0]}) no-repeat center center`,backgroundSize:'cover', backgroundBlendMode:"darken"}}>
                    <div className="middleNameLocation" onClick={() => {setInitiative(item.initiative);}}>
                    <p className="ma3">{i.date}</p>
                    <p className="ma3 ">{i.place}</p>
                  </div>
                  </div>
                  </Link>

                  )
                }
            })


      )
    }
    )
      }
    </div>
    <div>
        {
                  recentC.map((item,index) =>{
                    // console.log("item",item.events);
                    // console.log(item.initiative);
                    return(
                      item.events.map((i,index)=>{
                        if(index===(item.events.length-1))
                          {
                            return(

                              <Link to="/events">
                            <div key={index} className="item  mt2 mb2 mr2 ml2 shadow-2 grow pointer"  style={{background:`rgba(0, 0, 0, .4) url(${i.image[0]}) no-repeat center center`,backgroundSize:'cover', backgroundBlendMode:"darken"}}>
                              <div className="middleNameLocation" onClick={() => {setInitiative(item.initiative);}}>
                              <p className="ma3">{i.date}</p>
                              <p className="ma3 ">{i.place}</p>
                            </div>
                            </div>
                            </Link>
                            )
                          }
                      })


                )
              }
              )
        }
      </div>
  </div>
  </div>
  )
}
export default RecentEvents;
