import React, { Component } from "react";
import "./Passions.css";

class Passions extends Component {
  render() {
    return (
      <div className="passions">
        <p className="passions-title"> What I Enjoy Doing</p>
        <div className="flex-container-passions">
          <div className="passions-block">
            <h1 className="passions-category">Coding</h1>
            <div className="passions-desc">
              <p>
                Many of the technical skills I've acquired are self-taught. I'm
                constantly looking for ways to build my portfolio and strengthen
                my technical skills through making my own projects.
              </p>
            </div>
          </div>
          <div className="passions-block">
            <h1 className="passions-category">Sports</h1>
            <div className="passions-desc">
              <p>
                I swam competitively for 5 years and worked as a swim instructor
                and lifeguard for 2 years. I also played competitive soccer for
                8 years. Currently, I enjoy long scenic walks with my dog!
              </p>
            </div>
          </div>
          <div className="passions-block">
            <h1 className="passions-category">Travel</h1>
            <div className="passions-desc">
              <p>
                I'd like to consider myself an adventurous person. I love to try
                different foods and experience different cultures and ways of
                life. Some places on my bucket list are Japan and Switzerland.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Passions;
