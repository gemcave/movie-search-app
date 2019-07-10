import React from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledSvg = styled.svg`
  display: block;
`;

const Back = () => {
  return (
    <Button apperance="back">
      <StyledSvg
        width="8"
        height="12"
        viewBox="0 0 8 12"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>icon/navigation/chevron_left_24px</title>
        <defs>
          <path id="back-a" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </defs>
        <use
          fill="#0E0E41"
          fillRule="nonzero"
          xlinkHref="#back-a"
          transform="translate(-8 -6)"
        />
      </StyledSvg>
    </Button>
  );
};

export default Back;
