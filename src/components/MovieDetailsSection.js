import React from "react";
import styled from "styled-components";
import Rating from "./Rating";
import rem from "../helpers/rem";

const StyledInfo = styled.div`
  color: var(--color-blue-dark);
  line-height: 1.5;
  margin-top: ${rem(46)};
  padding: 0 ${rem(20)};
`;

const StyledPoster = styled.img`
  display: block;
  margin: 0 auto;
  width: ${rem(200)};
`;

const StyledInfoTitle = styled.h1`
  font-size: ${rem(25)};
  margin-bottom: ${rem(10)};
  text-align: center;
`;
const StyledInfoYear = styled.div`
  font-size: ${rem(14)};
  text-align: center;
`;

const StyledInfoRoleName = styled.a`
  display: inline-block;
  color: var(--color-yellow);
  margin: 0 ${rem(10)} 0 0;
`;

// const StyledInfoRole = styled.div`
// 	display: inline-block;
//   font-weight: $font-medium;
//   margin-right: rem(10);
// }

// .c-info__role {
//   a {
//     color: $yellow;
//     display: inline-block;
//     margin: 0 rem(10) 0 0;
//   }
// `

const StyledInfoRoleTitle = styled.span`
  display: inline-block;
  font-weight: var(--font-medium);
  margin-right: ${rem(10)};
`;

const MovieDetailsSection = ({ movieData }) => {
  return (
    <StyledInfo>
      <StyledPoster
        src={`https://image.tmdb.org/t/p/w500/${movieData.posterPath}`}
        alt={movieData.title}
      />
      <StyledInfoTitle>{movieData.title}</StyledInfoTitle>
      <StyledInfoYear>{movieData.releaseDate}</StyledInfoYear>
      <Rating rating={movieData.voteAverage} />
      <p>{movieData.tagline}</p>
      <div>
        <StyledInfoRoleTitle>Directors</StyledInfoRoleTitle>
        {movieData.directors.map(director => (
          <StyledInfoRoleName href="#">{director}</StyledInfoRoleName>
        ))}
      </div>
      <div>
        <StyledInfoRoleTitle>Writers</StyledInfoRoleTitle>
        {movieData.writers.map(writer => (
          <StyledInfoRoleName href="#">{writer}</StyledInfoRoleName>
        ))}
      </div>
      <div>
        <StyledInfoRoleTitle>Stars</StyledInfoRoleTitle>
        {movieData.stars.map(star => (
          <StyledInfoRoleName href="#">{star.name}</StyledInfoRoleName>
        ))}
      </div>
      <p>{movieData.overview}</p>
    </StyledInfo>
  );
};

export default MovieDetailsSection;
