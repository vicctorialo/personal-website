import React, { Component } from "react";
import "./Summary.css";

class Summary extends Component {
  render() {
    return (
      <div className="summary">
        <h1 id="why-me"> Why Me?</h1>
        <div className="flex-container-summ">
          <div className="summary-point">
            <p>Avid self learner with a passion to succeed</p>
          </div>
          <div className="summary-point">
            <p>Passion and eagerness to learn new technical skills</p>
          </div>
          <div className="summary-point">
            <p>Excellent leadership, communication, and teamwork skills</p>
          </div>
          <div className="summary-point">
            <p>2+ years of work experience</p>
          </div>
        </div>
        <div className="flex-container-summ">
          <div className="summary-point">
            <p>7+ years of community involvement</p>
          </div>
          <div className="summary-point">
            <p>Strong attention to detail</p>
          </div>
          <div className="summary-point">
            <p>Customer service mindset</p>
          </div>
          <div className="summary-point">
            <p>High aptitidue for creative, outside-the-box thinking</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
