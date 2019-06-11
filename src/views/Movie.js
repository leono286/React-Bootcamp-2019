import React from 'react'

import { getMovie } from '../api/movies'

import MovieCard from '../components/MovieCard'

const massageMovieData = (movie) => ({
    id: movie.id,
    title: movie.title,
    image: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
    overview: movie.overview,
})

export default class Movie extends React.Component {
    state = {
        movie: {},
    }

  componentDidMount() {
    const { match, movies } = this.props;
        if(match.params.id) {
          const movie = movies.data.filter(movie => {
            return Number(movie.id) === Number(match.params.id);
          })
          
          this.setState({movie: movie[0]})
        }
        
    }

    render() {
        const { movie } = this.state
        return <MovieCard {...movie} />
    }
}