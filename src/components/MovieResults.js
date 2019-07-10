import React from "react";
import styled from "styled-components";
import MovieResultItem from "./MovieResultItem";
import rem from "../helpers/rem";

const StyledMovieResults = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: ${rem(40)} ${rem(16)} 0;
`;

const MovieResults = ({ MovieResult, toggleDetailsSection }) => {
  const movieItems = MovieResult.map(movie => {
    return (
      <MovieResultItem
        key={movie.id.toString()}
        movie={movie}
        toggleDetailsSection={toggleDetailsSection}
      />
    );
  });
  return <StyledMovieResults>{movieItems}</StyledMovieResults>;
};

export default MovieResults;
