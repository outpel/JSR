import React, { Component } from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Cards from '../Cards/Cards'
import { Grid } from '@material-ui/core';
import './ListProps.css'

export default class ListProp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inactivaProp: 0,
            datosProp: [],
            orgdatosProp: [],
            cantidadPP: 6,
            paginaInicial: 0
        }
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    handlePageClick = (e) => {
        const paginaSelect = e.selected;
        const inactivaProp = paginaSelect * this.state.cantidadPP;
        this.setState({
            paginaInicial: paginaSelect,
            inactivaProp: inactivaProp
        }, () => {
            this.siguientesProp()
        });
    };

    siguientesProp() {
        const data = this.state.orgdatosProp;
        const rango = data.slice(this.state.inactivaProp, this.state.inactivaProp + this.state.cantidadPP)
        this.setState({
            pageCount: Math.ceil(data.length / this.state.cantidadPP),
            datosProp: rango
        })
    }

    componentDidMount() {
        this.getProp();
    }

    getProp() {
        axios.get(`http://localhost:3001/propiedades`)
            .then(res => {
                const prop = res.data.filter(item => item.category.includes(this.props.value));
                const rango = prop.slice(this.state.inactivaProp, this.state.inactivaProp + this.state.cantidadPP)

                this.setState({
                    pageCount: Math.ceil(prop.length / this.state.cantidadPP),
                    orgdatosProp: prop,
                    datosProp: rango
                })
            });
    }

    render() {

        const val = "405"

        return (
            <>
                <Grid container>
                    {this.state.datosProp.map((item) => {
                            return (
                                <div key={item.id}>
                                    <Cards
                                        idCard={item.id}
                                        val={val}
                                        imgBannerCard={item.imgBanner}
                                        tittleCard={item.tittle}
                                        priceCard={item.price}
                                        smallContentCard={item.smallContent}
                                    />
                                </div>
                            )
                    })}
                </Grid>

                <ReactPaginate
                    previousLabel={"Anterior"}
                    nextLabel={"Siguiente"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />

            </>
        )
    }
}