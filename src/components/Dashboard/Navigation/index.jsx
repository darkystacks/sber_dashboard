import styles from './Navigation.module.scss'
import aboutIcon from '/src/assets/icons/dashboard/about.svg'
import eventsIcon from '/src/assets/icons/dashboard/events.svg'
import portraitIcon from '/src/assets/icons/dashboard/portrait.svg'
import geographyIcon from '/src/assets/icons/dashboard/geography.svg'
import hobbyIcon from '/src/assets/icons/dashboard/hobby.svg'

const Navigation = () => {
	return (
		<nav className={styles.navigation}>
			<a href='#about'>
				<div className={styles.navBlock}>
					<div>
						<img src={aboutIcon} alt='about' />
					</div>
					<span>Об офисе</span>
				</div>
			</a>
			<a href='#events'>
				<div className={styles.navBlock}>
					<div>
						<img src={eventsIcon} alt='events' />
					</div>
					<span>Мероприятия</span>
				</div>
			</a>
			<a href='#portrait'>
				<div className={styles.navBlock}>
					<div>
						<img src={portraitIcon} alt='portrait' />
					</div>
					<span>Портрет кандидата</span>
				</div>
			</a>
			<a href='#geography'>
				<div className={styles.navBlock}>
					<div>
						<img src={geographyIcon} alt='geography' />
					</div>
					<span>География</span>
				</div>
			</a>
			<a href='#hobby'>
				<div className={styles.navBlock}>
					<div>
						<img src={hobbyIcon} alt='hobby' />
					</div>
					<span>Хобби</span>
				</div>
			</a>
		</nav>
	)
}

export default Navigation
