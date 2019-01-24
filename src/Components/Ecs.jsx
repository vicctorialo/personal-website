import React, { Component } from "react";
import "./Ecs.css";

class Ecs extends Component {
  render() {
    return (
      <div id="ecs">
        <h1 className="ecs-title">My Current Involvements</h1>
        <div className="rtc ecs-container">
          <div className="ecs-header">
            <div className="rtc-image" />
          </div>
          <div className="ecs-context">
            <h1> Rewriting the Code</h1>
            <p>
              I was selected for a competitive international fellowship for
              undergraduate women who are passionate about technology. As a
              Fellow, I have the opportunity to participate in tech workshops
              led by fellow members, explore different areas of tech such as
              Product management, Fintech, Virtual Reality, and Web/Mobile
              Development, and connect with like-minded individuals all over
              North America.
            </p>
            <button className="ecs-button">
              <a href="https://rewritingthecode.org/">Learn More </a>
            </button>
          </div>
        </div>
        <div className="ms ecs-container">
          <div className="ecs-header">
            <div className="ms-image" />
          </div>
          <div className="ecs-context context-math">
            <h1> Mathematics Society - MathBall Executive Team</h1>
            <p>
              MathBall is a formal event organized by students of the math
              faculty, and is open to all students at the University of
              Waterloo. I am one of 3 members on the Internal Team, and my
              responsibilities include dealing with financials and logistics of
              the event, and co-ordinating with all other teams to ensure it is
              successful and enjoyable.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Ecs;
