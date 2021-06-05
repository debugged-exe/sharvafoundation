import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Homepage from "../Pages/Homepage.js";
import Eventspage from '../Pages/Eventspage.js';
import Contactpage from '../Pages/Contactpage';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


function App() {
  return (
    <div>
      <Router>
        <div>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/events" component={Eventspage} />
            <Route exact path="/contactus" component={Contactpage} />
          </Switch>
          <Footer />
          </div>
      </Router>
    </div>
  );
}

export default App;
