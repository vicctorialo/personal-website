import React, { Component } from "react";
import "./App.css";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Passions from "./Components/Passions.jsx";
import Work from "./Components/Work.jsx";
import Summary from "./Components/Summary.jsx";
import Ecs from "./Components/Ecs.jsx";
import Footer from "./Components/Footer.jsx";

class App extends Component {
  render() {
    return (
      <div id="scroll-sections">
        <Home />
        <About />
        <Summary />
        <Work />
        <Ecs />
        <Passions />
        <Footer />
      </div>
    );
  }
}
export default App;
