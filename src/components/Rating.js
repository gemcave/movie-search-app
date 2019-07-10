import React from "react";
import StarIcon from "./StarIcon";
import styled from "styled-components";

const StyledRating = styled.div`
  align-items: center;
  display: flex;
`;

const Rating = ({ rating }) => {
  return (
    <StyledRating>
      <StarIcon size="small" />
      <div>{rating}</div>
    </StyledRating>
  );
};

export default Rating;
