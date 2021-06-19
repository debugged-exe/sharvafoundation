import React,{useState} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Homepage from "../Pages/Homepage.js";
import Eventspage from '../Pages/Eventspage.js';
import Contactpage from '../Pages/Contactpage';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import JoinUs from "../Components/JoinUs/JoinUs";
import hungerfreeindia from '../Database/hungerfreeindia';
import Donatepage  from "../Pages/Donatepage";

function App() {
  const [Initiative,setInitiative]=useState(hungerfreeindia);

  return (
    <div>
      <Router>
        <div>
        <Navbar  setInitiative={setInitiative} />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/events"  component={()=><Eventspage Initiative={Initiative}/>}  />
            <Route exact path="/joinus" component={JoinUs} />
            <Route exact path="/contactus" component={Contactpage} />
            <Route exact path="/donatenow" component={Donatepage} />
          </Switch>
          <Footer />


          </div>
      </Router>
      
    </div>

  );
}

export default App;
