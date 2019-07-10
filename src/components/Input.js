import React from "react";
import styled from "styled-components";
import rem from "../helpers/rem";

const StyledInput = styled.input`
  border: 0;
  border-bottom-left-radius: ${rem(4)};
  border-top-left-radius: ${rem(4)};
  color: var(--color-grey);
  font-family: var(--typography-roboto);
  font-size: ${rem(16)};
  padding: ${rem(16)};
  width: calc(100% - 56px);
`;
const Input = props => {
  return <StyledInput {...props} />;
};

export default Input;
