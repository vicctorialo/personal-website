import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <h1>Connect with me:</h1>
        <div className="social">
          <a href="www.linkedin.com/in/victoria-lo98">
            <i className="fab fa-linkedin fa-2x" />{" "}
          </a>
          <a href="www.github.com/vicctorialo">
            <i className="fab fa-github fa-2x" />{" "}
          </a>
          <a href="mailto:victorialo398@hotmail.com">
            <i className="fas fa-envelope fa-2x" />{" "}
          </a>
        </div>
        <p id="copyright">
          Designed and Made by Victoria Lo | © Copyright 2018{" "}
        </p>
      </div>
    );
  }
}

export default Footer;
