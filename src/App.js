import React, { Component } from "react";
import "./App.css";
//import { Router, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
//import Contact from "./Components/Contact";
import Passions from "./Components/Passions.jsx";
import Work from "./Components/Work.jsx";
import Summary from "./Components/Summary.jsx";

//import { Grid, Row, Col } from "react-flexbox-grid";

// import Navigation from "./Components/Navigation";
//import { HashLink as Link } from "react-router-hash-link";

class App extends Component {
  render() {
    return (
      <div id="scroll-sections">
        <Home />
        <About />
        <Summary />
        <Work />
        <Passions />
      </div>
      //<Router>

      // <div className="routes">
      //   <Route path="/contact" component={Contact} />
      //   <Route path="/resume" component={Resume} />
      //   <Route path="/about" component={About} />
      //   <Route path="/" component={Home} />
      // </div>
      // </Router>
    );
  }
}
export default App;
