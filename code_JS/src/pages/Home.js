import React from 'react'
import './css/Home.css'
import { Grid, Card} from '@material-ui/core'
import RegionesChile from '../containers/ContainerHome'
import Slider from '../containers/SliderHome'

export default function Home(){
        const ven = 1
        const arr = 2
        return (
            <>
                <Grid container>
                    <Card className='main1'>
                        <h1 className='paper_prim'>Propiedades por Regiones</h1>
                        <RegionesChile />
                    </Card>
     
                    <Card className='main2' >
                        <Grid container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justify="center"
                            style={{ minHeight: '100vh' }} >

                            <h2 className='paper_prim'>Propiedades destacadas en Venta</h2>
                            <Slider value={ven} />
                            <h2 className='paper_prim'>Propiedades destacadas en Arriendo</h2>
                            <Slider value={arr} />
                        </Grid>
                    </Card>
                </Grid>
            </>
        )
}