/*
    Ejercicio #5
    Realizar una funcion para una tienda de coches en donde se debera calcular: 
        - si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra
        - si el coche a la venta es un FORD FOCUS, el descuento sera de 10% en la compra 
        - si es un FORD ESCAPE, el descuento sera del 20%. Mostrar en HTML el coche seleccionado y el descuento que se aplicara en base a lo que selecciono el cliente
*/
function calcularDescuento(coche) {
    let descuento = 0;
  
    switch (coche.toUpperCase()) {
      case 'FORD FIESTA':
        descuento = 5;
        break;
      case 'FORD FOCUS':
        descuento = 10;
        break;
      case 'FORD ESCAPE':
        descuento = 20;
        break;
      default:
        descuento = 0;
    }
  
    console.log(`Coche seleccionado: ${coche}`);
    console.log(`Descuento aplicado: ${descuento}%`);
  }
  
  // Ejemplos de uso
  calcularDescuento('FORD FIESTA');  // 5%
  
  