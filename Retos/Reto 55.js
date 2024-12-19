/* Crear una función que reciba un número de milisegundos y genere un temporizador que escriba el texto "Tiempo concluido" cuando pasen dichos milisegundos.
• Realmente la función no escribe, sino que genera una promesa cuyo resultado es dicho texto.
• En el caso de que no se cumpla la promesa, el resultado será el texto "El tiempo no va bien".
• Se decidirá que la promesa no se ha cumplido cuando pase el doble de tiempo que el indicado en los milisegundos.
Nota: La función crea dos temporizadores, uno con el tiempo que recibe la función como parámetro y el segundo con el doble. 
El primero invoca a la función callback resolver porque considera cumplida la promesa. El segundo invoca a rechazar.
*/

async function temporizador(tiempo){
    return new Promise((resolve, reject)=>{
        const timeout = setTimeout(function(){
            let text = "Tiempo concluido";
            resolve(text);
        },tiempo);

        setTimeout(() => {
            clearTimeout(timeout);
            reject(new Error("El tiempo no va bien"));
        }, tiempo * 2);

    })
}

let promesa = temporizador(2000);

promesa.then((respuesta)=>{
    console.log(respuesta);
}).catch((error)=>{
    console.log(error);
})