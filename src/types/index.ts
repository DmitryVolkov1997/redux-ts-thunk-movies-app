export type Movie = {
	Title: string
	Year: string
	imdbID: string
	Type: string
	Poster: string
}

export type MovieResponse = {
	Search: Movie
}

export type MovieError = {
	Response: string
	Error: string
}