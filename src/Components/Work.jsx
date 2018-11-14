import React, { Component } from "react";
import "./Work.css";

class Work extends Component {
  render() {
    return (
      <div className="work">
        <h1 className="work-header">My Work Experience</h1>
        <p id="work-description">
          {" "}
          Hover to learn more about some of the things I did on the job!
        </p>
        <div className="flex-container">
          <div className="polar">
            <h1 className="work-loc">Polar</h1>
            <div className="work-title">Software Developer</div>
          </div>
          <div className="bmo">
            <h1 className="work-loc">BMO Financial Group</h1>
            <h3 className="work-title">
              Reporting Analyst/Portfolio Project Management Analyst
            </h3>
          </div>
          <div className="aviva">
            <h1 className="work-loc">Aviva</h1>
            <h3 className="work-title">Business Analyst</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
