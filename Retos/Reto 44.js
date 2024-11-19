/* Realiza un programa que valide la introducción de un nombre del día de la semana tanto en mayúsculas como minúsculas 
o un número del 0-6.*/

let expresionDia = /^(lunes|martes|miércoles|jueves|viernes|sabado|domingo|[0-6]{1})$/i

let continuar= true;
while (continuar){
    let dia = prompt("Introduce un dia de la semana o un numero de 0 al 6");
    if (expresionDia.test(dia)){
        document.write("Dia correcto");
        continuar=false;
    } else {
        alert("Dia incorrecto");
    }
}