/*
    Ejercicio #2 
    Crear una funcion que determine la nota final de un alumno, la cual depende de lo siguiente 
        - Examen = 20%
        - Tareas = 40%
        - Asistencia = 10%
        - Investigacion = 30%
    
    Al final debera mostra los datos del alumno, nombre carnet y nota final
*/

function resultadoEstudiante (nombre, carnet, notaExamen, notaTareas, notaAsistencia, notaInvestigacion) {
    const porcentajeExamen = notaExamen * 0.20;
    const porcentajeTareas = notaTareas * 0.40;
    const porcentajeAsistencia = notaAsistencia * 0.10;
    const porcentajeInvestigacion = notaInvestigacion * 0.30;

    const notaFinal = (porcentajeExamen + porcentajeTareas + porcentajeAsistencia + porcentajeInvestigacion);
    
    return `la nota final del estudiante ${nombre}, con carnet ${carnet} es: ${notaFinal}`

}

console.log(resultadoEstudiante("samuel", "AA1234", 7, 7, 8, 8.5));