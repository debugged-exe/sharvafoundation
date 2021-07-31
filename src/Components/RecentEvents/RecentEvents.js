import React, {useState,useEffect} from 'react';
import './RecentsEvents.css';
import 'tachyons';
function RecentEvents(){

 var rlength=0;
  const [recent1, setRecent1] = useState([]);
  const [recent2,setRecent2] = useState([]);
  const [recent3,setRecent3] = useState([]);
  useEffect(() => {
    fetch("https://thawing-shelf-77571.herokuapp.com/events")
    .then(response => response.json())
    .then(res => {
      if (res[0].tagline) {
         // rlength= res[0].events.length;
       console.log("hello" ,recent1);
        setRecent1(res);
        console.log("hello1" ,recent1);
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
      recent1.map((item,index) =>{
         
        return(
          item.events.map((i,index)=>{
            <p className="ma3">{item.date}</p>
          })



    )
  }
  )
}
  </div>
  </div>
  )
}
export default RecentEvents;
{/* <div className="item  mt2 mb2 mr2 ml2 shadow-2 grow pointer" style={{background:`rgba(0, 0, 0, .6) url(${item.recentimg}) no-repeat center center`,backgroundSize:'cover', backgroundBlendMode:"darken"}}>
   <h3 className="ma3">{item.heading}</h3>
   <p className="ma3">{item.date}</p>
 </div> */}
