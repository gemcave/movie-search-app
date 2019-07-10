import React from "react";
import styled from "styled-components";
import rem from "../helpers/rem";

const StyledLayoutContainer = styled.div`
  margin: 0 ${rem(16)};
`;

const LayoutContainer = props => {
  return <StyledLayoutContainer>{props.children}</StyledLayoutContainer>;
};

export default LayoutContainer;
