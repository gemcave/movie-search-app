import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import rem from "../helpers/rem";
const StyledButton = styled.button`
  background: none;
  border: 0;
  margin: 0;
  padding: 0;
`;
const StyledSearchButton = styled(StyledButton)`
  background-color: var(--color-yellow);
  border-bottom-right-radius: ${rem(4)};
  border-top-right-radius: ${rem(4)};
  padding: ${rem(16)};
  position: absolute;
  top: 0;
`;

const StyledBackButton = styled(StyledButton)`
  position: absolute;
  left: ${rem(20)};
  padding: ${rem(10)};
  top: ${rem(20)};
`;
const Button = props => {
  const { apperance, children } = props;

  if (apperance === "search") {
    return <StyledSearchButton>{children}</StyledSearchButton>;
  } else if (apperance === "back") {
    return <StyledBackButton>{children}</StyledBackButton>;
  }

  return <StyledButton apperance={apperance}>{children}</StyledButton>;
};

Button.propTyper = {
  apperance: PropTypes.oneOf(["search", "back"]).isRequired
};

Button.defaultProps = {
  apperance: "search"
};

export default Button;
