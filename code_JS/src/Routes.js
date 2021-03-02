import React from 'react';
import Navbar from "./components/NavBar/Navbar";
import FooterContainer from './components/Footer/FooterApp'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Arriendos from './pages/Arriendos';
import Ventas from './pages/Ventas';
import Contacto from './pages/Contacto';
import Servicios from './pages/Servicios';
import Propiedad from './pages/Propiedad';
import Region from './pages/Region';
import { CssBaseline, Container } from '@material-ui/core';


const containerStyle = {
    marginBottom: '30px',
    marginTop: '20px',
};


export default function Routes() {
        return (
            <>
                <Router>
                    <Navbar />
                    <Switch >
                        <React.Fragment>
                            <CssBaseline />
                            <Container fixed style={containerStyle}>
                                <Route path='/' exact component={Home} />
                                <Route path='/arriendos' exact component={Arriendos} />
                                <Route path='/ventas' exact component={Ventas} />
                                <Route path='/servicios' exact component={Servicios} />
                                <Route path='/contacto' exact component={Contacto} />
                                <Route path="/propiedad/:id" exact component={Propiedad} />
                                <Route path="/region/:id" exact component={Region} />
                            </Container>
                        </React.Fragment>
                    </Switch>
                    <FooterContainer />
                </Router>
            </>
        )
}
