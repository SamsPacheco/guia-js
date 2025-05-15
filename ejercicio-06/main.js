/*
    Ejercicio #6
    Crear una funcion para calcular el descuento en viajes turisticos tomando en cuenta lo siguuiente: 

    Si el usuario introduce como origen "la Ciudad de Palma" y como destino "la costa del sol", el descuento sera del 5%, si el destino es "panchimalco" el descuento sera el "10%" y si el destino es "puerto el triunfo" el descuento sera del "15%"
*/

function viaje (origen, destino) {
    const precioViaje = 450;
    let descuento;
    let viajeConDescuento;

    if( origen === 'Ciudad de Palma'){
        if(destino === 'Costa del Sol'){
            descuento = 0.05;
            viajeConDescuento = precioViaje - (precioViaje * descuento);
        }else if ( destino === 'Panchimalco'){
            descuento = 0.10;
            viajeConDescuento = precioViaje - (precioViaje * descuento);
        }else if (destino === 'Puerto el triunfo'){
            descuento = 0.15;
            viajeConDescuento = precioViaje - (precioViaje * descuento);
        }
    }else{
            return 'no cumple con las opciones disponibles'
    }
   
    return  `El viaje de origen ${origen} con destino a ${destino}, es de $${viajeConDescuento}`

}

console.log(viaje("Ciudad de Palma", "Puerto el triunfo"));
