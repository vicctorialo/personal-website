import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="par-intro">
          <h1 id="about-header">Hello! Thank you for visiting my page.</h1>
          <p class="myIntro">
            {" "}
            I am a co-op student at the University of Waterloo working towards a
            Bachelor of Mathematics, majoring in Information Technology
            Management. My interests lie in the intersection of business and
            technology, specifically in{" "}
            <strong>product/program management</strong>, and
            <strong> full-stack web development</strong>.
            <p class="myIntro">
              Please continue scrolling to learn more about my work experience,
              involvements, and my interests!{" "}
            </p>
          </p>
        </div>
      </div>
    );
  }
}
export default About;
