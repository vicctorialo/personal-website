import React, { Component } from "react";
import "./App.css";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Passions from "./Components/Passions.jsx";
import Work from "./Components/Work.jsx";
import Summary from "./Components/Summary.jsx";
import Ecs from "./Components/Ecs.jsx";
import Footer from "./Components/Footer.jsx";
import WorkData from "./Components/WorkData.js";
import SummaryData from "./Components/SummaryData.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      WorkItems: WorkData,
      SummaryItems: SummaryData
    };
  }
  render() {
    const WIlist = this.state.WorkItems.map(item => (
      <Work key={item.id} item={item} />
    ));
    const SList = this.state.SummaryItems.map(item => (
      <Summary key={item.id} item={item} />
    ));
    return (
      <div id="scroll-sections">
        <Home />
        <About />
        <div className="summary-component">
          <h1 id="why-me"> Why Me?</h1>
          <div id="small-summary-components">{SList}</div>
        </div>
        <div className="work-component">
          <h1 className="work-header">Work Experience</h1>
          <p id="work-subheader">
            {" "}
            Hover to learn more about some of the things I did on the job!
          </p>
          {<div id="small-work-components">{WIlist}</div>}
        </div>
        <Ecs />
        <Passions />
        <Footer />
      </div>
    );
  }
}
export default App;
