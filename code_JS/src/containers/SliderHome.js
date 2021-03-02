import React, { Component } from 'react'
import axios from 'axios'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Cards from '../components/Cards/Cards'
import './SliderHome.css'


export default class Home extends Component {

    state = {
        prop: [],
    }

    componentDidMount() {
        axios.get('http://localhost:3001/propiedades')
            .then(res => {
                const prop = res.data.filter(item => item.category.includes(this.props.value));
                this.setState({ prop });
            })
    }
    render() {
        const val = "300"
        return (
            <>
                <Carousel className="carousel-fake" showThumbs={false}>
                    {this.state.prop.map((item) => {
                        return (
                            <div key={item.id} style={{ justifyContent: 'center' }}>                                
                                    <Cards
                                        idCard={item.id}
                                        val={val}
                                        imgBannerCard={item.imgBanner}
                                        tittleCard={item.tittle}
                                        priceCard={item.price}
                                    />                             
                            </div>
                        )
                    })}
                </Carousel>
            </>
        )
    }
}