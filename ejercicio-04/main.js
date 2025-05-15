/*
    Ejercicio #4
    Crear una funcion que en base a 2 numeros enteros que ingrese el usuario, calcule cual es el mayor de ellos y que se devuelva ese valor
*/


function mayorOmenor (numero1, numero2) {

    if(numero1 > numero2){
        return `El ${numero1} es mayor`;
    }else{
        return `El ${numero2} es mayor`;
    }

}

console.log(mayorOmenor(21, 20));
