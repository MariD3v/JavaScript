/*
Crea una función para calcular la media de los números enviados a la función de tal manera que el
número de parámetros sea variable. Es decir: media(x1,x2) calcula (x1+x2)/2 y si invocamos a la
función como media(x1,x2,x3,…xn) calculará (x1+x2+x3+..+xn)/n
*/

function calcMedia(...parametros){
    if (parametros.length>0){
        let suma = 0;

        for(let i=0;i<parametros.length;i++){
            suma+= parametros[i];
        }
        let media = suma/parametros.length;
        return "Media: "+media+"<br>";
    } else {
        return "No has introducido valores<br>";
    }
}

document.write(calcMedia(2,3,5));
document.write(calcMedia(10,20));
document.write(calcMedia());
document.write(calcMedia(10,20,10,20));
document.write(calcMedia(10));