/* Solicita el ingreso de la coordenada de un punto hasta que sea correcta. El formato a ingresar por teclado es (999,999). 
Los números pueden tener entre 1 y 3 dígitos.*/

let expresionRegular = /^[0-9]{1,3},[0-9]{1,3}$/;

let continuar = true;
while (continuar){
    let coordenada = prompt("Introduce una coordenada");
    if (expresionRegular.test(coordenada)){
        document.write("Coordenada correcta");
        continuar=false;
    } else {
        alert("Coordenada incorrecta");
    }
}