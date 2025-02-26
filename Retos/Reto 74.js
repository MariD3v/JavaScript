/* Crea la funcion cocinar y servir con promesas, la primera debe tardar 2s en ejecutarse y la segunda 1s. 
Debe retornar un mensaje con el tiempo que tarda y el precio del pedido. Haz la función pedido que llame a las dos funciones
anteriores y la funcion pedido asyn que sea igual que pedido pero asíncrona */

function cocinar(pedido){
    var random = Math.random();
    console.log(random);
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (random >= 0.2){
                let mensaje = "Tardo en cocinar tu "+pedido+" 10m";
                let precio = 20
                resolve({ mensaje, precio });
            }
            let error = "No se ha podido cocinar tu pedido"
            reject(error)
        }, 2000);
      });
      
}

function servir(pedido){
    var random = Math.random();
    console.log(random);
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (random >= 0.2){
                let mensaje = "Tardo en servir tu "+pedido+" 2m";
                let precio = 12
                resolve({ mensaje, precio });
            }
            let error = "No se ha podido servir tu pedido"
            reject(error)
        }, 1000);
      });
}

function pedido(pedido){
    console.log("Cargando los datos de tu pedido...");

    const cocinarPromesa = cocinar(pedido);
    const servirPromesa = servir(pedido);
  
    Promise.all([cocinarPromesa, servirPromesa])
  
      .then(resultados => {
        const [resultado1, resultado2] = resultados;
        console.log(`${resultado1.mensaje}, Precio de cocinar = ${resultado1.precio}€`);
        console.log(`${resultado2.mensaje}, Precio de servir = ${resultado2.precio}€`);
        let suma = resultado2.precio + resultado1.precio

        console.log(`Precio total=  ${suma}€`);

      })
      .catch(error => {
        console.error("Error:", error);
      });
}

pedido("Pizza")

async function pedidoAsync(pedido){
    try{
        console.log("Cargando los datos de tu pedido de forma asincrona...");
        let cocinarPromesa = await cocinar(pedido);
        console.log(`${cocinarPromesa.mensaje}, Precio de cocinar = ${cocinarPromesa.precio}€`);
        let servirPromesa = await servir(pedido);
        console.log(`${servirPromesa.mensaje}, Precio de servir = ${servirPromesa.precio}€`);
        
        let suma = cocinarPromesa.precio + servirPromesa.precio

        console.log(`Precio total=  ${suma}€`);
    }catch(error){
        console.error("Error:", error);
    
    }
    
}

pedidoAsync("Tortilla")