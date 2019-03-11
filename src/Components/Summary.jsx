import React, { Component } from "react";
import "./Summary.css";

class Summary extends Component {
  render() {
    return (
      <div className="summary">
        <div className="summary-point">
          <div className="summary-icon">
            <i className={this.props.item.icon} />
          </div>
          <p>{this.props.item.point}</p>
        </div>
      </div>
    );
  }
}

export default Summary;
