import React, { Component } from 'react';
import { Marker, Popup} from 'react-leaflet';
import L from 'leaflet';
import { Link } from "react-router-dom";
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import icon from 'leaflet/dist/images/marker-icon.png';


let Icon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

const popupStyle = {
    fontSize: "14px",
    fontWeight: "bold"
};


export default class Markers extends Component {
    render() {
        return (
            <>
                {this.props.list.map((item) => {
                        return (
                            <Marker key={item.id} position={item.coordenadasP} icon={Icon} >
                                <Popup>
                                    <div style={popupStyle}>{item.tittle}</div>
                                    <li>{item.price}</li>
                                    <Link to={"/propiedad/" + item.id}>
                                        <li>Ir a la Propiedad</li>
                                    </Link>
                                </Popup>
                            </Marker>
                        )
                    })
                }
            </>
            )     
    }
}