import styles from './Layout.module.scss'
import {Navbar} from '../Navbar'
import {ReactNode} from 'react'
import {Footer} from '../Footer'

interface LayoutProps {
	children: ReactNode
}

export const Layout = ({children}: LayoutProps) => {
	return (
		<div className={styles.layout}>
			<Navbar/>

			<main className={styles.main}>
				{children}
			</main>

			<Footer/>
		</div>
	)
}


