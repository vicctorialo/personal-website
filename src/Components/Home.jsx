import React, { Component } from "react";
import "./Home.css";
import Typed from "react-typed";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <div className="overlay">
          <div className="intro">
            <h1>Victoria Lo</h1>
            <div id="types">
              <Typed
                strings={[
                  "I am a challenger",
                  "I am a self-starter",
                  "I am a quick learner"
                ]}
                typeSpeed={60}
                backSpeed={60}
                loop
              />
            </div>
            <div className="huge ui inverted animated button" role="button">
              <div className="visible content" id="my-button">
                Contact Me!
              </div>
              <div className="hidden content">
                <i className="smile outline icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
