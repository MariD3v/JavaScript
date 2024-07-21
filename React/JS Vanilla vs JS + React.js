/* 
En este documento explicaremos porque usaremos React para la creación de UI(interfaces de usuario)
en vez de usar JavaScript Vanilla (Sin frameworks).
Para ello usaremos ejemplos sobre como un botón de "Me gusta" cambia a "No me gusta" con las diferentes 
herramientas posibles.
*/

//JavaScript Vanilla
const button = document.querySelector('button') //Obtenemos el boton de HTML
button.addEventListener("click",function(){ //Cada vez que se haga click, que se ejecute lo siguiente:
    const id = button.getAttribute('data-id') // Obtenemos el id de la publicación a la que hace referencia el boton
    toggleLike(id) //Actualizamos si "Me gusta"
    if (button.classList.contains('Liked')){ //Si me gusta o no, cambiamos el texto y la clase
        button.classList.remove('Liked')
        button.innerText = 'Me gusta'
    } else {
        button.classList.add('Liked')
        button.innerText = 'Quitar me gusta'
    }
})
/*
Esta opción presenta varios problemas:
1- Fallo de seguridad: Esta opción facilita las inserciones de código que pueden hacernos para hackear 
nuestra web.
2- Código imperativo: En esta opción se debe explicar paso a paso CÓMO debe hacerse la aplicación.
3- Fallo en la repetición de componentes: Si se quisiera reutilizar ese codigo para implementar varios 
botones, habria que hacer lo siguiente:

const buttons = document.querySelectorAll('button')       Obtenemos todos los botones
buttons.forEach(Button => {                               Por cada botón que se repita lo siguiente
    (todo el código de arriba)
})

Y aún así habria problemas. Porque el id es distinto para cada botón. 
JavaScript es complicado de usar cuando queremos tener el mismo componente con las mismas caracteristicas
repetido varias veces pero con contenidos diferentes.
*/

//React (Sin dependencias)

import React from "http://esm.sh/react@18.2.0" // Importamos React
import ReactDOM from "http://esm.sh/react-dom@18.2.0/client" // Importamos ReactDOM 

const appDomElement = document.getElementById('app') //Creamos la raiz/base de los componentes
const root = ReactDOM.createRoot(appDomElement) //Creamos el root en la raiz/base

const button1 = React.createElement('button', {"data-id": 123}, 'Button 1') //Creamos el botón
const button2 = React.createElement('button', {"data-id": 456}, 'Button 2') //Creamos el segundo botón

const app = React.createElement(React.Fragment, null, [button1, button2]) //Englobamos ambos botones en un componente mayor

root.render(app) //Renderizamos app, que engloba ambos botones porque no se pueden pasar más de un elemento sueltos

/*
Problemas resuelto:
1- React resuelve el problema de ciberseguridad debido a que al renderizar no es posible pasar texto, 
solamente podemos pasarle funciones que retornan algo o direcctamente una variable ya creada anteriormente
Ej erroneo:  root.render('<button> Me gusta </button>')
2- Resuelve el problema de la repeticion de componentes debido a que todo se engloba dentro de otra cosa

Problemas nuevos:
1- Sigue siendo código imperativo, aún tenemos que especificar paso a paso cada acción
*/

// React (Con JSX)

/*
JSX es un "traductor" que nos permite usar JS y React con una sintaxis XML, algo mucho más sencillo
que tener que programar en React puro, como hemos hecho en el apartado anterior.
Una vez programado el código en esta sintaxis más sencilla, JSX se encarga de traducir ese código 
a la sintaxis de React vista anteriormente
*/

const buttonA = <button data-id="123">Button 1</button> 
// Esto escrito con JSX se traduciria automáticamente y sería lo misto que esto:
//const buttonA = React.createElement('button', {"data-id": 123}, 'Button 1') 


/*Los proyectos se crean con vite de la siguiente manera:
npm init -y
npm create vite@latest

Y se ejecutan con:
npm run dev
*/