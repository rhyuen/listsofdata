import React, { Component } from "react";
import Cardless from "./Cardless.jsx";
import Header from "./CardlessHeader.jsx";
import uuid from "uuid/v4";
import axios from "axios";
import CardItem from "./CardItem.jsx";
import Anchor from "./StyledAnchor.jsx";
import Subtext from "./Subtext.jsx";

class RecentUpdates extends Component {
  state = {
    data: [],
    loading: true
  };

  componentDidMount() {
    const githubURL = "https://api.github.com/repos/rhyuen/listsofdata/events";
    axios
      .get(githubURL)
      .then(res => {
        console.log(res.data);
        this.setState({
          data: res.data
        });
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        this.setState({
          loading: false
        });
      });
  }
  render() {
    const { loading, data } = this.state;
    return (
      <Cardless>
        <Header>Recent Updates</Header>
        <section>
          {loading
            ? "Loading Links..."
            : data
                .filter(item => item.type === "PushEvent")
                .map(datum => {
                  const { created_at, type } = datum;
                  const { display_login } = datum.actor;
                  const { message, url } = datum.payload.commits[0];
                  return (
                    <CardItem key={uuid()}>
                      <Anchor href={url}>{display_login}</Anchor>
                      <Subtext limit="50">{message}</Subtext>
                      <Subtext>{created_at.split("T")[0]}</Subtext>
                    </CardItem>
                  );
                })
                .slice(0, 5)}
        </section>
      </Cardless>
    );
  }
}

export default RecentUpdates;
