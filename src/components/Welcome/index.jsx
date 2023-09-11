import styles from './Welcome.module.scss'
import ship from '/src/assets/icons/welcome/welcome-ship.svg'
import arrow from '/src/assets/icons/welcome/welcome-arrow.svg'

const Welcome = () => {
	return (
		<main className={styles.main}>
			<div className={styles.titleBlock}>
				<h1>
					сбер
					<br />
					порт
				</h1>
				<img src={ship} alt='ship' />
			</div>
			<a href='#dashboard'>
				<img className={styles.arrow} src={arrow} alt='arrow' />
			</a>
		</main>
	)
}

export default Welcome
