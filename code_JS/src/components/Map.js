import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import icon from 'leaflet/dist/images/marker-icon.png';
import L from 'leaflet';

export default class Map extends Component {
    render() {

        let Icon = L.icon({
            iconUrl: icon,
            shadowUrl: iconShadow
        });

        const { zoom } = this.props
        const { popup } = this.props
        const { pos } = this.props

        return (
            <>
                <MapContainer
                    className="map"
                    center={pos}
                    zoom={zoom}
                    style={{ height: this.props.height }}
                >
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={pos} icon={Icon} >
                        <Popup>
                            {popup}
                        </Popup>
                    </Marker>
                </MapContainer>             
            </>
        );
    }
}