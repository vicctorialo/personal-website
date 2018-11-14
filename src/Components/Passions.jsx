import React, { Component } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./Passions.css";

const content = [
  {
    title: "Coding",
    description:
      "Many of the technical skills I've acquired are self-taught. I'm constantly looking for ways to build my portfolio and strengthen my technical skills through making my own projects.",
    more_description:
      "I work with HTML/CSS, Javascript (React.js, Node.js, jQuery), Bootstrap, Python, SQL, and Git",
    image: "https://i.imgur.com/DvmN8Hx.jpg"
  },
  {
    title: "Sports",
    description:
      " I swam competitively for 5 years and worked as a swim instructor and lifeguard for 2 years. I also played competitive soccer for 8 years. Currently, I enjoy long scenic walks with my dog!",
    more_description:
      "My favorite sports are soccer, hiking, beach volleybal, and any water-based sports!",
    image: "https://i.imgur.com/DCdBXcq.jpg"
  },
  {
    title: "Travelling",
    description:
      " I'd like to consider myself an adventurous person. I love to try different foods and experience different cultures and ways of life. Some places on my bucket list are Japan and Switzerland.",
    more_description:
      "Some places I've been to include Paris, London, Turks and Caicos Islands, Saint Lucia, New York, and Hong Kong!",
    image: "https://i.imgur.com/DvmN8Hx.jpg"
  }
];

class Passions extends Component {
  render() {
    return (
      <div className="passions">
        <p id="passions-title"> What I Enjoy Doing</p>
        <Slider className="slider-wrapper" autoplay={4000}>
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${item.image}') no-repeat center center`
              }}
            >
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>{item.more_description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Passions;
