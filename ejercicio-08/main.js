
/*
    Ejercicio #8
    Escriba un programa que muestre la tabla de multiplicar del 1 al 10 segun el numero ingresado
*/

function tablaMultiplicar (tabla) {
    for (let index = 0; index < 11; index++) {
        console.log(`${tabla} x ${index} = ${tabla * index}`)        
    }
}

tablaMultiplicar(5)
