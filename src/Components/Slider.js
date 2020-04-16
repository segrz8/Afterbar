import React from 'react'
import './Slider.scss';
import Carousel from 'react-bootstrap/Carousel';

import img1 from '../img/1.jpg';
import img1s from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img2s from '../img/2.jpg';

const Slider = () => {

    const imgSet1 = [
        { path: img1, pathS: img1s, },
        { path: img2, pathS: img2s, },
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
