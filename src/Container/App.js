import React, { useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage.js";
import vid1 from "./sharva.mp4";
import Eventspage from '../Pages/Eventspage.js';
import EventDisplay from "../Components/Events/EventDisplay.js";
import Contactpage from '../Pages/Contactpage';
import Navbar from "../Components/Navbar/Navbar";
import FooterBottom from "../Components/Footer/FooterBottom";

import Joinus from "../Components/JoinUs/JoinUs";
import Donatepage from "../Pages/Donatepage";
import Awarenesspage from "../Pages/Awarenesspage";
import EventsSummary from '../Components/EventsSummary/EventsSummary';
function App() {
  const [initiative, setInitiative] = useState("hungerfreeindia");
  const [loading,setLoading]=useState(true);
  const [caro,setCaro]=useState([]);

  const setCarousel = (caro) => {
     setCaro(caro);
   }

  useEffect(()=>{
    console.log(loading);
    setTimeout(()=>{
      setLoading(false);
    },5)
    console.log(loading);
  }


    )

  return (
    <div>{

      loading ?
      <div style={{width:"100vw",height:"100vh",background:"#a0a1a2"  }}>
        <video width="100%" height="100%" autoplay="true" muted>
          <source src={vid1} type="video/mp4"/>
        </video>
      </div>
      :
      <div>
      <Router basename="/">
        <div>
          <Navbar setInitiative={setInitiative} />
          <Switch>
            <Route exact path="/events" component={() => <Eventspage setCarousel={setCarousel} initiative={initiative} setInitiative={setInitiative}/>} />
            <Route exact path="/joinus" component={Joinus} />
            <Route exact path="/contactus" component={Contactpage} />
            <Route exact path="/donatenow" component={Donatepage} />
            <Route exact path="/awareness" component={Awarenesspage} />
          <Route exact path="/events-summary" component={EventsSummary} setInitiative={setInitiative} />
            <Route exact path="/eventdisplay" component={()=><EventDisplay proj={caro} initiative={initiative} setInitiative={setInitiative}/>}/>
            <Route  path="/" component={Homepage} />
          </Switch>


        </div>
      <FooterBottom />

      </Router>
      </div>
}
    </div>

  );
}

export default App;
