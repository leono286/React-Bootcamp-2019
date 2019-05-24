import React from 'react';
import moviesData from '../data/movies.json';
import MovieCard from '../components/MovieCard';

const API_KEY = '543ab0d9314bbc9b8f0b8d9f64411c9d';

class Home extends React.Component {
  state = {
    ...moviesData
  };

  deleteMovie = movieId => {
    this.setState((state, props) => {
      const movies = state.movies.filter(movie => movie.id !== movieId);
      return {
        movies
      };
    });
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ movies: data.results.slice(0,5) });
      });
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h1 className='main-title'>Movie App</h1>
        <div className='content'>
          {movies.map(movie => (
            <MovieCard
              deleteMovie={this.deleteMovie}
              key={movie.id}
              {...movie}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
