import React from 'react';
import './RecentsEvents.css';
import 'tachyons';
function RecentEvents(){
  return(
    <div className="flex flex-column justify-center items-center">
		 <h1>Recent Events</h1>
			<div className="RecentEvents-container">
        <div className="item shadow-2">
           <h3 className="ma3">Lorem1</h3>
           <p className="ma3">26/02/2012</p>
         </div>
         <div className="item1 shadow-2">
            <h3 className="ma3">Lorem1</h3>
            <p className="ma3">26/02/2012</p>
         </div>
         <div className="item2 shadow-2">
             <h3 className="ma3">Lorem1</h3>
             <p className="ma3">26/02/2012</p>
         </div>
      </div>
  </div>
  )
}
export default RecentEvents;
