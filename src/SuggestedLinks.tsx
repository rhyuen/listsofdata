import * as React from "react";
import { Cardless } from "./Cardless";
import uuid from "uuid/v4";
import { CardlessHeader } from "./CardlessHeader";
import { StyledAnchor } from "./StyledAnchor";
import { CardItem } from "./CardItem";
import { Subtext } from "./Subtext";
import { getLinks } from "./services/adsvc";

interface State {
  data: Array<object>;
  loading: boolean;
}
export class SuggestedLinks extends React.Component<{}, State> {
  state = {
    data: [],
    loading: true
  };
  componentDidMount() {
    getLinks()
      .then(res => {
        this.setState({
          data: res.data.result.slice(0, 5)
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
        <CardlessHeader>Other Links</CardlessHeader>
        <section>
          {loading
            ? "Loading Links..."
            : data.map((datum: any) => {
                return (
                  <CardItem key={uuid()}>
                    <StyledAnchor href={datum.link}>{datum.title}</StyledAnchor>
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
