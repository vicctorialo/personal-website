import React, { Component } from "react";
import "./Home.css";
import Typed from "react-typed";

class Home extends Component {
  render() {
    return (
      <div className="home">
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
            <button type="button" className="btn btn-outline-secondary btn-lg">
              <a href="mailto:victorialo398@hotmail.com">CONTACT ME</a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
