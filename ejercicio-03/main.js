/*
    Ejercicio #3
    Calcular el aumento del trabajador tomando en cuenta la tabla de categorias de aumento. 
    Para este ejercicio debera de asignar las siguientes variables: nombre, salario, categoria y aumento. Debera mostrar los datos del empleado y el aumento salarial

        categoria       aumento 
         A               15%
         B               30%
         C               10%
         D               20%
         
*/

const nombre = "José"
let salario = 600;

function aumentoAsignar(nombre, salario, categoria) {
    let aumento;

    let nuevoSalario;
    let montoAumento;

    switch (categoria) {
        case 'A':
            aumento = 0.15;
            nuevoSalario = salario + ( salario * aumento );
            montoAumento = "15%";
            break;

        case 'B':
            aumento = 0.30;
            nuevoSalario = salario + ( salario * aumento );
            montoAumento = "30%";
            break;

        case 'C':
            aumento = 0.10;
            nuevoSalario = salario + ( salario * aumento );
            montoAumento = "10%";
            break;

        case 'D':
            aumento = 0.20;
            nuevoSalario = salario + ( salario * aumento );
            montoAumento = "20%";
            break;
    
        default:
            "No hay ningun aumento para el usuario"
            break;
    }

    return `${nombre}, recibira un aumento del ${montoAumento}, su nuevo salario sera de $:${nuevoSalario}`
}

console.log(aumentoAsignar(nombre, salario, "B"))
