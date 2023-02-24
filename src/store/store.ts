import {configureStore, combineReducers} from '@reduxjs/toolkit'
import asyncMoviesReducer from './features/AsyncMovie/asyncMovieSlice'
import searchReducer from './features/Search/searchSlice'
import radioReducer from './features/Radio/radioSlice'


const rootReducer = combineReducers({
	asyncMovies: asyncMoviesReducer,
	search: searchReducer,
	radio: radioReducer
})

const store = configureStore({
	reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store