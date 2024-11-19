// Valida el ingreso de una hora con el formato hh:mm:ss o hh:mm. Hora maxima: 23:59:59 o 23:59

let expresionRegular = /^([01][0-9]|2[0-3])(:[0-5][0-9]){1,2}$/;

let continuar = true;
while (continuar){
    let hora = prompt("Introduce una hora en formato hh:mm:ss o hh:mm");
    if (expresionRegular.test(hora)){
        document.write("Hora correcta");
        continuar=false;
    } else {
        alert("Hora incorrecta");
    }
}