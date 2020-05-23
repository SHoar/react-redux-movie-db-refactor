import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getMovie,
  showLoadingSpinner,
  clearMovie,
  setMoviePersistedState,
} from "../actions";
import Movie from "../components/Movie/Movie";
class MovieContainer extends Component {
  componentDidMount() {
    // ES6 destructuring the props
    const { movieId } = this.props.match.params;

    if (sessionStorage.getItem(`${movieId}`)) {
      const movie = JSON.parse(sessionStorage.getItem(`${movieId}`));
      this.props.setMoviePersistedState(movie);
    }
    this.getMovie(movieId);
  }

  componentDidUpdate() {
    const { movieId } = this.props.match.params;
    const { movies, actors, directors } = this.props;

    if (this.props.movie) {
      const persistedMovieState = { movies, actors, directors };
      sessionStorage.setItem(`${movieId}`, JSON.stringify(persistedMovieState));
    }
  }

  getMovie(movieId) {
    this.clearMovie();
    this.props.showLoadingSpinner();
    this.props.getMovie(movieId);
  }

  clearMovie() {
    this.props.clearMovie();
  }

  render() {
    return (
      <Movie
        movie={this.props.movie}
        actors={this.props.actors}
        directors={this.props.directors}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return state.movie;
};

const mapDispatchToProps = {
  getMovie,
  showLoadingSpinner,
  clearMovie,
  setMoviePersistedState,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
