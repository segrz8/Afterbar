import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Components/Slider'
import simpleParallax from 'simple-parallax-js'

import logo from '../src/img/dummy/afterbarLogo.jpg'
import img1 from '../src/img/dummy/i5.jpg'
import img2 from '../src/img/dummy/i4.jpg'

const cardList = [
	{
		drinkName: 'Mojito',
		ingredients: 'jasny rum, limonka, mięta, cukier trzcinowy, woda gazowana',
	},
	{
		drinkName: 'Cuba libre',
		ingredients: 'jasny rum, sok z limonki, cola',
	},
]

class App extends React.Component {

	// state = {}

	componentDidMount = () => {
		const images = document.getElementsByClassName('thumbnail');
		new simpleParallax(images, {
			scale: 1.15,
			delay: .8,
		});
	}

	render() {

		const card = cardList.map(item => {
			return (
				<div key={item.drinkName} className="Card__drink">
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
						<img src={img1} className="thumbnail" alt="..." />
					</picture>
				</div>
				<div className="ButtonsContainer">
					<div onClick={() => this.handleScroll('About')} className="ButtonsContainer__btnAbout ButtonsContainer__btn">o nas</div>
					<div onClick={() => this.handleScroll('About')} className="ButtonsContainer__btnOffer ButtonsContainer__btn">oferta</div>
					<div onClick={() => this.handleScroll('About')} className="ButtonsContainer__btnCard ButtonsContainer__btn">karta drinków</div>
					<div onClick={() => this.handleScroll('About')} className="ButtonsContainer__btnGallery ButtonsContainer__btn">galeria</div>
					<div onClick={() => this.handleScroll('About')} className="ButtonsContainer__btnContact ButtonsContainer__btn">kontakt</div>
				</div>
				<section className="About txt">
					<h1>O nas</h1>
					<p>Afterbar to mobilny drink bar zajmujący się organizacją imprez takich jak: wesela, 18-nastki, studniówki itp. Kilkuletna przygoda za barem skłoniła nas do założenia swojej moblilnej jednostki. Praca na tym stanowisku sprawia nam ogromną radość, posiadamy tylko jeden drink bar w ofercie, jeden, którym sterują ludzie dla których bar to hobby a nie tylko możliwość zarobku. Zamawiając nas na swoją impreze, zamawiasz właścicieli strony, dla któych dobra atmosfera i zadowoleni klienci są najważniejsze. Do zobaczenia :)</p>
				</section>
				<div className="photo">
					<picture>
						<source media="(min-width: 461px)" srcSet={img2} />
						<img src={img2} className="thumbnail" alt="..." />
					</picture>
				</div>
				<section className="Offer txt">
					<h1>Oferta</h1>
					<p>W ofercie posiadamy jeden drink bar, którym dowodzimy sami. Pełen profesjonalizm i duże doświadczenie. Chcesz wiedzieć więcej? Wjedz w zakładkę <i>kontakt</i> i zadzwoń do nas! </p>
				</section>
				<section className="Card">
					{card}
				</section>
				<section className="Gallery">
					<Slider />
				</section>
				<section className="Contact txt">
					<p>Tel. 786 979 780</p>
					<p><a target="_blank" rel="noopener noreferrer" href="mailto: Afterbar.pl@gmail.com">e-mail: Afterbar.pl@gmail.com</a></p>
				</section>
			</div>
		);
	}
}

export default App;
