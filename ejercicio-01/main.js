/*
    Ejercicio #1 
    Crear una funcion que en base a la edad que ingreso el usuario devolver un mensaje si la persona es mayor de edad o no. Utilizar para la condicion el operador ternario. 
*/

function resultadoEdad (edad) {
    return edad >= 18 ? "El usuario es mayor de edad" : "El usuario es menor de edad";
}

console.log(resultadoEdad(19));