import React from 'react';
import MapContact from "../components/Map";
import FormContact from "../components/FormContact/FormContact";

const posC = [-40.5725, -73.1353]
const zoomC = 15
const popupC = "Corretajes Bull"
const heightC = 300
const contact = "SERVICIOS"
const asuntC = "Consulta"
const textC = "Consulta por Nuestros Servicios"

const position = [-40.5725, -73.1353]

export default function Contacto() {
        return (
            <>
                <MapContact
                    pos={position}
                    zoom={zoomC}
                    popup={popupC}
                    height={heightC}
                />
                <FormContact
                    pref={contact}
                    asunto={asuntC}
                    encabezado={textC}
                />
            </>
        )
}
