import * as React from "react";
import styled from "styled-components";
import { Cardless } from "./Cardless";
import { CardlessHeader } from "./CardlessHeader";
import { StyledInput } from "./StyledTextInput";
import { StyledSubmit } from "./StyledSubmit";
import validator from "validator";
import axios from "axios";



export const Subscribe: React.FunctionComponent<{}> = () => {
  const [email, setEmail] = React.useState<string>("");
  const [isValid, updateValid] = React.useState<boolean>(false);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value === "") {
      updateValid(true);
    }

    if (validator.isEmail(value)) {
      updateValid(true);
    } else {
      updateValid(false);
    }
    setEmail(value);

  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const options = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      withCredentials: true
    };


    if (isValid) {
      const emailURL =
        "https://nodetwofaas.netlify.com/.netlify/functions/createEmail";
      axios
        .post(
          emailURL,
          { email: email },
          options
        )
        .then(res => {
          console.log("Email Submission Success");
          console.log(res.data);
        })
        .catch(e => {
          console.log("Email errors abound.");
          console.log(e);
        })

    } else {
      //TODO: Add caption that says invalid emaiul.
      console.log(
        "Show not a valid email box that says 'the box is not a valid email'."
      );
    }
  };


  return (
    <Cardless>
      <CardlessHeader>Subscribe</CardlessHeader>
      <section>
        <form onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="email@myemail.ca"
            name="email"
            onChange={handleTextChange}
            value={email}
          />
          <StyledSubmit type="submit" data-testid="email_submit" disabled={!isValid} />
        </form>
        {isValid || email === "" ? null : <WarningText>Invalid Email</WarningText>}
      </section>
    </Cardless>
  );
}

const WarningText = styled.div`
  margin-top: 10px;
  border: 2px solid black;
  color: black;
  font-weight: 600;
  border-radius: 20px;
  padding: 5px 15px;
  width: fit-content;
`;
