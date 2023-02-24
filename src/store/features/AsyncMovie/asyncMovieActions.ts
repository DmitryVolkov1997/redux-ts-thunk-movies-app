import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {API_BASE_URL} from '../../../configs/constant'
import {Movie, MovieError, MovieResponse} from '../../../types'
import {MovieSlice} from './asyncMovieSlice'
import {isMovies} from '../../../components/utils/typeguards'

export const fetchAllMovies = createAsyncThunk<Movie[], { search: string, radio: string }, {
	rejectValue: string
}>(
	'movies/fetchAllMovies',
	async ({search: name, radio}, {rejectWithValue}) => {
		const res = await axios.get(`${API_BASE_URL}=${name ? name : 'matrix'}&type=${radio !== 'all' ? radio : ''}`)

		if (res.status !== 200) {
			return rejectWithValue('Список фильмов не доступен (проблемы с сервером)')
		}

		if (isMovies(res.data.Search)) {
			return res.data.Search
		}
	}
)