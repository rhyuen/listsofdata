import React, { Component } from "react";
import Cardless from "./Cardless.jsx";
import Header from "./CardlessHeader.jsx";
import TextInput from "./StyledTextInput.jsx";
import Submit from "./StyledSubmit.jsx";
import { isEmail } from "validator";
import axios from "axios";

class Subscribe extends Component {
  state = {
    email: "",
    validEmail: true
  };

  handleTextChange = e => {
    const { value } = e.target;
    if (isEmail(value)) {
      this.setState({
        email: value,
        validEmail: true
      });
    } else {
      this.setState({
        email: value,
        validEmail: false
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email } = this.state;
    if (this.isEmailValid()) {
      const emailURL =
        "https://nodetwofaas.netlify.com/.netlify/functions/createEmail";
      axios
        .post(emailURL, { email: email })
        .then(res => {
          console.log("Email Submission Success");
          console.log(res.data);
        })
        .catch(e => {
          console.log("Errors abound.");
          console.log(e);
        })
        .finally(() => {
          this.setState({
            email: ""
          });
        });
    } else {
      //TODO: Add caption that says invalid emaiul.
      console.log(
        "Show not a valid email box that says 'the box is not a valid email'."
      );
    }
  };

  isEmailValid = () => {
    const { email } = this.state;
    console.log(email);
    console.log(`${isEmail(email)} is the value.`);
    return isEmail(email);
  };
  render() {
    const { email } = this.state;
    return (
      <Cardless>
        <Header>Subscribe</Header>
        <section>
          <form onSubmit={this.handleSubmit}>
            <TextInput
              type="text"
              placeholder="email@myemail.ca"
              name="email"
              onChange={this.handleTextChange}
              value={email}
            />
            <Submit type="submit" disabled={!this.state.validEmail} />
          </form>
        </section>
      </Cardless>
    );
  }
}

export default Subscribe;
