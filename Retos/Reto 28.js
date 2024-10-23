/* Implementar la calculadora. Tenemos dos campos input de tipo number y cuatro botones +, -, *, /
Habrá un campo de tipo number donde, desde JS, mostraremos la solución. */

function calc(funcion){
    let numbers = document.getElementsByClassName("num");
    let number1 = Number(numbers[0].value);
    let number2 = Number(numbers[1].value);
    document.getElementById("resultado").value = funcion(number1,number2);
}

function suma(number1,number2){
    let suma = number1+number2;
    return suma;
}
function resta(number1,number2){
    let resta = number1-number2;
    return resta;
}
function multi(number1,number2){
    let multi = number1*number2;
    return multi;
}
function divi(number1,number2){
    let divi = number1/number2;
    return divi;
}