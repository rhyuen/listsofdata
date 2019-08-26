import * as React from "react";


interface Props {
  message?: string;
}
export const LoadingIndicator: React.FunctionComponent<Props> = ({
  message = "Default Message"
}) => {

  return <div>{message}</div>;
};
