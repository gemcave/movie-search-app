import React from "react";
import styled from "styled-components";

const StyledStar = styled.svg`
  ${props => props.size === "small" && "transform: scale(0.7);"}
`;

const StarIcon = ({ size }) => {
  return (
    <StyledStar
      size={size}
      width="26"
      height="25"
      viewBox="0 0 26 25"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>icon/toggle/star_24px</title>
      <defs>
        <path
          id="rating-a"
          d="M15 21.587l7.725 4.663-2.05-8.788L27.5 11.55l-8.988-.763L15 2.5l-3.512 8.287-8.988.763 6.825 5.912-2.05 8.788z"
        />
      </defs>
      <g transform="translate(-2 -2)" fill="none" fillRule="evenodd">
        <mask id="rating-b" fill="#fff">
          <use xlinkHref="#rating-a" />
        </mask>
        <use fill="#FFBE28" fillRule="nonzero" xlinkHref="#rating-a" />
        <g mask="url(#rating-b)" fill="#FFBE28">
          <path d="M0 0h30v30H0z" />
        </g>
      </g>
    </StyledStar>
  );
};

export default StarIcon;
