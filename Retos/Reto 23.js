/*
Crea una función que reciba un array de palabras.
• La función devolverá un mapa que contenga como clave cada palabra y el valor es el número de
veces que esa palabra aparece en el array.
• Haremos una página web que lea palabras hasta que el usuario cancele o deje el cuadro vacío y
mostraremos las repeticiones de las palabras.
*/

function arrayToMap(array){
    const palabraArray = [];

    let palabra = "a";
    while (palabra!="" && palabra!=null){
        palabra = prompt("Introduce una palabra");
        if (palabra!="" && palabra!=null){
            palabraArray.push(palabra);
        }
    }

    const mapa = new Map();
    for(const palabra of palabraArray){
        if (mapa.has(palabra)){
            mapa.set(palabra, mapa.get(palabra)+1);
        } else {
            mapa.set(palabra, 1);
        }
    }
    for (let[clave,valor] of mapa){
        document.write(clave + ": " + valor + "<br>");
    }
}

arrayToMap();