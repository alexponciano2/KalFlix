import "./carousel.css"
import React, { Component } from "react";
import Slider from "react-slick";


function Carousel({ children }) {
    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div>
            <Slider {...settings}>
                { children }
            </Slider>
        </div>
    );
}

export default Carousel;