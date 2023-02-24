import React, {useEffect} from 'react'
import {fetchAllMovies} from './asyncMovieActions'
import {MovieItem} from '../../../components/MovieItem'
import {useAppDispatch} from '../../redux-hooks'
import {useSelector} from 'react-redux'
import {selectAllMovies} from './asyncMovieSelectors'
import styles from './AsyncMovieList.module.scss'
import {getSearchValue} from '../Search/searchSelector'
import {Typography} from '@mui/material'
import {getRadioValue} from '../Radio/radioSelectors'

const AsyncMovieList = () => {
	const dispatch = useAppDispatch()
	const {status, movies} = useSelector(selectAllMovies)
	const {search} = useSelector(getSearchValue)
	const {radio} = useSelector(getRadioValue)

	useEffect(() => {
		dispatch(fetchAllMovies({search, radio}))
	}, [search, radio])

	return (
		<div className={styles.row}>
			{
				status === 'loading' ? <Typography variant="h4" gutterBottom>
					Идет загрузка
				</Typography> : status === 'finished' ? movies.map(movie => (
					<MovieItem key={movie.imdbID} {...movie}/>
				)) : <Typography variant="h4" gutterBottom>
					Ничего не найдено
				</Typography>
			}
		</div>
	)
}

export default AsyncMovieList
