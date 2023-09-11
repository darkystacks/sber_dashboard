import styles from './Hobby.module.scss'
import blob1 from '/src/assets/icons/hobby/blob1.svg'
import blob2 from '/src/assets/icons/hobby/blob2.svg'
import blob3 from '/src/assets/icons/hobby/blob3.svg'
import blob4 from '/src/assets/icons/hobby/blob4.svg'
import hobbyArrow from '/src/assets/icons/hobby/arrow.svg'

const Hobby = () => {
	return (
		<a name='hobby'>
			<main className={styles.main}>
				<img
					src={blob1}
					alt='blob'
					className={styles.blob1}
				/>
				<img
					src={blob2}
					alt='blob'
					className={styles.blob2}
				/>
				<img
					src={blob3}
					alt='blob'
					className={styles.blob3}
				/>
				<img
					src={blob4}
					alt='blob'
					className={styles.blob4}
				/>
				<section className={styles.upperBlock}>
					<h1>
						хобби
						<br />
						сотрудников
					</h1>
					<img
						className={styles.arrow}
						src={hobbyArrow}
						alt='arrow'
					/>
					<div className={styles.upperBlockImg}>
						Парусный
						<br />
						спорт
					</div>
				</section>
				<section className={styles.lowerBlock}>
					<div className={styles.greenBlock}></div>
					<div className={styles.lowerBlockBigImg}>Походы</div>
					<div className={styles.sliders}>
						<div className={styles.slider}>
							<div className={styles.slider1_1}>
								<span>Кроссфит</span>
							</div>
							<div className={styles.slider1_2}>
								<span>Бег</span>
							</div>
						</div>
						<div className={styles.slider}>
							<div className={styles.slider2_1}>
								<span>Серфинг</span>
							</div>
							<div className={styles.slider2_2}>
								<span>
									Настольные
									<br />
									игры
								</span>
							</div>
						</div>
					</div>
				</section>
			</main>
		</a>
	)
}

export default Hobby
