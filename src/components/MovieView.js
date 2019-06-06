import React from 'react';
import { API_KEY, MOVIE_DETAILS_ENDPOINT_URL } from "../constants/movies";
import axios from 'axios'
import MovieCard from "./MovieCard";

const massagedMovie = movie => ({
  id: movie.id,
  title: movie.title,
  poster_path: movie.poster_path,
  overview: movie.overview,
})

class MovieView extends React.Component {
  state = {
    movie: {}
  }

  componentDidMount() {
    const movieId = this.props.match.params.id;
    axios.get(`${MOVIE_DETAILS_ENDPOINT_URL}${movieId}?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data);
        console.log('----------------');

        console.log(massagedMovie(res));
        this.setState({ movie: massagedMovie(res.data) })
      });
  }

  render() {
    return <MovieCard {...this.state.movie} />
  }
}

export default MovieView