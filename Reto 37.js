/*
Realiza un programa en JavaScript que realice el cálculo de un pedido de un carrito de compra. 
Tendremos  almacenado en un array  el pedido donde para cada línea del pedido encontramos en el siguiente orden: 
Código artículo (CODART), Cantidad, Precio, Porcentaje de descuento (DTO), Tipo Iva (TIVA).  
Tenemos una estructura tipo Map que contiene para cada código de artículo su descripción y en otro 
Map tendremos los tipos de Iva con su porcentaje. El programa debe disponer de las siguientes funciones: 
- Función que se le pase el array inicial y muestre el pedido en pantalla. - Función que se le pase el array inicial y 
calcule el total de iva, el total de descuento y total de factura. 
- Tendremos una función que le pasemos el mapa de artículos y un código de artículo. 
La función devolverá la descripción del artículo. 
- Tendremos una función que le pasemos el mapa de tipos de iva y un tipo de iva y devolverá el porcentaje correspondiente. 
- Una función callback que le pasemos un mapa y un código y nos devuelva la descripción del artículo o el porcentaje de iva. 
- Función que calcule el resumen de iva y lo muestre 
Array pedido = [[A1, 2, 25,0,1],[ A4, 1 , 12.5, 5, 2],[ A3, 5, 2.5,0,3],[A2, 3, 6.5, 2, 1]] 
Mapa artículos = {(“A1”,”Artículo 1”), (“A2”,”Artículo 2”), (“A3”,”Artículo 3”), (“A4”,”Artículo 4”) 
Mapa Iva = {(1,21),(2,10),(3,4), (0,0)}
*/
var mapArticulos = new Map([["A1","Artículo 1"], ["A2","Artículo 2"], ["A3","Artículo 3"], ["A4","Artículo 4"]]);
var mapIva = new Map([[1,21],[2,10],[3,4], [0,0]]);

function imprimirPedido(array){
    document.write("<p>PEDIDO:</p> <table border = \"1\"> <tr> <th>Artículo</th><th>Cantidad</th><th>Precio</th><th>%DTO</th><th>%IVA</th><th>Importe</th> </tr>");
    
    for (let i=0; i< array.length;i++){
        array[i][0] = array[i][0] +" "+ calcularArticulo(array[i][0]);
        array[i][4] = calcularIVA(array[i][4]);
        array[i][5] = array[i][1]*array[i][2];
        document.write("<tr>");
        for(let j=0; j<6;j++){
            document.write("<td>" +array[i][j]+ "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
    document.write("<br><table border= \"1\"> <tr><th>Base imponible</th><th>Descuento</th><th>IVA</th><th>Total</th></tr><tr>");
    let baseImponible = calcularTotales(array,0);
    let descuentos = calcularTotales(array,1);
    let ivas = calcularTotales(array,2);
    let total = baseImponible - descuentos + ivas;
    document.write("<th>"+ baseImponible+"</th><th>"+ descuentos+"</th><th>"+ ivas+"</th><th>"+ total+"</th></tr></table>");
}; 

function calcularTotales(array,codigo){
    let contador = 0;
    if(codigo==0){
        for (let p=0; p<array.length;p++){
            contador += array[p][5];
        }
        return(contador);
    } else if (codigo==1){
        for (let p=0; p<array.length;p++){
            if (array[p][3]!=0){
                contador += (array[p][5]*array[p][3])/100;
            }
        }
        return contador;    
    } else if (codigo==2){
        for (let p=0; p<array.length;p++){
            if (array[p][4]!=0){
                contador += (array[p][5]*array[p][4])/100;
            }
        }
        return contador; 
    } 
};

function calcularIVA (codigoIva){
    if (mapIva.has(codigoIva)){
        return mapIva.get(codigoIva);
    } else {
        return "IVA incorrecto";
    }
};

function calcularArticulo (codigoArticulo){
    if (mapArticulos.has(codigoArticulo)){
        return mapArticulos.get(codigoArticulo);
    } else {
        return "Articulo no encontrado";
    }
};

function mostrar(action, codigo){
    document.write(action(codigo)+ "<br>");
};

function resumenIVA (array){
    let vecesIVA = new Map([[0,0],[4,0],[10,0],[21,0]]);
    let calculoIVA = new Map([[0,0],[4,0],[10,0],[21,0]]);

    for (let p=0; p<array.length;p++){
        vecesIVA.set(array[p][4],vecesIVA.get(array[p][4])+1)
    }
    document.write("<p>RESUMEN IVA:</p><table border=\"1\"><tr><th>TIPO</th><th>IMPORTE</th></tr><tr><td>");

    for (let[clave,valor] of vecesIVA){
        document.write("("+clave + "%)   " +valor + "<br>");
    }
    document.write("</td><td>");
    for (let p=0; p<array.length;p++){
        let calculo = (array[p][5]*array[p][4])/100;
        calculoIVA.set(array[p][4],calculoIVA.get(array[p][4])+calculo);
    }
    for (let[clave,valor] of calculoIVA){
        document.write(valor + "<br>");
    }
    document.write("</td></tr></table>");
}

let arrayPedido = [["A1", 2, 25,0,1],["A4", 1 , 12.5, 5, 2],["A3", 5, 2.5,0,3],["A2", 3, 6.5, 2, 1]];
imprimirPedido(arrayPedido);

//RESUMEN IVA

resumenIVA(arrayPedido);


document.write("<br><p>USO DE LA FUNCION CALLBACK:</p>")
mostrar(calcularIVA,1);
mostrar(calcularIVA,7); //IVA erroneo
mostrar(calcularArticulo,"A3");
mostrar(calcularArticulo,"A0"); //Articulo erroneo