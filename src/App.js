import React from 'react';
import './App.scss';
import simpleParallax from 'simple-parallax-js'

import img1 from '../src/img/dummy/i5.jpg'
import img2 from '../src/img/dummy/i4.jpg'

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
				<div className="MainPhoto">
					<picture>
						<source media="(min-width: 461px)" srcSet={img1} />
						<img src={img1} className="thumbnail" alt="..." />
					</picture>
				</div>
				<div className="ButtonsContainer">
					<div onClick={() => this.handleScroll('About')} className="ButtonsContainer__btnAbout btn">O nas</div>
					<div onClick={() => this.handleScroll('About')} className="ButtonsContainer__btnOffer btn">Oferta</div>
					<div onClick={() => this.handleScroll('About')} className="ButtonsContainer__btnCard btn">Karta drinków</div>
					<div onClick={() => this.handleScroll('About')} className="ButtonsContainer__btnGallery btn">Galeria</div>
					<div onClick={() => this.handleScroll('About')} className="ButtonsContainer__btnContact btn">Kontakt</div>
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
			</div>
		);
	}
}

export default App;
