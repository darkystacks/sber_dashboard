import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import styles from './Events.module.scss'
import blob1 from '/src/assets/icons/events/blob1.svg'
import blob2 from '/src/assets/icons/events/blob2.svg'
import blob3 from '/src/assets/icons/events/blob3.svg'
import slider1 from '/src/assets/photos/eventsPageSlider/image1.jpg'
import slider2 from '/src/assets/photos/eventsPageSlider/image2.jpg'
import slider3 from '/src/assets/photos/eventsPageSlider/image3.jpg'
import slider4 from '/src/assets/photos/eventsPageSlider/image4.jpg'
import slider5 from '/src/assets/photos/eventsPageSlider/image5.jpg'

const Events = () => {
	return (
		<a name='events'>
			<main className={styles.main}>
				<img src={blob1} alt='blob' className={styles.blob1} />
				<img src={blob2} alt='blob' className={styles.blob2} />
				<img src={blob3} alt='blob' className={styles.blob3} />
				<div className={styles.titleBlock}>
					<h1>МЕРОПРИЯТИЯ КОММЬЮНИТИ</h1>
					<h2>мэтч активного отдыха и классного офиса</h2>
				</div>

				<Splide
					hasTrack={false}
					options={{
						type: 'loop',
						// perPage: '5',
						focus: 'center',
						gap: '2vw',
						autoWidth: 'true',
					}}
				>
					<SplideTrack>
						<SplideSlide>
							<div className={styles.sliderText}>Творческий вечер</div>
							<img className={styles.sliderImg} src={slider1} alt='Image 1' />
						</SplideSlide>
						<SplideSlide>
							<div className={styles.sliderText}>Походы</div>
							<img className={styles.sliderImg} src={slider2} alt='Image 2' />
						</SplideSlide>
						<SplideSlide>
							<div className={styles.sliderText}>Киновечер</div>
							<img className={styles.sliderImg} src={slider3} alt='Image 3' />
						</SplideSlide>
						<SplideSlide>
							<div className={styles.sliderText}>Кикер</div>
							<img className={styles.sliderImg} src={slider4} alt='Image 4' />
						</SplideSlide>
						<SplideSlide>
							<div className={styles.sliderText}>Регаты</div>
							<img className={styles.sliderImg} src={slider5} alt='Image 5' />
						</SplideSlide>
					</SplideTrack>
				</Splide>
			</main>
		</a>
	)
}

export default Events
