import React, { Component } from 'react';
import axios from 'axios'
import { Card, Paper, Grid } from '@material-ui/core';
import './css/Propiedad.css'
import FormContact from '../components/FormContact/FormContact'
import CarouselGalery from '../components/Galery/CarouselGalery'
import Bar from '../components/Bar'
import Pie from '../components/Pie'
import Map from '../components/Map'


export default class Propiedad extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            prop: [],
            info: [],
            imgP: [],
            coordenadasP: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3001/propiedades/" + this.state.id)
            .then(res => {
                const prop = res.data;
                const info = prop.info;
                const imgP = prop.galery
                const coordenadasP = prop.coordenadasP
                this.setState(
                    {
                        prop, info, imgP, coordenadasP
                    }
                )
            })
    }


    render() {
        const { prop } = this.state
        const { info } = this.state
        const { imgP } = this.state
        const { coordenadasP } = this.state

        const zoomP = 14
        const heightP = 300
        const prefijo = "PROPIEDAD"
        const text = "Consultar por la Propiedad"

        return (
            <>
                <Grid item xs={12}>
                    <Paper id="m" className='paper_prim'>
                        <h1 id="m1">{prop.tittle}</h1>
                        <h3 id="m2">{prop.direccion}</h3>
                        <h2 id="m3">{prop.price}</h2>
                    </Paper>
                </Grid>

                <Grid container>
                    <Card className='mainx1'>


                        <h1 className='paper_prim'>Información General</h1>

                        {coordenadasP.length !== 0 ? <Map
                            pos={this.state.coordenadasP}
                            zoom={zoomP}
                            height={heightP}
                            popup={prop.tittle}
                        />:<p>Cargando...</p> 
                        }
               

                        <div id="divinfo">
                            <li><span id="boldli">Tipo de propiedad: </span><span id="boldlip">{info.Tipo}</span></li>
                            <li><span id="boldli">Metros Cuadrados: </span><span id="boldlip">{info.m2}</span></li>
                            <li><span id="boldli">Precio por Metro Cuadrado : </span><span id="boldlip">${info.Precioxm2}</span></li>
                        </div>

                        <CarouselGalery galery={imgP} />

                        <div id = "pdiv">
                            <p id="pp">{prop.infoGeneral}</p>
                        </div>

                    </Card>

                    <Card className='mainx2'>
                        <h1 className='paper_prim'>Información adicional</h1>

                        <div id="BarP">
                            <Bar value={this.state.id} />
                        </div>
                        <div className="BarP">
                            <h1 id="centH">Composición de la Propiedad</h1>
                            <Pie value={this.state.id} />
                        </div>

                        <FormContact
                            asunto={prop.tittle}
                            pref={prefijo}
                            encabezado={text}
                        />
                    </Card>
                </Grid>
            </>
        )
    }
}
