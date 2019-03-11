import React, { Component } from "react";
import "./Work.css";

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
    this.toggleHover = this.toggleHover.bind(this);
  }
  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }
  render() {
    return (
      <div
        className="work"
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <div className="work-block">
          <div
            style={{ display: this.state.hover ? "none" : "block" }}
            className="content-hover-on"
          >
            <h1 className="work-loc">{this.props.item.company}</h1>
            <h3 className="work-title">{this.props.item.title}</h3>
          </div>
          <div
            style={{ display: !this.state.hover ? "none" : "block" }}
            className="work-desc"
          >
            <ul>
              <li>{this.props.item.descOne}</li>
              <li>{this.props.item.descTwo}</li>
              <li>{this.props.item.descThree}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
