import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './CarouselGalery.css'

export default class CarouselGalery extends Component {
    render() {
        return (
            <>
                <Carousel style={{ width: "100%" }} showThumbs={false}>
                    {this.props.galery.map((item, idx) => {
                        return (
                            <div key={idx}>
                                <img src={item} alt="Propiedad"/>
                            </div>
                        )
                    })}
                </Carousel>
            </>
        )
    }

}
