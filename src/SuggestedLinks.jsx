import React, { Component } from "react";
import Cardless from "./Cardless.jsx";
import uuid from "uuid/v4";
import axios from "axios";
import Header from "./CardlessHeader.jsx";
import Anchor from "./StyledAnchor.jsx";
import CardItem from "./CardItem.jsx";
import Subtext from "./Subtext.jsx";

class SuggestedLinks extends Component {
  state = {
    data: [],
    loading: true
  };
  componentDidMount() {
    const url = "https://nodefaastwo.netlify.com/.netlify/functions/getLinks";
    axios
      .get(url)
      .then(res => {
        this.setState({
          data: res.data.result
        });
      })
      .catch(e => {
        //TODO: Log errors to db.
        console.log(e);
      })
      .finally(() => {
        this.setState({
          loading: false
        });
      });
  }
  render() {
    const { data, loading } = this.state;
    return (
      <Cardless>
        <Header>Other links</Header>
        <section>
          {loading
            ? "Loading Links..."
            : data.map(datum => {
                return (
                  <CardItem key={uuid()}>
                    <Anchor href={datum.link}>{datum.title}</Anchor>
                    <Subtext>{datum.subtitle}</Subtext>
                    <br />
                    <Subtext>{datum.source}</Subtext>
                  </CardItem>
                );
              })}
        </section>
      </Cardless>
    );
  }
}

export default SuggestedLinks;
