import styles from './MovieItem.module.scss'
import {Movie} from '../../types'
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material'

interface MovieItemProps extends Movie {
}

export const MovieItem = (props: MovieItemProps) => {
	const {imdbID: id, Type: type, Year: year, Title: title, Poster: poster} = props

	return (
		<Card sx={{maxWidth: 345, display: 'flex', flexDirection: 'column'}}>
			{
				poster !== 'N/A' ? <CardMedia
					component="img"
					alt={title}
					height="140"
					image={poster}
					sx={{flex: '1 1 auto'}}
				/> : <CardMedia
					component="img"
					alt={title}
					height="140"
					image="https://place-hold.it/360"
					sx={{flex: '1 1 auto'}}
				/>
			}
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
			</CardContent>
			<CardActions sx={{justifyContent: 'space-between'}}>
				<Button size="small">{type}</Button>
				<Button size="small">{year}</Button>
			</CardActions>
		</Card>
	)
}


