import React, { Component } from 'react';
import { MapContainer, TileLayer, LayersControl, LayerGroup} from 'react-leaflet';
import axios from 'axios'
import Markers from './Markers'

export default class MapReg extends Component {
    state = {
        prop: [],
        vent:[],
        arr: [],
        valor: 1
    }

    componentDidMount() {
        axios.get('http://localhost:3001/propiedades')
            .then(res => {
                const prop = res.data.filter(item => item.region.includes(this.props.idParams));
                const vent = prop.filter(item => item.category.includes(1));
                const arr = prop.filter(item => item.category.includes(2));
                this.setState({ prop, vent, arr });
            })
    }

    render() {

        const { position } = this.props
        const { zoom } = this.props

        return (
            <>
                <MapContainer
                    className="map"
                    center={position}
                    zoom={zoom}
                    style={{ height: this.props.height }}
                >

                    <LayersControl position="topright">

                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <LayersControl.BaseLayer checked name="Todo">
                            <LayerGroup>
                                <Markers list={this.state.prop}/>
                            </LayerGroup>
                        </LayersControl.BaseLayer>

                        <LayersControl.BaseLayer name="Ventas">
                            <LayerGroup>
                                <Markers list={this.state.vent} />
                            </LayerGroup>
                        </LayersControl.BaseLayer>

                        <LayersControl.BaseLayer name="Arriendos">
                            <LayerGroup>
                                <Markers list={this.state.arr} />
                            </LayerGroup>
                        </LayersControl.BaseLayer>

                    </LayersControl>
                </MapContainer>
            </>
        );
    }
}



