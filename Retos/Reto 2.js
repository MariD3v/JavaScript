/*
Realizar un programa que calcule un salario teniendo en cuenta lo siguiente:
Debe pedir en cuadros de lectura de datos: el nombre, los apellidos, el salario (número con decimales) y la edad de una persona (un número)
• Supondremos que el usuario escribe los datos correctamente (no los validaremos)
• Se mostrará el nombre y apellidos escritos, la edad y el salario (una vez recalculado con lo que indican los puntos siguientes).
• Si el salario es mayor de 2000 euros, no cambiará
• Si el salario está entre 1000 y 2000:
    - Si además la edad es mayor de 45 años, se sube un 3%
    - Si la edad es menor de 45 o igual, se sube un 10%
• Si el salario indicado es menor de 1000
    - Los menores de 30 años cobrarán exactamente 1100 euros
    - Si la edad es de 30 a 45 años, el salario sube un 3%
    - A los mayores de 45 años, sube un 15%
*/
let nombre = prompt("Ingresa tu nombre");
let apellidos = prompt("Ingresa tus apellidos");
let salario = parseInt(prompt("Ingresa tu salario"));
let edad = prompt("Ingresa tu edad");

if (1000 < salario < 2000){
    if (edad > 45){
        salario += salario*0.03;
    } else {
        salario += salario*0.10;
    }
} else if (salario < 1000){
    if (edad < 30){
        salario == 1100;
    } else if (30 < edad < 45){
        salario += salario*0.03;
    } else {
        salario += salario*0.15;
    }
}

alert(`${nombre} ${apellidos} con edad ${edad}, tu salario es ${salario}`);