import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FullBanner } from "./FullBanner"

interface Props {
    location: {
        pathname: string
    }
}

const StyledLink = styled(Link)`
    background-image: linear-gradient(90deg, #fad7f9, lavender);
    color: black;
    text-decoration: none;
    padding: .125rem .25rem;
    border-radius: 2px;
`;

export const NotFound: React.FunctionComponent<Props> = ({ location: { pathname } }) => {
    return (
        <FullBanner>
            <section>
                <p>The page '{pathname}' you're looking for doesn't exist or can't be found. </p>
                <p>Click <StyledLink to="/">here</StyledLink> to go back to more familiar territory.</p>
            </section>
        </FullBanner>
    );
}

