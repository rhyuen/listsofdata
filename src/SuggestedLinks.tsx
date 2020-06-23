import * as React from "react";
import { Cardless } from "./Cardless";
import { v4 } from "uuid";
import { CardlessHeader } from "./CardlessHeader";
import { StyledAnchor } from "./StyledAnchor";
import { CardItem } from "./CardItem";
import { Subtext } from "./Subtext";
import { getLinks } from "./services/adsvc";
import { LoadingIndicator } from "./shared/LoadingIndicator";

interface State {
  data: Array<object>;
  loading: boolean;
}
export const SuggestedLinks: React.FunctionComponent<{}> = () => {

  const [links, updateLinks] = React.useState<State>({
    data: [],
    loading: true
  });

  React.useEffect(() => {
    getLinks()
      .then(res => {
        updateLinks({
          data: res.data.result.slice(0, 5),
          loading: false
        });
      })
      .catch(e => {
        //TODO: Log errors to db.
        console.log(e);
        updateLinks({
          data: [],
          loading: false
        });
      });
  }, []);



  return (
    <Cardless>
      <CardlessHeader>Other Links</CardlessHeader>
      <section>
        {links.loading ? (
          <LoadingIndicator message="Loading Links..." data-testid="suggested_links_loading" />
        ) : (
            <SuggestLinksList input={links.data} />
          )}
      </section>
    </Cardless>
  );
}

interface Props {
  input: Array<object>;
}

const SuggestLinksList: React.FunctionComponent<Props> = (data) => {
  const result = data.input.map((datum: any) => {
    return (
      <CardItem key={v4()}>
        <StyledAnchor href={datum.link}>{datum.title}</StyledAnchor>
        <Subtext>{datum.subtitle}</Subtext>
        <br />
        <Subtext>{datum.source}</Subtext>
      </CardItem>
    );
  });
  return <>{result}</>;
}