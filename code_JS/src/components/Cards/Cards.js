import React, { Component} from 'react';
import { Link } from "react-router-dom";
import { Card, Paper, Button, CardContent, CardMedia, Typography } from '@material-ui/core';
import './Cards.css'


export default class Cards extends Component{
    render() {
        const { idCard } = this.props
        const { imgBannerCard } = this.props
        const { tittleCard } = this.props
        const { priceCard } = this.props
        const { smallContentCard } = this.props
        const cardStyle = {
            height: this.props.val + "px",
        };

        return (
            <>
                <Card className='main'>
                    <Paper className='paper_sec' style={cardStyle}>
                        <CardMedia
                            className='media'
                            image={imgBannerCard}
                            title="Imagen Descripcion"
                         />
                        <CardContent>
                            <Link to={"/propiedad/" + idCard} style={{ textDecoration: 'none', color: 'black'}}>
                                <Typography id="t" variant="h5" component="h2">
                                    {tittleCard}
                                </Typography>
                            </Link>
                            <Typography id="p" variant="h5" component="h3">
                                {priceCard}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {smallContentCard}
                            </Typography>
                        </CardContent>
                        <Link to={"/propiedad/" + idCard}>
                            <Button variant="contained" color="primary" >
                                Ver Propiedad
                            </Button>
                        </Link>
                     </Paper>                                   
               </Card>
            </>
        );
    }
}