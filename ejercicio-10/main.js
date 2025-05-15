/*
    Ejercicio #10 
    Se cuenta con la siguiente informacion: 

        - Las edades de 5 estudiantes del turno de la mañana
        - Las edades de 6 estudiantes del turno de la tarde 
        - las edade de 11 estudiantes del turno de la noche

    nota: las edades de cada estudiante se deberan ingresar por la web

    lo que queremos devolver es:

        - promedio de las edades de cada turno (tres promedios)
        - imprimir dichos promedios (promedio de cada turno)
        - mostrar por pantalla un msj que indique cual de los tres turnos tiene un promedio mayor de edades

*/

const edadesManiana = [20,20,15,12,14];
const edadesTarde = [15, 17, 16, 12, 17, 18];
const edadesNoche = [10,11,13,12,15,17,18,18,14,15,11];

function calcularPromedio(edades) {
    //ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
  const suma = edades.reduce((acumulador, edad) => acumulador + edad, 0);
  return suma / edades.length;
}

// Calcular promedios
const promManiana = calcularPromedio(edadesManiana);
const promTarde = calcularPromedio(edadesTarde);
const promNoche = calcularPromedio(edadesNoche);

// Mostrar promedios
console.log(`Promedio turno mañana: ${Math.floor(promManiana)}`);
console.log(`Promedio turno tarde: ${Math.floor(promTarde)}`);
console.log(`Promedio turno noche: ${Math.floor(promNoche)}`);

// Determinar cuál es mayor
let turnoMayor = "mañana";
let maxProm = promManiana;

if (promTarde > maxProm) {
  turnoMayor = "tarde";
  maxProm = promTarde;
}else if (promNoche > maxProm) {
    turnoMayor = "noche";
    maxProm = promNoche;
  }



console.log(`El turno con el promedio de edad más alto es: ${turnoMayor}`);
