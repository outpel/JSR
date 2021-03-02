import React from 'react'
import Footer from './footerConf'
import Icon from './icons'

export default function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>Nosotros</Footer.Title>
                    <Footer.Link href="#">Historia</Footer.Link>
                    <Footer.Link href="#">Clientes</Footer.Link>
                    <Footer.Link href="#">Nuestro Trabajo</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Servicios</Footer.Title>
                    <Footer.Link href="#">Arriendos</Footer.Link>
                    <Footer.Link href="#">Ventas</Footer.Link>
                    <Footer.Link href="#">Desarrollo</Footer.Link>
                    <Footer.Link href="#">Diseno</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contacto</Footer.Title>
                    <Footer.Link href="#">Osorno</Footer.Link>
                    <Footer.Link href="#">United Kingdom</Footer.Link>
                    <Footer.Link href="#">Australia</Footer.Link>
                    <Footer.Link href="#">Support</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                        <Footer.Link href="https://www.facebook.com/"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                        <Footer.Link href="https://www.instagram.com/"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                        <Footer.Link href="https://www.youtube.com/"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                        <Footer.Link href="https://www.twitter.com/"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}