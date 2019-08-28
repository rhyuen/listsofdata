import * as React from "react";
import { Link } from "react-router-dom";

interface Props {
    location: {
        pathname: string
    }
}

export const NotFound: React.FunctionComponent<Props> = ({ location: { pathname } }) => {
    return (
        <section>
            <p>The page '{pathname}' you're looking for doesn't exist or can't be found. </p>
            <p>Click <Link to="/">here</Link> to bo back to more familiar territory.</p>
        </section>
    );
}

