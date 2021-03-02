import React, { Component } from 'react';
import axios from 'axios'
import { Pie } from 'react-chartjs-2';

export default class Servicios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            graf2: [],
            materiales: [],
            porcentajes: [],
            colores: ["#28b012", "#48f985", "#bfcf12", "#7c2c7b"],
        }
    }

    async componentDidMount() {
        axios.get("http://localhost:3001/propiedades/" + this.props.value)
            .then(res => {
                const prop = res.data;
                const graf2 = prop.graf2;
                this.setState({ graf2: graf2 })
                const materiales = [], porcentajes = [];

                this.state.graf2.map(item => {
                    materiales.push(item.material);
                    porcentajes.push(item.porcentaje);
                })

                this.setState(
                    {
                        materiales: materiales,
                        porcentajes: porcentajes
                    }
                )
            })
    }


    render() {
        const data = {
            datasets: [{
                data: this.state.porcentajes,
                backgroundColor: this.state.colores
            }],
            labels: this.state.materiales,
        };

        const opciones = {
            maintainAspectRatio: false,
            responsive: true
        }

        return (
            <>
                <div style={{ width: "100%", height: "380px" }}>
                    <Pie data={data} options={opciones} />
                </div>
            </>
        )
    }
}
