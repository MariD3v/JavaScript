/*Crea una aplicación que dado un texto compuesto por una serie de palabras separadas por un espacio las introduzca en un array. 
Después las debe visualizar en pantalla de forma ordenada alfabéticamente. 
Tras la ordenación debe permitir realizar búsquedas de palabras hasta que pulsemos cancelar en la entrada (prompt).
Para cada palabra buscada indicará con un mensaje si existe o no.
Nota: Hacer uso de métodos para string como split() y hacer uso de los métodos sort() y filter() con funciones callback */

function textToWords(method){
    let text = prompt("Introduce un texto");
    text = text.toLowerCase();
    if (text != null && text!=""){
        let wordsArray = text.split(" ").sort((a,b) => a.localeCompare(b));
        document.write("Palabras ordenadas:")
        wordsArray.forEach(function(value){document.write(value+" ")});
        let word = prompt("Introduce una palabra");
        word = word.toLowerCase();
        while (word != null && word !=""){
            if (method(wordsArray,word)){
                document.write("<br>"+ word + ": Existe.");
            } else {
                document.write("<br>"+ word + ": NO existe.");
            }
            word = prompt("Introduce una palabra");
        }
    } else {
        document.write("Debes introducir un texto.");
    }
}

function exists(array, palabra){
    let arrayWords = array.filter(value=>value == palabra);
    if (arrayWords.length>0){
        return true;
    } else {
        return false;
    }
}

textToWords(exists);