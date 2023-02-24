import {Movie, MovieError} from '../../types'

export const isMovies = (movies: any): movies is Movie[] => 'imdbID' in movies[0]

