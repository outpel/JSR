import { Component } from 'react'
import React from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";
import './ContainerHome.css'
import { Tooltip} from '@material-ui/core';


export default class Home extends Component {
    state = {
        reg: []
    }

    componentDidMount() {
        axios.get('http://localhost:3001/regiones')
            .then(res => {
                const reg = res.data;
                this.setState({ reg });
            })
    }

    render() {
        return (
            <>
                {this.state.reg.map((item) => {
                    return (
                        <div key={item.region_id} >
                            <Link to={"/region/" + item.region_id} >
                                <Tooltip title={item.region} interactive>
                                    <img
                                        className='regionesChile'
                                        style={item.css}
                                        src={item.img}
                                        alt={item.region}
                                    />
                                </Tooltip>
                            </Link>
                        </div>
                     )
                })}
            </>
        )
    }
}