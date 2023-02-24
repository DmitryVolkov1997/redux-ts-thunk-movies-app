import styles from './HomePage.module.scss'
import {Layout} from '../../Layout'
import AsyncMovieList from '../../../store/features/AsyncMovie/AsyncMovieList'
import {Container} from '../../Container'
import {Search} from '../../Search'

interface HomePageProps {}

export const HomePage = ({}: HomePageProps) => {
	return <div className={styles.homePage}>
		<Layout>
			<Container>
				<Search/>
				<AsyncMovieList/>
			</Container>
		</Layout>
	</div>
}
