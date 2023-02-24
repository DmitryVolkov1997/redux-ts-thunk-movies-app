import {Box, TextField, Button, FormControl, RadioGroup, FormControlLabel, Radio} from '@mui/material'
import styles from './Search.module.scss'
import {ChangeEvent, ReactNode, useRef, useState} from 'react'
import {useAppDispatch} from '../../store/redux-hooks'
import {setSearch} from '../../store/features/Search/searchSlice'
import {radios} from './constants'
import {setRadio} from '../../store/features/Radio/radioSlice'
import {useSelector} from 'react-redux'
import {getRadioValue} from '../../store/features/Radio/radioSelectors'

export const Search = () => {
	const dispatch = useAppDispatch()
	const formRef = useRef<HTMLFormElement>(null)
	const {radio} = useSelector(getRadioValue)

	const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (formRef.current) {
			const value = formRef.current.search.value.trim()

			dispatch(setSearch(value))
		}
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(setRadio(e.target.value))
	}

	const printRadios = () => {
		return radios.map((r, idx) => {
			return (
				<FormControlLabel key={idx} value={r.value} control={<Radio/>} label={r.label}
								  checked={radio === r.value}/>
			)
		})
	}

	return (
		<form ref={formRef} onSubmit={handleSubmit} style={{marginTop: '35px'}}>
			<FormControl sx={{width: '100%', display: 'flex',}}>
				<Box display="flex" gap="15px" width="100%">
					<TextField name="search" fullWidth id="outlined-search"
							   label="Search movie" type="search"/>
					<Button sx={{padding: '0 40px', fontSize: '20px'}} variant="contained" type="submit">
						Найти
					</Button>
				</Box>

				<RadioGroup row
							aria-labelledby="demo-controlled-radio-buttons-group"
							name="controlled-radio-buttons-group"
							onChange={handleChange}>
					{printRadios()}
				</RadioGroup>
			</FormControl>
		</form>
	)
}


