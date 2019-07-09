import * as React from "react";
import { Cardless } from "./Cardless";
import { CardlessHeader } from "./CardlessHeader";
import uuid from "uuid/v4";
import axios from "axios";
import { CardItem } from "./CardItem";
import { StyledAnchor } from "./StyledAnchor";
import { Subtext } from "./Subtext";

interface State {
  data: Array<object>;
  loading: boolean;
}
export class RecentUpdates extends React.Component<{}, State> {
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

    interface Item {
      type: string;
    }

    interface Datum {
      createdAt: string;
      actor: {
        display_login: string;
      };
      payload: {
        commits: Array<object>;
      };
    }

    return (
      <Cardless>
        <CardlessHeader>Recent Updates</CardlessHeader>
        <section>
          {loading
            ? "Loading Links..."
            : data
                .filter((item: Item) => item.type === "PushEvent")
                .map((datum: any) => {
                  const { created_at } = datum;
                  const { display_login } = datum.actor;
                  const { message, url } = datum.payload.commits[0];
                  return (
                    <CardItem key={uuid()}>
                      <StyledAnchor href={url}>
                        UPDATE by {display_login}
                      </StyledAnchor>
                      <Subtext limit={50}>{message}</Subtext>
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
