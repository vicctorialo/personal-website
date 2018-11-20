import React, { Component } from "react";
import "./Ecs.css";

class Ecs extends Component {
  render() {
    return (
      <div id="ecs">
        <h1>My Current Involvements</h1>
        <div className="rtc">
          <div className="rtc-image" />
          <h1> Rewriting the Code</h1>
          <p>
            I was selected for a competitive international fellowship for
            undergraduate women who are passionate about technology. As a
            Fellow, I have the opportunity to participate in tech workshops led
            by fellow members, explore different areas of tech such as Product
            management, Fintech, Virtual Reality, and Web/Mobile
            Developmentconnect, and connect with like-minded individuals all
            over North America.
          </p>
          <button>
            <a href="https://rewritingthecode.org/">Learn More </a>
          </button>
        </div>
      </div>
    );
  }
}
export default Ecs;
