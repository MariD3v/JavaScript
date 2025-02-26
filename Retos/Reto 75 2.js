/*En el ejercicio anterior, con sessionStorage agrega tu nombre nada más entrar a tu página y por cada usuario que se agrege
introduce su nombre en localStorage. Imprime todos los usuarios registrados desde localStorage indicando tu nombre */

function guardarDueño(){
    sessionStorage.setItem("Nombre","Mari")
}

function guardarUsuario(objeto){
    localStorage.setItem(objeto.id,objeto.name)
}

function imprimirUsuarios(){
    let contenedor = document.getElementById("container");
    let dueño = sessionStorage.getItem("Nombre")
    let cont = 0
    
    contenedor.innerHTML = "";
    contenedor.innerHTML += `<h1>USUARIOS REGISTRADOS POR: ${dueño}</h1>`
    for (let element in localStorage){
        if(!isNaN(element)){
            cont++;
            contenedor.innerHTML += `<p>${localStorage.getItem(element)}</p>`
        }
    }
    contenedor.innerHTML += `Numero de usuarios registrados: ${cont}`
}

export{
    guardarDueño,
    guardarUsuario,
    imprimirUsuarios
}