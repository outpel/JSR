import React, { Component } from 'react';
import axios from 'axios'
import Map from '../components/MapReg'
import "./css/Region.css"

export default class Region extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reg: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/regiones')
            .then(res => {
                const reg = res.data;
                this.setState({ reg });
            })
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {
        const { reg } = this.state
        const { match } = this.props
        const zoomR = 8
        const heightR = 500
        return (
            <>
                {reg.map(item => {
                    if (match.params.id === item.region_id) {
                        return (
                            <div key={item.region_id}>
                                <Map
                                    position={item.coordenadasR}
                                    zoom={zoomR}
                                    height={heightR}
                                    idParams={match.params.id}
                                />
                            </div>
                        )
                    }
                })}
            </>
        )
    }
}
