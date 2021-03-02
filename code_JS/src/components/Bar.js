import React, { Component } from 'react';
import axios from 'axios'
import { Bar } from 'react-chartjs-2';

export default class GrafBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tipo:'',
            graf1: [],
            anio: [],
            cantidad: [],
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3001/propiedades/" + this.props.value)
            .then(res => {
                const prop = res.data;
                const tipo = prop.graf1Content;
                const graf1 = prop.graf1;
                this.setState({ graf1: graf1, tipo:tipo })
                const anio = [], cantidad = [];

                this.state.graf1.map(item => {
                    anio.push(item.anio);
                    cantidad.push(item.cantidad);
                })

                this.setState(
                    {
                        anio: anio,
                        cantidad: cantidad
                    }
                )
            })
    }

    render() {
        const data = {
            datasets: [{
                label: this.state.tipo,
                backgroundColor: 'rgba(0,255,0,1)',
                borderColor: 'black',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(0,255,0,0.2)',
                hoverBorderColor: '#FF0000',
                data: this.state.cantidad

            }],
            labels: this.state.anio
        };


        const opciones = {
            maintainAspectRatio: false,
            responsive: true
        }
        return (
            <>
                <div style={{ width: "100%", height: "300px" }}>
                    <Bar data={data} options={opciones} />
                </div>
            </>
        )
    }
}
