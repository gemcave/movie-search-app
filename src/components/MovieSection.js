import React from "react";

import styled from "styled-components";
import MovieHeader from "./MovieHeader";
import MovieMain from "./MovieMain";

const StyledMovieSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;

  ${props =>
    props.isDetails &&
    `
		background-color: var(--color-white);
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
		position: fixed;
		right: -100%;
		top: 0;
		transition: transform var(--transition);
		width: 100%;
		z-index: 10;
		`}
  ${props => props.isDetailsActive && "transform: translateX(-100%);"}
`;

const MovieSection = props => {
  return (
    <StyledMovieSection
      isDetails={props.isDetails}
      isDetailsActive={props.isDetailsActive}
    >
      <MovieHeader isLogoSize={props.isLogoSize} isBack={props.isBack} />
      <MovieMain
        movieResult={props.movieResult}
        onSearchTermChange={props.onSearchTermChange}
        toggleDetailsSection={props.toggleDetailsSection}
      />
    </StyledMovieSection>
  );
};
export default MovieSection;
