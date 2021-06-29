import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage.js";
import Eventspage from '../Pages/Eventspage.js';
import Contactpage from '../Pages/Contactpage';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Join1 from "../Components/JoinUs/Join1";
import hungerfreeindia from '../Database/hungerfreeindia';
import Donatepage from "../Pages/Donatepage";
import Awarenesspage from "../Pages/Awarenesspage";
function App() {
  const [initiative, setInitiative] = useState(hungerfreeindia);

  return (
    <div>
      <Router>
        <div>
          <Navbar setInitiative={setInitiative} />
          <Switch>
            <Route exact path="/" component={Homepage} />
          <Route exact path="/events" component={() => <Eventspage initiative={initiative} />} />
        <Route exact path="/joinus" component={Join1} />
            <Route exact path="/contactus" component={Contactpage} />
            <Route exact path="/donatenow" component={Donatepage} />
            <Route exact path="/awareness" component={Awarenesspage} />

          </Switch>
          <Footer />


        </div>
      </Router>

    </div>

  );
}

export default App;
