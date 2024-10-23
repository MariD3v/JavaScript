/* Hacer un formulario con un campo de tipo number.
Habrá a su vez dos botones uno "Par" que mostrará mediante alert --> El número es PAR, en caso de no ser par no hará nada.
Y otro botón "Impar" que mostrará mediante alert --> El número es IMPAR, en caso de no ser impar no hará nada. */

function espar(){
    var number = document.getElementById("num").value;
    if (number%2 ==0){
        alert("El número es PAR");
    }
}

function esimpar(){
    var number = document.getElementById("num").value;
    if (number%2 !=0){
        alert("El número es IMPAR");
    }
}