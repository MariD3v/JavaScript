/* Realizar un programa que permita validar NIFs haciendo uso de expresiones regulares. Debe indicar si un NIF es correcto o no.
• Un NIF consta de una posible primera letra que puede ser una X, una Y o una Z. Puede no haber letra y entonces habrá un número.
• Después habrá siete números más.
• Finalmente habrá una letra que cumple una fórmula.
• La fórmula de la letra consiste en dividir los números del N1F entre 23 y tomar el resto.
Cuando la primera cifra es una X, se cambia por el número 0 para hacer este cálculo. 
La Y secambia por el número 1 y la Z por el número 2. El resto obtenido se comprueba en esta serie: 
0=T, 1=R ,2=W ,3=A ,4=G ,5=M ,6=Y ,7=F ,8=P ,9=D ,10=X ,11=B ,12=N ,13=J ,14=Z ,15=S ,16=Q ,17=V ,18=H ,19=L ,20=C ,21=K ,22=E */

let arrayLetras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
let expresionNIF = /^([XYZ])|([0-9])([0-9]{7})([A-Z])$/i

let continuar= true;
while (continuar){
    let nif = prompt("Introduce un tu nif");
    let resultadon;
    if (expresionNIF.test(nif)){
        let resultado = expresionNIF.exec(nif);
        if (resultado[1]==undefined){
            resultadon = resultado[2]+resultado[3];
        } else {
            if (resultado[1] == "X"){
                resultadon = "0"+resultado[3];
            } else if (resultado[1] == "Y"){
                resultadon = "1"+resultado[3];
            } else if (resultado[1] == "Z"){
                resultadon = "2"+resultado[3];
            } else {
                document.write("Primera letra incorrecta");
            }
        }
        resultadon = Number(resultadon)%23;
        if(resultado[4].toUpperCase() == arrayLetras[resultadon]){
            document.write("Nif correcto");
        } else {
            document.write("Nif incorrecto");
        }
        continuar=false;
    } else {
        alert("Formato de Nif incorrecto");
    }
}