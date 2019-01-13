import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Col,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h1> Contact Me! </h1>
        <Form horizontal id="contact-form">
          <FormGroup controlId="fname">
            <Col componentClass={ControlLabel} sm={2}>
              First Name
            </Col>
            <Col sm={2}>
              <FormControl type="text" />
            </Col>
          </FormGroup>

          <FormGroup controlId="lname">
            <Col componentClass={ControlLabel} sm={2}>
              Last Name
            </Col>
            <Col sm={2}>
              <FormControl type="text" />
            </Col>
          </FormGroup>

          <FormGroup controlId="message">
            <Col componentClass={ControlLabel} sm={2}>
              Your Message
            </Col>
            <Col sm={5}>
              <FormControl componentClass="textarea" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
export default Contact;
