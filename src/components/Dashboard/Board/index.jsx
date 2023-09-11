import styles from './Board.module.scss'
import eventsArrow from '/src/assets/icons/dashboard/eventsMore.svg'
import diagram from '/src/assets/icons/dashboard/diagram.svg'
import aboutArrow from '/src/assets/icons/dashboard/aboutArrow.svg'
import aboutLine from '/src/assets/icons/dashboard/aboutLine.svg'
import geographyPath from '/src/assets/icons/dashboard/geographyPath.svg'
import geographyPlace from '/src/assets/icons/dashboard/geographyPlace.svg'
import portraitDashboard from '/src/assets/photos/portraitDashboard.png'
import portraitArrow from '/src/assets/icons/dashboard/portraitArrow.svg'
import eventsMore from '/src/assets/icons/dashboard/eventsMore.svg'
import sliderFirst from '/src/assets/photos/dashboardSliderFirst.jpg'
import sliderSecond from '/src/assets/photos/dashboardSliderSecond.jpg'
import sliderThird from '/src/assets/photos/dashboardSliderThird.jpg'

const Board = () => {
	return (
		<section className={styles.board}>
			<div className={styles.titleBlock}>
				<a name='dashboard'>
					<span>Сбер КИБ</span>
				</a>
			</div>
			<div className={styles.gridCards}>
				<div className={styles.gridCard + ' ' + styles.events}>
					<section>Мероприятия</section>
					<span>/2023</span>
					<a href='#events'>
						<div>
							Посмотреть все <img src={eventsArrow} alt='arrow' />
						</div>
					</a>
				</div>
				<div className={styles.gridCard + ' ' + styles.employees}>
					<div className={styles.employeesTitle}>Грейды</div>
					<div className={styles.diagram}>
						<img src={diagram} alt='diagram' />
						<div className={styles.employeesStat + ' ' + styles.juniors}>
							Джунов (12)
						</div>
						<div className={styles.employeesStat + ' ' + styles.middles}>
							Миддлов (100)
						</div>
						<div className={styles.employeesStat + ' ' + styles.seniors}>
							Сеньеров (13)
						</div>
					</div>
				</div>
				<div className={styles.gridCard + ' ' + styles.workplaces}>
					<a href='#about'>
						<img
							className={styles.workplacesArrow}
							src={aboutArrow}
							alt='arrow'
						/>
					</a>
					<div className={styles.workplacesBlockFirst}>
						<b>200</b>
						резидентов
					</div>
					<div className={styles.workplacesBlockSecond}>
						<b>22</b>
						гостя
					</div>
					<span className={styles.workplacesSpanFirst}>222</span>
					<img className={styles.workplacesLine} src={aboutLine} alt='line' />
					<span className={styles.workplacesSpanSecond}>рабочих места</span>
				</div>
				<div className={styles.gridCard + ' ' + styles.geography}>
					<a href='#geography'>
						<span>Откуда наши резиденты?</span>
					</a>
					<img
						className={styles.geographyPath}
						src={geographyPath}
						alt='path'
					/>
					<img
						className={styles.geographyPlace}
						src={geographyPlace}
						alt='place'
					/>
					<div></div>
				</div>
				<div className={styles.gridCard + ' ' + styles.portrait}>
					<div className={styles.portraitTitle}>Портрет резидента</div>
					<img
						className={styles.portraitImage}
						src={portraitDashboard}
						alt='portrait'
					/>
					<img
						className={styles.portraitArrow}
						src={portraitArrow}
						alt='arrow'
					/>
					<a href='#portrait'>
						<div className={styles.portraitLink}>Изучить</div>
					</a>
				</div>
				<div className={styles.gridCard + ' ' + styles.sliderBlock}>
					<a href='#hobby'>
						<div className={styles.hobbyLink}>
							Хобби резидентов <img src={eventsMore} alt='arrow' />
						</div>
					</a>
					<div className={styles.slider}>
						<img src={sliderFirst} alt='first' />
						<img src={sliderSecond} alt='second' />
						<img src={sliderThird} alt='third' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Board
