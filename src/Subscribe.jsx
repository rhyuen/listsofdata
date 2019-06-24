import React, { Component } from "react";
import Cardless from "./Cardless.jsx";
import Header from "./CardlessHeader.jsx";
import TextInput from "./StyledTextInput.jsx";
import Submit from "./StyledSubmit.jsx";
import axios from "axios";

class Subscribe extends Component {
  state = {
    email: ""
  };

  handleTextChange = e => {
    const { value } = e.target;
    this.setState({
      email: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    //TODO: POST
    console.log(`${this.state.email} is the value in the form`);
    this.setState({
      email: ""
    });
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
              name="email"
              onChange={this.handleTextChange}
              value={email}
            />
            <Submit />
          </form>
        </section>
      </Cardless>
    );
  }
}

export default Subscribe;
