/* Crear una función que reciba un número de milisegundos y genere un temporizador que escriba el texto "Tiempo concluido" cuando pasen dichos milisegundos.
• Realmente la función no escribe, sino que genera una promesa cuyo resultado es dicho texto.
• En el caso de que no se cumpla la promesa, el resultado será el texto "El tiempo no va bien".
• Se decidirá que la promesa no se ha cumplido cuando pase el doble de tiempo que el indicado en los milisegundos.
Nota: La función crea dos temporizadores, uno con el tiempo que recibe la función como parámetro y el segundo con el doble. 
El primero invoca a la función callback resolver porque considera cumplida la promesa. El segundo invoca a rechazar.
*/

function temporizador(tiempo){
    var promesa=new Promise((resolver, rechazar)=>{
    var temp=setTimeout(()=>{
          clearTimeout(temp2);
          resolver("Tiempo concluido");
          },tiempo);
    var temp2=setTimeout(()=>{
              rechazar("El tiempo no va bien");
              },tiempo*2);
    });
    return promesa;
}

/*La función cuenta. Esta función será capaz de escribir una cuenta atrás, y mostrarla en un
elemento de HTML. Los parámetros son:
- El número con el que se inicia la cuenta atrás.
- El elemento en el que escribiremos la cuenta atrás. Por defecto usará el elemento body.
- El intervalo en milisegundos en el que cambia cada número. Por defecto valdrá 1000.
- Una función callback, cuyo código se ejecuta cuando la cuenta finalice.*/

async function cuenta(numero,elemento=document.body,tiempo=1000,f){
    try{
        for(let i=numero;i>=0;i--){
              await temporizador(tiempo);
              elemento.textContent=i;
        }
        if (f) f();
    }
     catch(e){
        console.log("Error"+e);
    }
}

/*Crea una aplicación web que cree en dos párrafos de modo que en el primero se cuente atrás desde el 6, 
pasando de segundo en segundo. En el segundo se contará desde el 60 pero cada número se moverá de décima en décima. 
Además, al llegar a cero, queremos que escriba "Fin".*/

window.onload=function() {
    let p1=document.querySelector("p:first-of-type");
    let p2=document.querySelector("p:last-of-type");
    cuenta(6,p1);
    cuenta(60,p2,100,()=>{
        p2.textContent="Fin";
    });
}