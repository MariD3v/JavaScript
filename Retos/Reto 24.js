/*Haciendo uso de funciones, crea una aplicación que pida al usuario palabras continuamente hasta que se acepte el cuadro sin texto o se cancele. 
Se eliminarán las palabras repetidas y además se ordenarán en español, pero en orden inverso (de la Z a la A).*/

function noRepSort(){
    let word= "a";
    let mySet = new Set();
    while (word!="" && word!=null){
        word=prompt("Introduce palabras");
        if (word!="" && word!=null){
            mySet.add(word);
        }
    }

    myarray = new Array(...mySet);

    myarray.sort((a,b) => a.localeCompare(b));
    myarray.reverse();

    myarray.forEach(function(valor){document.write(valor + "<br>")}) 
}

noRepSort();