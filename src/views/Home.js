import React from 'react';
// import moviesData from '../data/movies.json'
import axios from 'axios'

import MainLayout from '../layouts/MainLayout'
import MovieCard from '../components/MovieCard'
import { API_KEY, MOVIE_LIST_ENDPOINT_URL } from "../constants/movies";

class Home extends React.Component {
  state = {
    movies: [],
  }


  addMovie = (movie) => {
    this.setState({ movies: [...this.state.movies, movie] })
  }

  deleteMovie = (movieId) => {
    this.setState((state, props) => {
      const movies = state.movies.filter((movie) => movie.id !== movieId)
      return {
        movies
      }
    })
  }

  componentDidMount() {
    axios.get(`${MOVIE_LIST_ENDPOINT_URL}${API_KEY}`)
      .then(response => {
        console.log(response.data.results);
        const movies = response.data.results;
        this.setState({ movies });
      }

      )
  }


  render() {
    const { movies } = this.state
    return <MainLayout>
      {movies.map((movie) =>
        <MovieCard deleteMovie={this.deleteMovie} key={movie.id} {...movie} />
      )}
    </MainLayout>
  }
}

export default Home