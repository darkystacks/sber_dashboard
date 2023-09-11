import Board from './Board'
import styles from './Dashboard.module.scss'
import Navigation from './Navigation'

const Dashboard = () => {
	return (
		<main className={styles.main}>
			<Navigation />
			<Board />
		</main>
	)
}

export default Dashboard
