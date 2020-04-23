import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Components/Slider'
import simpleParallax from 'simple-parallax-js'

import logo from '../src/img/afterbarLogo.jpg'
import img1 from '../src/img/m1.jpg'
import img1S from '../src/img/m1S.jpg'
import img2 from '../src/img/m2.jpg'
import img2S from '../src/img/m2S.jpg'

const cardList = [
	{
		id: 0,
		drinkName: 'Mojito',
		ingredients: 'jasny rum, limonka, mięta, cukier trzcinowy, woda gazowana',
	},
	{
		id: 1,
		drinkName: 'Cuba libre',
		ingredients: 'jasny rum, sok z limonki, cola',
	},
	{
		id: 2,
		drinkName: 'Malibu Sunrise',
		ingredients: 'malibu, sok pomarańczowy, grenadyna',
	},
	{
		id: 3,
		drinkName: 'Blue Shark',
		ingredients: 'wódka, blue curacao, gin, sok z cytryny',
	},
	{
		id: 4,
		drinkName: 'John Collins',
		ingredients: 'gin, sok z cytryny, syrop cukrowy, woda gazowana',
	},
	{
		id: 5,
		drinkName: 'Lalile',
		ingredients: 'gin, sok ananas, syrop brzoskwiniowy, syrop truskawkowy',
	},
	{
		id: 6,
		drinkName: 'Żar Tropików',
		ingredients: 'grenadyna, likier blue curacao, wódka, sok pomarańczowy',
	},
	{
		id: 7,
		drinkName: 'Tequila Sunrise',
		ingredients: 'tequila sunrise, sok pomarańczowy, grenadyna',
	},
	{
		id: 8,
		drinkName: 'Whisky z Colą',
		ingredients: 'whisky, cola',
	},
	{
		id: 9,
		drinkName: 'Sex on the Beach',
		ingredients: 'wódka, likier brzoskwiniowy, sok pomarańczowy, sok żurawinowy',
	},
	{
		id: 10,
		drinkName: 'Wściekły pies',
		ingredients: 'wódka, syrop malinowy, tabasco',
	},
	{
		id: 11,
		drinkName: 'Blue Kamikaze',
		ingredients: 'wódka, blue curacao, sok z cytryny',
	},
	{
		id: 12,
		drinkName: 'Chmurka',
		ingredients: 'wódka, syrop blue curacao',
	},
	{
		id: 13,
		drinkName: 'Teraz Polska',
		ingredients: 'wódka, grenadyna, sok z cytryny',
	},
]

class App extends React.Component {

	// state = {}

	handleScroll = (section) => {
		document.querySelector(`.${section}`).scrollIntoView({
			behavior: 'smooth',
		})
	}

	handleItemAppear = () => {
		for (let i = 0; i < cardList.length; i++) {
			const scrollValue = window.scrollY
			const item = document.querySelector(`.item${i}`)
			const itemTop = item.offsetTop
			const itemHeight = item.offsetHeight
			const windowHeight = window.innerHeight
			if (scrollValue > itemTop + itemHeight / 2 - windowHeight) {
				item.classList.add(`Card__drink--visible`)
			}
		}
	}

	componentDidMount = () => {
		const images = document.getElementsByClassName('thumbnail');
		new simpleParallax(images, {
			scale: 1.15,
			delay: .8,
		});

		window.addEventListener('scroll', this.handleItemAppear)
	}

	componentWillUnmount = () => {
		window.removeEventListener('scroll', this.handleItemAppear)
	}

	render() {

		const card = cardList.map(item => {
			return (
				<div key={item.drinkName} className={`Card__drink item${item.id}`}>
					<h2>{item.drinkName}</h2>
					<p>{item.ingredients}</p>
				</div>
			)
		})

		return (
			<div className="App">
				<div className="Logo">
					<picture>
						<source media="(min-width: 461px)" srcSet={logo} />
						<img src={logo} className="" alt="logo" />
					</picture>
				</div>
				<div className="MainPhoto">
					<picture>
						<source media="(min-width: 461px)" srcSet={img1} />
						<img src={img1S} className="thumbnail" alt="..." />
					</picture>
				</div>
				<div className="ButtonsContainer">
					<div onClick={() => this.handleScroll('About')} className="ButtonsContainer__btnAbout ButtonsContainer__btn">o nas</div>
					<div onClick={() => this.handleScroll('Offer')} className="ButtonsContainer__btnOffer ButtonsContainer__btn">oferta</div>
					<div onClick={() => this.handleScroll('Card')} className="ButtonsContainer__btnCard ButtonsContainer__btn">karta drinków</div>
					<div onClick={() => this.handleScroll('Gallery')} className="ButtonsContainer__btnGallery ButtonsContainer__btn">galeria</div>
					<div onClick={() => this.handleScroll('Contact')} className="ButtonsContainer__btnContact ButtonsContainer__btn">kontakt</div>
				</div>
				<section className="About txt">
					<h1>O nas</h1>
					<p>Afterbar to mobilny drink bar zajmujący się organizacją imprez takich jak: wesela, 18-nastki, studniówki itp. Kilkuletna przygoda za barem skłoniła nas do założenia swojej moblilnej jednostki. Praca na tym stanowisku sprawia nam ogromną radość, posiadamy tylko jeden drink bar w ofercie, jeden, którym sterują ludzie dla których bar to hobby a nie tylko możliwość zarobku. Zamawiając nas na swoją impreze, zamawiasz właścicieli strony, dla któych dobra atmosfera i zadowoleni klienci są najważniejsze. Do zobaczenia <i className="fas fa-smile lemonYellow"></i></p>
				</section>
				<div className="photo">
					<picture>
						<source media="(min-width: 461px)" srcSet={img2} />
						<img src={img2S} className="thumbnail" alt="..." />
					</picture>
				</div>
				<section className="Offer txt">
					<h1>Oferta</h1>
					<p>W ofercie posiadamy jeden drink bar, którym dowodzimy sami. Pełen profesjonalizm i duże doświadczenie. Chcesz wiedzieć więcej? Wejdź w zakładkę <span onClick={() => this.handleScroll('Contact')}><i className="fas fa-hand-point-right lemonYellow"></i><i>kontakt</i></span> i zadzwoń do nas! </p>
				</section>
				<section className="Card">
					{card}
				</section>
				<section className="Gallery">
					<Slider />
				</section>
				<section className="Contact txt">
					<h1>Kontakt:</h1>
					<p>Tel. 786 979 780</p>
					<p><a target="_blank" rel="noopener noreferrer" href="mailto: Afterbar.pl@gmail.com">e-mail: afterbar.pl@gmail.com</a></p>
				</section>
				<footer className="Footer">
					<p>Copyright © 2020 Afterbar - wszelkie prawa zastrzeżone</p>
				</footer>
			</div>
		);
	}
}

export default App;
