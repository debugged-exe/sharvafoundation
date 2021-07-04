import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage.js";
import Eventspage from '../Pages/Eventspage.js';
import Contactpage from '../Pages/Contactpage';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Joinus from "../Components/JoinUs/JoinUs";
import Donatepage from "../Pages/Donatepage";
import Awarenesspage from "../Pages/Awarenesspage";
function App() {
  const [initiative, setInitiative] = useState("hungerfreeindia");

  return (
    <div>
      <Router basename="/">
        <div>
          <Navbar setInitiative={setInitiative} />
          <Switch>
            <Route exact path="/events" component={() => <Eventspage initiative={initiative} />} />
            <Route exact path="/joinus" component={Joinus} />
            <Route exact path="/contactus" component={Contactpage} />
            <Route exact path="/donatenow" component={Donatepage} />
            <Route exact path="/awareness" component={Awarenesspage} />
            <Route  path="/" component={Homepage} />
          </Switch>


        </div>
        <Footer  setInitiative={setInitiative} />

      </Router>

    </div>

  );
}

export default App;
