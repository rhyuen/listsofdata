import * as React from "react";
import { Cardless } from "./Cardless";
import { CardlessHeader } from "./CardlessHeader";
import uuid from "uuid/v4";
import { CardItem } from "./CardItem";
import { StyledAnchor } from "./StyledAnchor";
import { Subtext } from "./Subtext";
import { getGitHubUpdates } from "./services/githubsvc";
import { LoadingIndicator } from "./shared/LoadingIndicator";

interface State {
  data: Array<object>;
  loading: boolean;
}
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


export const RecentUpdates: React.FunctionComponent<{}> = () => {

  const [updates, setUpdates] = React.useState<State>({
    data: [],
    loading: true
  });

  React.useEffect(() => {
    getGitHubUpdates()
      .then(res => {
        //console.log(res.data);
        setUpdates({
          data: res.data,
          loading: false
        });
      })
      .catch(e => {
        //console.log(e);
        setUpdates({
          data: [],
          loading: false
        });
      })
  }, []);

  return (
    <Cardless>
      <CardlessHeader>Recent Updates</CardlessHeader>
      <section>
        {updates.loading ? (
          <LoadingIndicator message="Loading Updates..." data-testid="recent_updates_loading" />
        ) : (
            <UpdatesItem input={updates.data} />
          )}
      </section>
    </Cardless >
  );
}

interface Props {
  input: Array<object>
}

const UpdatesItem: React.FunctionComponent<Props> = (data) => {
  const result = data.input.filter((item: any) => item.type === "PushEvent")
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
    .slice(0, 5)

  return <>{result}</>;
}