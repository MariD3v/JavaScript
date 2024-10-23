/* Tenemos un campo en un input type text, un botón que llama a una función JS donde recogeremos ese campo y mostraremos 
en otro campo de tipo text ese texto invertido, es decir, escrito al reves
Ej: Hola amigos --> sogima aloH */

function alreves(){
    let texto = document.getElementById("entrada").value;
    let textoalreves = "";
    for (let i=texto.length-1; i>=0; i--){
        textoalreves += texto[i];
    }
    document.getElementById("salida").value = textoalreves;
}