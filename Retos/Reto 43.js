// Realiza un programa que tras introducir una matrícula y un correo electrónico verifique si tienen un formato correcto

let expresionMatricula = /^[0-9]{4}[A-Z]{3}$/
let expresionCorreo = /^[a-zA-Z]+@[a-zA-Z]+.[a-zA-Z]+$/

let continuar= true;
while (continuar){
    let matricula = prompt("Introduce una matrícula");
    let correo = prompt("Introduce un email");
    if (expresionMatricula.test(matricula) && expresionCorreo.test(correo)){
        document.write("Matrícula y correo correctos");
        continuar=false;
    } else {
        alert("Correo o matrícula incorrecto");
    }
}