import React, { Component } from "react";
import "./Contact.css";
import axios from "axios";

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      fname: "",
      lname: "",
      email: "",
      subject: "",
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleSubmit(e) {
    e.preventDefault();

    const { fname, lname, email, subject, message } = this.state;
    const form = await axios.post("/api/form", {
      fname,
      lname,
      email: email,
      subject,
      message
    });
  }

  render() {
    return (
      <div className="contact">
        <h1> Contact Me! </h1>
        <div className="contact-form">
          <form>
            <label for="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Your first name"
              value={this.state.fname}
              onChange={this.handleChange}
              required
            />
            <label for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Your last name"
              value={this.state.lname}
              onChange={this.handleChange}
              required
            />
            <label for="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="someone@example.com"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label for="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              value={this.state.subject}
              onChange={this.handleChange}
              required
            />
            <label for="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Ask me anything!"
              value={this.state.message}
              onChange={this.handleChange}
              required
            />
            <input
              type="submit"
              name="submit"
              value="Submit"
              onClick={e => this.handleChange(e)}
            />
            <div>
              {this.state.mailSent && (
                <div className="success">
                  Thank you for your email! I will get back to you shortly.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Contact;
