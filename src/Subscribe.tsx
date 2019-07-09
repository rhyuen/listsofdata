import React, { Component } from "react";
import { Cardless } from "./Cardless";
import { CardlessHeader } from "./CardlessHeader";
import { StyledInput } from "./StyledTextInput";
import { StyledSubmit } from "./StyledSubmit";
import { isEmail } from "validator";
import axios from "axios";

interface Props {}
interface State {
  email: string;
  validEmail: boolean;
}
export class Subscribe extends React.Component<Props, State> {
  state = {
    email: "",
    validEmail: true
  };

  handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email } = this.state;
    if (this.isEmailValid()) {
      const emailURL =
        "https://nodetwofaas.netlify.com/.netlify/functions/createEmail";
      axios
        .post(
          emailURL,
          { email: email },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json"
            },
            withCredentials: true
          }
        )
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
        <CardlessHeader>Subscribe</CardlessHeader>
        <section>
          <form onSubmit={this.handleSubmit}>
            <StyledInput
              type="text"
              placeholder="email@myemail.ca"
              name="email"
              onChange={this.handleTextChange}
              value={email}
            />
            <StyledSubmit type="submit" disabled={!this.state.validEmail} />
          </form>
        </section>
      </Cardless>
    );
  }
}
