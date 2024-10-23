/*Crea una función a la que se le pasen una serie de palabras (mínimo dos) y detecte si son anagramas o no. 
Un anagrama es una palabra que resulta de trasponer las letras de otra: por ejemplo ESTANCO y ACENTOS. 
La función devuelve verdadero si todas las palabras pasadas son anagramas de las mismas letras. */

function anagram(...words){
    if (words.length < 2){
        document.write("Debes introducir al menos 2 palabras.<br>")
    } else {
        let wordsOrderArray = [];
        for (const word of words){
            let wordSplitOrder= word.toLowerCase().split("");
            wordSplitOrder= wordSplitOrder.sort((a,b) => a.localeCompare(b));
            let wordJoin= wordSplitOrder.join("");
            wordsOrderArray.push(wordJoin);
        }
        let wordsOrderSet = new Set(wordsOrderArray);
        if (wordsOrderSet.size > 1){
            document.write("No son anagramas<br>");
        } else {
            document.write("Son anagramas<br>");
        }
    }
}

anagram("mari","holita","miguel");
anagram("mari","Imar");
anagram("mari","Imar","maiR");
anagram("mari");