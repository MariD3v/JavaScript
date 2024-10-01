/*Crea una aplicación web que pida continuamente números hasta que el usuario indique el número cero. 
Al final indicará la media de los números introducidos. 
• Si en algún momento no es un número lo que escribe el usuario, se le pide de nuevo. 
• Si cancela cualquier cuadro de lectura, el programa termina y se indica que el usuario ha cancelado y no se mostrará la media.*/

let number;
let contador = 0;
let cantidadNumbers = -1;

let myBool = true;
labelCancel:while(number != 0){
    number = prompt("Introduce un numero");
    if (number == null){
        document.write("Programa cancelado");
        myBool = false;
        break labelCancel;
    } else {
        number = Number(number);
        while(isNaN(number)){
            number = prompt("No has introducido un número, prueba otra vez");
            if (number == null){
                document.write("Programa cancelado");
                myBool = false;
                break labelCancel;
            } else {
                number = Number(number);
            }
        }    
        cantidadNumbers +=1;  
        contador += number;
    }
}

if (myBool){
    if (cantidadNumbers == 0){
        document.write("Has introducido 0 números");
    } else {
        document.write("Has introducido " + cantidadNumbers + " numeros y la media de todos es " + contador/cantidadNumbers);
    }
}
