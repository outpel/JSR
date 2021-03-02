import emailjs from "emailjs-com";
import React, { Component } from 'react';
import "./FormContact.css"

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_9w4onv5', 'template_3gy54ig', e.target, 'user_NprwZ3CIQSY9oF10i3uGX')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    e.target.reset()
}


export default class FormContacto extends Component{
    render() {
        const { encabezado } = this.props

        return (
            <div>
                <div className="formulario">
                    <form onSubmit={sendEmail}>
                        <h1 id="h1">{encabezado}</h1>
                        <div>
                            <div>
                                <input id="inputF" required type="text" placeholder="Nombre y Apellido" name="name" />
                            </div>
                            <div>
                                <input id="inputF" required type="email" placeholder="Correo" name="email" />
                            </div>
                            <div>
                                <input id="inputF" type="text" placeholder="Telefono" name="number" />
                            </div>
                            <div>
                                <input id="inputF" type="hidden" name="subjet" defaultValue={"[" + this.props.pref+"] "  + this.props.asunto}/>
                            </div>
                            <div>
                                <textarea required id="" cols="30" rows="5" placeholder="Mensaje" name="message"></textarea>
                            </div>
                            <div >
                                <input id="submit" type="submit"  value="Enviar"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}