import React, {useState,useEffect} from 'react';
import './RecentsEvents.css';
import 'tachyons';
function RecentEvents(){
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
    
    fetch("https://thawing-shelf-77571.herokuapp.com/covid19")
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
            console.log("item",item.events);
            return(
              item.events.map((i,index)=>{
                if(index===(item.events.length-1))
                  {                
                    return(
                    <div key={index} className="item  mt2 mb2 mr2 ml2 shadow-2 grow pointer" style={{background:`rgba(0, 0, 0, .6) url(${i.image[0]}) no-repeat center center`,backgroundSize:'cover', backgroundBlendMode:"darken"}}>
                      <p className="ma3">{i.date}</p>
                      <p className="ma3">{i.place}</p>
                    </div>

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
          console.log("item",item.events);
          return(
            item.events.map((i,index)=>{
              if(index===(item.events.length-1))
                {                
                  return(
                  <div key={index} className="item  mt2 mb2 mr2 ml2 shadow-2 grow pointer" style={{background:`rgba(0, 0, 0, .6) url(${i.image[0]}) no-repeat center center`,backgroundSize:'cover', backgroundBlendMode:"darken"}}>
                    <p className="ma3">{i.date}</p>
                    <p className="ma3">{i.place}</p>
                  </div>

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
                    console.log("item",item.events);
                    return(
                      item.events.map((i,index)=>{
                        if(index===(item.events.length-1))
                          {                
                            return(
                            <div key={index} className="item  mt2 mb2 mr2 ml2 shadow-2 grow pointer" style={{background:`rgba(0, 0, 0, .6) url(${i.image[0]}) no-repeat center center`,backgroundSize:'cover', backgroundBlendMode:"darken"}}>
                              <p className="ma3">{i.date}</p>
                              <p className="ma3">{i.place}</p>
                            </div>
          
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
