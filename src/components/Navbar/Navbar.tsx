import styles from './Navbar.module.scss'
import {Container} from '../Container'
import {ReactComponent as Logo} from './logo.svg'

interface NavbarProps {
}

export const Navbar = ({}: NavbarProps) => {
	return (
		<div className={styles.navbar}>
			<Container>
				<div className={styles.navbarRow}>
					<Logo className={styles.navbarLogo}/>
					<p className={styles.navbarText}>Cinema Online</p>
				</div>
			</Container>
		</div>
	)
}


