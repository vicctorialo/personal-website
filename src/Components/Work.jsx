import React, { Component } from "react";
import "./Work.css";

class Work extends Component {
  render() {
    return (
      <div className="work work-mobile">
        <h1 className="work-header">Work Experience</h1>
        <p id="work-description">
          {" "}
          Hover to learn more about some of the things I did on the job!
        </p>
        <div className="flex-container-work">
          <div className="polar work-block">
            <h1 className="work-loc">Polar</h1>
            <h3 className="work-title">Software Developer</h3>
          </div>
          <div className="bmo work-block">
            <h1 className="work-loc">BMO</h1>
            <h3 className="work-title">Reporting Data Analyst</h3>
          </div>
          <div className="aviva work-block">
            <h1 className="work-loc">Aviva</h1>
            <h3 className="work-title">Business Analyst</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
