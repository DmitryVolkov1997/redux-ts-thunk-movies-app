import {createSlice} from '@reduxjs/toolkit'
import {Movie, MovieError} from '../../../types'
import {fetchAllMovies} from './asyncMovieActions'

export type MovieSlice = {
	status: 'idle' | 'loading' | 'finished' | 'error'
	movies: Movie[]
}

const initialState: MovieSlice = {
	status: 'idle',
	movies: []
}

const asyncMovieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchAllMovies.pending, (state) => {
			state.status = 'loading'
		}).addCase(fetchAllMovies.fulfilled, (state, action) => {
			state.status = 'finished'
			state.movies = action.payload
		}).addCase(fetchAllMovies.rejected, (state) => {
			state.status = 'error'
		})
	}
})

export default asyncMovieSlice.reducer