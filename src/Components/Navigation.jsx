import React, { Component } from "react";
import "./Navigation.css";
import { HashLink as Link } from "react-router-hash-link";

class Navigation extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/about#about">About</Link>
          </li>
          <li>
            <Link to="/home#home">Home</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
