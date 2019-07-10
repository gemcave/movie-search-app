import React from "react";
import styled from "styled-components";
import SearchForm from "./SearchForm";
import MovieResults from "./MovieResults";
import Loader from "./Loader";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
const MovieMain = props => {
  return (
    <StyledMain>
      <SearchForm onSearchTermChange={props.onSearchTermChange} />
      {props.movieResult.length > 0 ? (
        <MovieResults
          MovieResult={props.movieResult}
          toggleDetailsSection={props.toggleDetailsSection}
        />
      ) : (
        <Loader />
      )}
    </StyledMain>
  );
};

export default MovieMain;
