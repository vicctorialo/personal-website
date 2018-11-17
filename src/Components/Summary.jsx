import React, { Component } from "react";
import "./Summary.css";

class Summary extends Component {
  render() {
    return (
      <div className="summary">
        <h1 id="why-me"> Why Me?</h1>
        <div className="flex-container-summ">
          <div className="summary-point">
            <div className="summary-icon">
              <i className="fas fa-book-reader fa-4x" />
            </div>
            <p>Avid self learner with a passion to succeed</p>
          </div>
          <div className="summary-point">
            <div className="summary-icon">
              <i className="fas fa-laptop-code fa-4x" />
            </div>
            <p>Passion and eagerness to learn new technical skills</p>
          </div>
          <div className="summary-point">
            <div className="summary-icon">
              <i class="fas fa-comments fa-4x" />
            </div>
            <p>Excellent leadership, communication, and teamwork skills</p>
          </div>
          <div className="summary-point">
            <div className="summary-icon">
              <i className="fas fa-briefcase fa-4x" />
            </div>
            <p>2+ years of work experience</p>
          </div>
        </div>
        <div className="flex-container-summ">
          <div className="summary-point">
            <div className="summary-icon">
              <i className="fas fa-users fa-4x" />
            </div>
            <p>7+ years of community involvement</p>
          </div>
          <div className="summary-point">
            <div className="summary-icon">
              <i class="fas fa-glasses fa-4x" />
            </div>
            <p>Strong attention to detail</p>
          </div>
          <div className="summary-point">
            <div className="summary-icon">
              <i class="fas fa-star fa-4x" />
            </div>
            <p>Customer service mindset</p>
          </div>
          <div className="summary-point">
            <div className="summary-icon">
              <i className="fas fa-lightbulb fa-4x" />
            </div>
            <p>High aptitude for creative, outside-the-box thinking</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
