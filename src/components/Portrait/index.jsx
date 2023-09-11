import styles from './Portrait.module.scss'
import blob1 from '/src/assets/icons/events/blob1.svg'
import blob2 from '/src/assets/icons/events/blob2.svg'
import blob3 from '/src/assets/icons/events/blob3.svg'
import titleIcon from '/src/assets/icons/portrait/titleGuy.svg'
import portraitPath from '/src/assets/icons/portrait/path.svg'
import portraitArrow from '/src/assets/icons/portrait/arrow.svg'
import portraitGuy from '/src/assets/photos/portraitGuy.png'

const Portrait = () => {
	return (
		<a name='portrait'>
			<main className={styles.main}>
				<img src={blob1} alt='blob' className={styles.blob1} />
				<img src={blob2} alt='blob' className={styles.blob2} />
				<img src={blob3} alt='blob' className={styles.blob3} />

				<div className={styles.titleBlock}>
					<img src={titleIcon} alt='guy' />
					<span>Портрет кандидата</span>
				</div>
				<section className={styles.stats}>
					<div className={styles.femaleStat}></div>
					<div className={styles.maleStat}></div>
					<div className={styles.ageStat}>
						<span className={styles.low}>
							<b>25</b>лет
						</span>
						<span className={styles.high}>
							<b>37</b>лет
						</span>
						<img src={portraitPath} alt='path' />
					</div>
					<div className={styles.residentStat}>
						<span>
							<b>91</b>
							<br />
							новых сотрудников
						</span>
						<span>
							<b>51</b>
							<br />
							релокация в Сбер Порт
						</span>
					</div>

					<div className={styles.gradientPhotoBlock}>
						<img className={styles.arrow} src={portraitArrow} alt='arrow' />
						<img className={styles.photo} src={portraitGuy} alt='guy' />
					</div>
				</section>
			</main>
		</a>
	)
}

export default Portrait
