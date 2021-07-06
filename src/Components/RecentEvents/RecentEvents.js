import React, {useState,useEffect} from 'react';
import './RecentsEvents.css';
import 'tachyons';
function RecentEvents(){

  const [recent, setRecent] = useState([]);
  useEffect(() => {
    fetch("https://thawing-shelf-77571.herokuapp.com/recentevents")
    .then(response => response.json())
    .then(res => {
      if (res[0].heading) {
        setRecent(res);
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

      recent.map((item,index) => {

        return(
            <div className="item  mt2 mb2 mr2 ml2 shadow-2 grow pointer" style={{background:`rgba(0, 0, 0, .6) url(${item.recentimg}) no-repeat center center`,backgroundSize:'cover', backgroundBlendMode:"darken"}}>
               <h3 className="ma3">{item.heading}</h3>
               <p className="ma3">{item.date}</p>
             </div>



    )
  })
}
  </div>
  </div>
  )
}
export default RecentEvents;
