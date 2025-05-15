/*
    Ejercicio #7
    Se realiza la carga de 10 valores enteros por teclado, se desea conocer:

        - la cantidad de valores negativos ingresados
        - La cantidad de valores positivos ingresados
        - La cantidad de multiplos de 15
        - El valor acumulado de los numeros ingresados que son pares
*/

const valores = [-1,-2,-3,4,5,6,15,7,8,20];

function procesoDeDatos (valores){
    let countPositivos = 0;
    let countNegativos = 0;

    let multiplos = 0;

    let acumuladoPar = 0;

    for (const iterator of valores) {

        // Math.sign, segun el parametro retorna -1, 1, 0 ó -0
        
        // negativos y positivos 
        if(Math.sign(iterator) === -1){
            countPositivos = countPositivos + 1;
        }else{
            countNegativos = countNegativos + 1;
        }//multiplos de 5
        if (iterator % 5 === 0){
            multiplos = multiplos + 1;
        }// numeros pares
        if( iterator % 2 === 0){
            acumuladoPar = acumuladoPar + (iterator)
        }

    }
    console.log(`la cantidad de positivos es de: ${countPositivos}\nla cantidad de negativos es de: ${countNegativos}\nla cantidad de multiplos de 5 es de: ${multiplos}\nEl valor acumulado de los datos pares es de: ${acumuladoPar}`)
}

procesoDeDatos(valores);
