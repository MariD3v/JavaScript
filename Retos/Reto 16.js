/*
Haciendo uso de la estructura de datos map, queremos realizar una aplicación que nos
permita comprobar hasta qué punto la función Math.random es realmente aleatoria.
 Para ello, calcularemos 10.000 veces números aleatorios del 1 al 10.
 Mostraremos en una página web la frecuencia con la que ha salido cada número.
Ejemplo de resultado:
Frecuencias
Número 1 1016
Número 2 1019
Número 3 1059
Número 4 992
Número 5 995
Número 6 995
Número 7 969
Número 8 977
Número 9 1003
Número 10: 993
*/

let numberMap = new Map([[1, 0],[2, 0],[3, 0],[4, 0],[5, 0],[6, 0],[7, 0],[8, 0],[9, 0],[10, 0]]);
for (let i=0; i<10000; i++){
    let randomNumber = Math.floor((Math.random() * 10) + 1);
    numberMap.set(randomNumber, (numberMap.get(randomNumber)+1));
}

document.write("Frecuencias:<br>");
for (let[clave,valor] of numberMap){ 
    document.write("Number " + clave + ": " + valor +"<br>");
}
