import React from 'react'
import Lista from '../components/List/ListProps'
import { Paper, Grid } from '@material-ui/core';

export default function Ventas() {
        const value = 2
        return (
            <>
                <Grid item xs={12}>
                    <Paper className='paper_prim'>
                        <h1>Propiedades en Arriendo </h1>
                    </Paper>
                </Grid>
                <Lista value={value}  />
            </>
        )  
}