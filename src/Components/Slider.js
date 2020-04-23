import React from 'react'
import './Slider.scss';
import Carousel from 'react-bootstrap/Carousel';

import img1 from '../img/1.jpg';
import img1s from '../img/1S.jpg';
import img2 from '../img/2.jpg';
import img2s from '../img/2S.jpg';
import img3 from '../img/3.jpg';
import img3s from '../img/3S.jpg';
import img4 from '../img/4.jpg';
import img4s from '../img/4S.jpg';
import img5 from '../img/5.jpg';
import img5s from '../img/5S.jpg';
import img6 from '../img/6.jpg';
import img6s from '../img/6S.jpg';

const Slider = () => {

    const imgSet1 = [
        { path: img1, pathS: img1s, },
        { path: img2, pathS: img2s, },
        { path: img3, pathS: img3s, },
        { path: img4, pathS: img4s, },
        { path: img5, pathS: img5s, },
        { path: img6, pathS: img6s, },
    ]

    const carouselItems1 = imgSet1.map(item => {
        return (
            <Carousel.Item key={item.path}>
                <picture>
                    <source media="(min-width: 461px)" srcSet={item.path} />
                    <img src={item.pathS} className="d-block w-100" alt="..." />
                </picture>
            </Carousel.Item>
        )
    })

    return (
        <div className="Slider">
            <Carousel controls={true} indicators={false} interval={4000}>
                {carouselItems1}
            </Carousel>
        </div>
    )
}

export default Slider
