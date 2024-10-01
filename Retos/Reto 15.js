/*Crear un programa que recibe una contraseña y tiene que decir si es correcta comprobando lo siguiente:  
 a. Lleva alguna mayúscula 
 b. Lleva alguna minúscula 
 c. Lleva algún numero 
 d. Tamaño sea mayor o igual que 8*/

let password = prompt("Introduce tu contraseña");

let mayus = false;
let minus = false;
let number = false;
let mayor = false;

let numbersMap = ["1","2","3","4","5","6","7","8","9","0"];

for (let i=0; i< password.length; i++){
    if (isNaN(password.charAt(i)) && password.charAt(i) == password.charAt(i).toUpperCase()){
        mayus = true;
    }
    if (isNaN(password.charAt(i)) && password.charAt(i) == password.charAt(i).toLowerCase()){
        minus = true;
    }
    if (numbersMap.includes(password.charAt(i))){
        number = true;
    }
}

if (password.length >= 8){
    mayor = true;
}

if (mayus && minus && number && mayor){
    document.write("Contraseña segura")
} else {
    document.write("Contraseña no segura<br>");
}

if (!mayus){
    document.write("Falta 1 mayúscula<br>");
}
if (!minus){
    document.write("Falta 1 minúscula<br>");
}
if (!number){
    document.write("Falta 1 número<br>");
}
if (!mayor){
    document.write("Debe ser mayor de 8 carácteres");
}
