import React, { Component, Fragment } from 'react'
import { Card, Paper, Grid } from '@material-ui/core';
import './css/Servicios.css'

export default class Servicios extends Component {
    render() {
        return (
            <div className="root">
                <Grid item xs={12}>
                    <Paper className="it1"><h1>Nuestros Servicios</h1></Paper>
                </Grid>
                <Grid container>
    
                        <Card className="mains"><img src="http://localhost/assets/Servicios1.png" alt="Fake"/></Card>
                        <Card className="mains"><img src="http://localhost/assets/Servicios2.png" alt="Fake" /></Card>
                        <Card className="mains"><img src="http://localhost/assets/Servicios3.png" alt="Fake" /></Card>
                </Grid>
            </div>
        )
    }
}