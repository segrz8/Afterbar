import React from 'react';
import './App.scss';
import simpleParallax from 'simple-parallax-js'

import logo from '../src/img/dummy/afterbarLogo.jpg'
import img1 from '../src/img/dummy/i5.jpg'
import img2 from '../src/img/dummy/i4.jpg'

// const card = [
// 	{
// 		// image:,
// 		drink: 'Aperol Spritz',
// 		ingredients: 'pomarańcze',
// 		price: '20 zł',
// 	},
// ]

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
					<div onClick={() => this.handleScroll('About')} className="ButtonsContainer__btnAbout btn">o nas</div>
					<div onClick={() => this.handleScroll('About')} className="ButtonsContainer__btnOffer btn">oferta</div>
					<div onClick={() => this.handleScroll('About')} className="ButtonsContainer__btnCard btn">karta drinków</div>
					<div onClick={() => this.handleScroll('About')} className="ButtonsContainer__btnGallery btn">galeria</div>
					<div onClick={() => this.handleScroll('About')} className="ButtonsContainer__btnContact btn">kontakt</div>
				</div>
				<section className="About txt">
					<h1>O nas</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, at! Fugit adipisci voluptatibus ullam minima reprehenderit pariatur, veritatis ex commodi possimus doloremque labore iusto omnis, temporibus fugiat optio expedita non eligendi sapiente ducimus, et delectus. Repellendus asperiores fuga optio unde.</p>
				</section>
				<div className="photo">
					<picture>
						<source media="(min-width: 461px)" srcSet={img2} />
						<img src={img2} className="thumbnail" alt="..." />
					</picture>
				</div>
				<section className="Offer txt">
					<h1>Oferta</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, at! Fugit adipisci voluptatibus ullam minima reprehenderit pariatur, veritatis ex commodi possimus doloremque labore iusto omnis, temporibus fugiat optio expedita non eligendi sapiente ducimus, et delectus. Repellendus asperiores fuga optio unde.</p>
				</section>
				<section className="Card">
					{/* {card} */}
				</section>
			</div>
		);
	}
}

export default App;
