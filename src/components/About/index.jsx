import styles from './About.module.scss'
import gradientBlockImg from '/src/assets/photos/aboutGradientsBlock.jpg'
import tourLink from '/src/assets/icons/about/tour.svg'

const About = () => {
	return (
		<a name='about'>
			<main className={styles.main}>
				<div className={styles.gradientBlock}>
					<span className={styles.spanFirst}>Добро пожаловать</span>
					<span className={styles.spanSecond}> в Сбер КИБ</span>
					<img src={gradientBlockImg} alt='space' />
					<a
						href='https://dancinginthedarkk.github.io/SberPractic1/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<div className={styles.tour}>
							<span>Экскурсия</span>
							<img src={tourLink} alt='tour' />
						</div>
					</a>
				</div>
				<span className={styles.whatIs}>Что такое КИБ?</span>
				<section className={styles.officeBlock}>
					<div className={styles.officeBlockGreen}></div>
					<div className={styles.officeBlockPhoto}></div>
					<div className={styles.officeInfo}>
						<div className={styles.infoFirst}>
							<h1>200</h1>
							<h2>рабочих мест</h2>
							<h3>
								рассчитано для <br /> постоянных резидентов
							</h3>
						</div>
						<div className={styles.infoSecond}>
							<h1>22</h1>
							<h2>рабочих места</h2>
							<h3>
								в коворкинге для <br /> удаленной работы
							</h3>
						</div>
						<span>
							В числе клиентов банка крупнейшие корпорации, финансовые
							институты, федеральные и субфедеральные органы власти и
							организации
						</span>
					</div>
				</section>
				<span className={styles.bottomInfo}>
					<b>Сбер КИБ </b>- это просторный офис площадью 2 тыс. кв. м,
					рассчитанный на 200 рабочих мест. Здесь все продумано для удобства
					людей: игровая зона, зона отдыха с массажными креслами. В офисе сть
					душевая, что актуально в сезон моря и спорта на улице. Помимо
					комфортных условий мы делаем все, чтобы работать было интересно!
				</span>
			</main>
		</a>
	)
}

export default About
