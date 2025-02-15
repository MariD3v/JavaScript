
let listaProductos = new Set();
let listaProductosA = []

function añadirProducto(){
    let producto = document.getElementById("producto").value
    if(localStorage.getItem("Productos")){
        prepararProducto()
        listaProductos = new Set([...listaProductosA])
    }
    listaProductos.add(producto);
    let array = ordenarSet(listaProductos) 
    mostrarProducto(array)
}

function prepararProducto(){
    if(localStorage.getItem("Productos")){
        listaProductosA = JSON.parse(localStorage.getItem("Productos"))
        mostrarProducto(listaProductosA)
    }
}

function mostrarProducto(array){
    let listaHTML = document.getElementById("lista")
    listaHTML.innerHTML = "";
   
    array.forEach(function(valor){
        listaHTML.innerHTML += `<li>${valor}<button class="borrar">Borrar</button></li>`
        borrarProducto()
    })
    localStorage.setItem("Productos",JSON.stringify(array))
}

function borrarProducto(){
    listaProductos = JSON.parse(localStorage.getItem("Productos"))
    let botones = document.getElementsByClassName("borrar");
    for (let i=0; i<botones.length;i++){
        botones[i].addEventListener("click",function(ev){
            listaProductos.splice(i,1)
            localStorage.setItem("Productos",JSON.stringify(listaProductos))
            location.reload()
        })
    }
    
}

function ordenarSet(set){
    let array = []
    for (let element of set){
        array.push(element)
    }
    array.sort((a,b) => a.localeCompare(b));
    return array;
}

export{ 
    añadirProducto,
    prepararProducto
} 

