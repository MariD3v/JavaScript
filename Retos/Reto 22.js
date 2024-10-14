/*
Crea una función en JavaScript que nos permita dibujar una tabla en una página web:
• Como parámetros indicaremos el número de filas y de columnas con dos números. Por defecto la
función tomará 10 filas y 4 columnas
• La tabla se crea con un borde negro de 1 píxel entre cada celda, pero un tercer parámetro
permite indicar el color (por defecto será negro). El borde exterior medirá 3 píxeles y siempre será
del mismo color que el borde de las celdas.
• La tabla ocupará toda la anchura de la página
• Usa la función para crear una tabla con borde negro de 10 filas y 4 columnas
• Úsala de nuevo para generar una tabla de 20 filas y 10 columnas, con borde negro
• Finalmente, consigue dibujar 10 tablas de 5 filas y 4 columnas que tengan borde verde.
*/

function table(rows=10, colums=4, color="black"){
    document.write("<table border = \"1\" style=\"border-collapse:collapse; width:100%; border: 3px solid "+color+";\">");
    for(let i=1;i<=rows;i++){
        document.write("<tr style=\"border: 1px solid "+color+";\">");
        for(let x=1; x<=colums;x++){
            document.write("<td>Columna "+x+"</td>");
        }
        document.write("</tr>");
    }
    document.write("</table><br>");
}

table();
table(20,10);
for(let k=1;k<=10;k++){
    table(5,4,"green");
}
