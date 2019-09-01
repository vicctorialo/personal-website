import React, { Component } from "react";
import "./Ecs.css";

class Ecs extends Component {
  render() {
    return (
      <div className="ecs">
        <h1 className="ecs-title">My Current Involvements</h1>
        <div className="rtc ecs-container">
          <div className="ecs-header">
            <div id="rtc-image" />
          </div>
          <div className="ecs-context context-rtc">
            <h1> Rewriting the Code</h1>
            <p>
              I was selected for a competitive international fellowship for
              undergraduate women who are passionate about technology. As a
              Fellow, I have the opportunity to participate in tech workshops
              led by fellow members, explore different areas of tech such as
              Product Management, Fintech, Virtual Reality, and Web/Mobile
              Development, and connect with like-minded individuals all over
              North America.
            </p>
            <button className="ecs-button">
              <a
                href="https://rewritingthecode.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More{" "}
              </a>
            </button>
          </div>
        </div>
        <div className="ms ecs-container">
          <div className="ecs-header">
            <div id="ms-image" />
          </div>
          <div className="ecs-context context-math">
            <h1> Head Math Orientation Leader - 2019</h1>
            <p>
              As a Head Leader for the incoming first year students, some of my
              responsibilities include making sure that students have an
              enjoyable Orientation experience, ensuring the safety of students
              (using my First Aid certification), and co-ordinating with other
              leaders and facutly members at the university to carry out events
              and activities.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Ecs;
