import React, { PureComponent } from "react";
import MovieSection from "./components/MovieSection";
import { createGlobalStyle } from "styled-components";
import axios from "axios";

const API_KEY = "075e6ddf1e5e2d1a672e23418dd10f2a";

const displayRole = (crew, department) => {
  const roleData = crew
    .filter(obj => {
      return obj.department === department;
    })
    .slice(0, 3);

  return [
    ...roleData.map(role => {
      return role.name;
    })
  ];
};

const GlobalStyle = createGlobalStyle`
	body {
		--color-blue-dark: #0e0e41;
		--color-grey: #444;
		--color-black: black;
		--color-blue-dark: #0e0e41;
		--color-black-a87: rgba(var(--color-black), 0.87);
		--color-black-a60: rgba(var(--color-black), 0.6);
		--color-yellow: #ffbe28;
		--easeInOutCubic: cubic-bezier(0.645, 0.045, 0.355, 1);
		--transition: 0.3s var(--easeInOutCubic);
		--font-medium: 500;
		--font-black: 900;
		--color-white: white;
		--typography-roboto: "Roboto", sans serif;
		background-color: var(--color-blue-dark);
		font-family: var(--typography-roboto);
		font-size: 16px;
		margin: 0;
		padding: 0;
	}
	.o-page {
		height: auto;
		min-height: 100vh;
		overflow-x: hidden;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
		position: relative;
		width: 100%;
	}
`;

class Movie extends PureComponent {
  state = {
    movies: [],
    movieSelected: { directors: [], writers: [], stars: [] },
    isDetailsActive: false
  };

  toggleDetailsSection = movieId => {
    this.setState(state => ({
      isDetailsActive: !state.isDetailsActive
    }));

    if (typeof movieId !== undefined) {
      const contentQuery = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
      const creditQuery = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;
      axios.all([axios.get(contentQuery), axios.get(creditQuery)]).then(
        axios.spread((contentData, creditData) => {
          const details = contentData.data;
          const releaseDate = details.release_date.split("-")[0];
          const directors = displayRole(creditData.data.crew, "Directing");
          const writers = displayRole(creditData.data.crew, "Writing");
          const stars = creditData.data.cast.slice(0, 3);

          this.setState(state => ({
            movieSelected: {
              title: details.title,
              posterPath: details.poster_path,
              overview: details.overview,
              tagline: details.tagline,
              voteAverage: details.voteAverage,
              releaseDate,
              directors,
              writers,
              stars
            }
          }));
        })
      );
    }
  };

  searchTerm = term => {
    const searchQuery = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${term}&page=1&include_adult=false`;

    axios
      .get(searchQuery)
      .then(response => {
        this.setState({ movies: response.data.results });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {}

  render() {
    return (
      <>
        <MovieSection
          movieResult={this.state.movies}
          onSearchTermChange={this.searchTerm}
          toggleDetailsSection={this.toggleDetailsSection}
        />
        <MovieSection
          movieResult={this.state.movies}
          movieData={this.state.movieSelected}
          isDetailsActive={this.state.isDetailsActive}
          isDetails={true}
          isLogoSize="small"
          isBack={true}
          toggleDetailsSection={this.toggleDetailsSection}
        />
        <GlobalStyle />
      </>
    );
  }
}

export default Movie;
