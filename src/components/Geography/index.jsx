import { useState } from 'react'
import styles from './Geography.module.scss'
import mainPoint from '/src/assets/icons/geography/mainPoint.svg'
import point from '/src/assets/icons/geography/point.svg'

const Geography = () => {
	const cityPoints = [
		{ name: 'МОСКВА', style: styles.point1 },
		{ name: 'САНКТ-ПЕТЕРБУРГ', style: styles.point2 },
		{ name: 'ЕКАТЕРИНБУРГ', style: styles.point3 },
		{ name: 'ОМСК', style: styles.point4 },
		{ name: 'ПЕРМЬ', style: styles.point5 },
		{ name: 'САМАРА', style: styles.point6 },
		{ name: 'ТОМСК', style: styles.point7 },
		{ name: 'ОРЕНБУРГ', style: styles.point8 },
		{ name: 'УФА', style: styles.point9 },
	]

	const [hovered, setHovered] = useState('')

	const handleHover = city => {
		setHovered(city)
	}
	return (
		<a name='geography'>
			<main className={styles.main}>
				<span className={styles.title}>
					<b>27</b>
					<br />
					городов
				</span>
				<ul className={styles.cityList}>
					{cityPoints.map(city => (
						<li
							className={styles.cityListItem}
							key={city.name}
							onMouseEnter={e => handleHover(e.target.innerText)}
							onMouseLeave={() => setHovered('')}
						>
							{city.name}
						</li>
					))}
				</ul>

				<section className={styles.mapBlock}>
					<img src={mainPoint} alt='main point' className={styles.mainPoint} />
					{cityPoints.map(city => (
						// <img
						// 	key={city.name}
						// 	src='src/assets/icons/geography/point.svg'
						// 	alt='point'
						// 	className={
						// 		city.name === hovered
						// 			? styles.point + ' ' + city.style + ' ' + styles.pointHovered
						// 			: styles.point + ' ' + city.style
						// 	}
						// />
						<svg
							key={city.name}
							src={point}
							alt='point'
							className={
								city.name === hovered
									? styles.point + ' ' + city.style + ' ' + styles.pointHovered
									: styles.point + ' ' + city.style
							}
							viewBox='0 0 10 10'
							xmlns='http://www.w3.org/2000/svg'
						>
							<circle cx='5' cy='5' r='5' />
						</svg>
					))}
				</section>
			</main>
		</a>
	)
}

export default Geography
