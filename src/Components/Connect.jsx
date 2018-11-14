import React, { Component } from "react";
import "./Connect.css";

class Navigation extends Component {
  render() {
    return (
      <div id="connect">
        <li>
          <a href="https://www.linkedin.com/in/victoria-lo98">
            <i className="big linkedin icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/vicctorialo">
            <i className="big github square icon" />
          </a>
        </li>
      </div>
    );
  }
}

export default Navigation;
