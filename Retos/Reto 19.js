/*
Crea una función muy sencilla que devuelve la palabra "par" si le enviamos un número par. En caso
contraría retorna la palabra "impar".
Escribe en una página web 100 números aleatorios del 1 al 10.000 y que a su lado se diga si es par o
impar gracias a la función anterior. 
*/
function isPar(number){
    if (number%2 == 0){
        document.write(" Par<br>");
    } else {
        document.write(" Impar<br>");
    }
}

for (let i=0; i<100;i++){
    let random_number= Math.floor((Math.random() * 10000) + 1);;
    document.write("Number:"+random_number);
    isPar(random_number);
}