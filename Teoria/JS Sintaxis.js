//Soy un comentario
/*
Soy un comentario en varias lineas
*/
console.log("Soy un print en consola!");
document.write("Soy un print en navegador!");

//DEFINICIÓN DE VARIABLES (var y let)

    if (true) {
        var x = 10;
    }
    console.log(x); // 10, porque x tiene alcance global fuera de los bloques (excepto en funciones que habria que hacer un return)
    console.log(typeof(x)); //Para saber el tipo de variable

    if (true) {
        let y = 10;
    }
    //console.log(y); // Error, y tiene alcance de bloque, no se puede acceder desde fuera

    let myBool = true;
    let myNumber = 6.5;
    let myString = "String";
    let myVoidVariable = null; //Variable aun no definida
    let myInfinityVariable = 1/0; // Variable infinita, no da ERROR
    let myNaNVariable = "hola"*3; //Variable NaN (Not a number)
    const MY_CONST = "Soy un valor que no puede cambiar (constante)";

    let [saludo,despedida,cierre] = ["Hola", "Adios","Hasta nunca"]; // Es lo mismo que let saludo = "Hola", let despedida = "Adios" y let cierra = "Hasta nunca"

//MÉTODOS

    texto1.localeCompare(texto2); //Este método devuelve un número negativo si el segundo texto es mayor que el primero, un número positivo si es el primer texto el que es mayor en orden alfabético, y cero si son iguales.
    texto1.length; //Devuelve el tamaño del texto
    texto1.chartat(5); //Devuelve que carácter hay en esa posición
    texto1.toUpperCase(); //Mayúsculas
    texto1.toLowerCase(); //Minúsculas
    texto1.indexOf("a"); //Devuelve en que posición está un carácter
    texto1.lastIndexOf(); //Devuelve la última posición donde aparece el carácter/texto
    texto1.startsWith("hola"); //Devuelve true si empieza por el texto indicado o false si no
    texto1.replace("que remplazar", "por qué remplazar"); //Reemplaza en el texto lo que queramos por lo que queramos
    texto1.trim(); // Elimina los espacios en blanco al principio y al final de una cadena de texto. No afecta los espacios que están en medio de la cadena
    texto1.substring(inicio, fin); //Devuelve el texto desde la posición que indiquemos hasta la posición que indiquemos.
    texto1.split("separador", "limite"); //Divide el texto en un array eligiendo un separador y pudiendo elegir hasta que parte del texto separar
    texto1.includes("a"); //Comprueba si el texto incluye lo que queramos
    typeOf(texto1); //Devuelve el tipo de dato
    isNaN(texto1); //Devuelve False si es un número o True si es un número

//SECUENCIAS

    /*
    \n salto de linea
    \t tabulador
    \f salto de pagina
    \"" pone "" en el texto
    */

//OPERADORES ARITMETICOS

    let mySuma = 3+2;
    let myResta = 3-2;
    let myMulti = 3*2;
    let mydivision = 3/2;
    let myResto = 3%2;
    let myExponente = 3**2;

//OPERADORES RELACIONALES

    /*
    > menor
    < mayor
    >= menor o igual
    <= mayor o igual
    == igual
    != distinto
    x++ suma 1
    x-- resta 1
    */

//CONTROL DE FLUJO (Igual que en java)

    if (myBool && myNumber == 6){
        console.log("myBool es true y myNumber es igual a 6");
    } else if (myBool || myNumber == 6){
        console.log("O myBool es true o myNumber es 6");
    } else {
        console.log ("Ni myBool es true ni myNumber es igual a 6");
    }

//LISTAS (desordenado y con repetidos)

    //En las listas de JS no es necesario definirla previamente, y son heterogéneos (Pueden llevar dentro distintos tipos de datos)

    let myList = ["Mari", 23, "Urus"]; //Otra forma es: let myList = new Array("Mari", 23, "Urus");
    let myList2 = myList; //De esta forma, NO estamos duplicando el array myList. Estamos haciendo que myList2 apunte hacia myList. Pero si se modifica una de las dos, en verdad, se estarían modificando ambas.
    console.log(myList);
    console.log(myList[0]);
    delete myList[2]; //De esta forma, se estaría eliminando en myList y myList2

    let myList3 = ["Mari",  , 3, ["Soy otro array", 3]]; // Array con undefineds, está permitido y con varios tipos de datos distintos

    for(let i=0;i <myList.length;i++){ //Obtiene el índice
        if(myList[i] != undefined){  //No se salta los indefinidos, hay que saltarlos con este if
            console.log(myList[i]);
        }
    }

    for (let index in myList){ //Obtiene el índice 
        if(mtList instanceof Array){ //Operador para array (comprueba si es un array o no)
            console.log(myList[index]); //Se salta los indefinidos de forma predeterminada
        }
    }

    for (const value of myList){ //Obtiene el valor
        if(value != undefined){  //No se salta los indefinidos, hay que saltarlos con este if
            console.log(value);
        }
    }
    myList.split("");//Devuelve un array troceando un texto eligiendo el separador que queramos
    myList.length; //Tamaño del array
    myList.push(24); //Añade elementos al array por detras
    myList.unshift(24); //Añade elementos al array por delante
    let variableQuitada = myList.pop(24); //Quita un elemento del array y lo asigna a una variable
    myList.shift(); //Quita un elemento por delante del array
    myList.concat(myList2); //Une dos arrays
    myList.slice(0,3); //Corta el array desde la posicion que queramos. 
    myListDuplicado = myList.slice(); //Si no se meten argumentos, se haria un duplicado del array original
    myList.splice(2,3); //Añade y elimina elementos poniendo como argumento la posición y el dato
    myList.join(""); //Convierte el Array en String. Si se le añade el argumento ("-"), el separador seria "-"
    myList.indexOf(2); //Busca en que posición se encuentra el argumento ofrecido que este en primer lugar
    myList.lastIndexOf(2); //Busca en que posición se encuentra el argumento ofrecido que este en ultimo lugar
    myList.includes(10); //Comprueba si el argumento se encuentra en el array (True/False)
    myList.reverse(); //Da la vuelta al array
    myList.sort(); //Ordena el array
    let newModifiedArray = myList.map(x=>x+1); //Crea un array, modificando cada elemento del array (x) (en este caso +1)
    let newFilterArray = myList.filter(x=>x>1); //Crea un array, filtrando cada elemento del array (x) (en este caso, obtendrá los elementos >1)
    const mySetDup = new Set(...myList); //Convierte la lista en set

    /*forEach ejecuta una función para cada elemento del array, 
    indicando como primer parámetro de la función el la variable donde se va a almacenar cada elemento del array 
    y como segundo parámetro la variable del indice*/
    myList.forEach(function(valor,indice){console.log("Valor:"+valor+" Posición:" + indice)}) 
    

    //Nomenclatura en desectructuracion de arrays
    let array1 = [1,2,3];
    let [a,b] = [...array1]; //a=1 b=2
    let [x,y,z] = [...array1]; //x=1 y=2 z=3
    let [c,d,...array2] = [1,2,3,4,5]; //c=1 d=2 array2=3,4,5
    
//SETS (desordenado y sin repetidos)

    let mySet = new Set(["Mari", 24, "Urus", "Mari"]);
    mySet.add("Rosa").add("Flores"); //Añade elementos
    mySet.size; //Indica cuantos elementos hay
    mySet.delete("Urus"); //Elimina 1 elemento
    mySet.clear(); //Vacia el set
    mySet.has("Mari"); //Devuelve true si el set contiene un elemento o false si no
    const myArrayconst = new Set([...myList]); //Duplicar el set convertiendolo en array
    let newModifiedSet = mySet.map(x=>x+1); //Crea un nuevo set, modificando cada elemento del set (x) (en este caso +1)
    let newFilterSet = mySet.filter(x=>x>1); //Crea un nuevo set, filtrando cada elemento del set (x) (en este caso, obtendrá los elementos >1)
    console.log(mySet);
    
    /*forEach ejecuta una función para cada elemento del array, 
    indicando como parámetro de la función el la variable donde se va a almacenar cada elemento del set*/
    mySet.forEach(function(valor){console.log("Valor:"+valor)}) 

//MAPAS/DICCIONARIOS (desordenado, con claves sin repetir)

    let myMap = new Map([["Nombre", "Mari"],["Edad", 24],["Mascota", "Urus"]]);
    myMap.set("Color", "Rosa").set("Objeto", "Flores"); //Añade valores
    myMap.clear(); //Vacia el mapa
    myMap.delete("Nombre"); //Borra una clave y su valor
    myMap.get("Nombre"); //Obtener el valor de una clave
    myMap.has("Edad"); //Comprueba si se encuentra una clave, no busca por valor. Devuelve true o false
    myMap.keys(); //Devuelve un array de las claves
    myMap.values(); //Devuelve un array de los valores
    let myArrayMap = [...myMap]; //Asi convertimos un mapa en un array. Nos devuelve un array con arrays de 2 en 2 dentro
    let newModifiedMap = myMap.map(x=>x+1, y=>y-1); //Crea un nuevo map, modificando cada elemento del map (x, y) (en este caso a la clave le suma 1 y a el valor le resta 1)
    let newFilterMap = myMap.filter(x=>x>1, y=>y>2); //Crea un nuevo map, filtrando cada elemento del map (x, y) (en este caso, obtendrá los elementos con clave >1 y con valor >2)
    console.log(myMap);

    /*forEach ejecuta una función para cada elemento del mapa, 
    indicando como primer parámetro de la función el la variable donde se va a almacenar cada clave y
    como segundo parámetro cada valor*/
    myMap.forEach(function(clave,valor){console.log("Clave:"+clave+" Valor:"+valor)}) 

    for (let[clave,valor] of myMap){ //For para almacenar claves y valores
        console.log(clave,valor);
    }

//BUCLES

    for (const value of myList){
        console.log(value);
    }

    for (let i=0; i<=10; i++){
        console.log(i);
    }

    myCounter = 0;
    while(myCounter <= 10){
        console.log(myCounter);
        myCounter ++;
    }


//FUNCIONES

    /*Utilizar funciones de otro .js
    Debemos en el html, incluir ambos scripts. 
    De tal manera que podriamos acceder desde uno a las funciones del otro.*/

    function myFunction(...parámetros){ //Para poder meter tantos parámetros como queramos, pero dentro de la función debemos tratar los datos como un array
        console.log("Mi funcion está funcionando");
    }
    myFunction();

    function myReturnFunction(parámetros){
        return "Mi funcion está funcionando";
    }
    console.log(myReturnFunction());

    //Función anónima
    const myAnonFunction = function(parámetros){
        console.log(parámetros);
    }

    myAnonFunction("Parámetro");

    //Función flecha
    const myArrowFunction1 = () => console.log("No tengo parámetros");
    const myArrowFunction2 = parámetros => parámetros*3  //Son iguales
    const myArrowFunction3 = parámetros => {            //Son iguales
        return parámetros*3
    }

    //Función callback
    function callback(x,accion){
        console.log(accion(x));
    }

    function doble(y){
        return 2*y;
    }

    callback(12,doble); //Función que llama dentro a otra función
    

//CLASES

    class Person{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
    }

    let person1 = new Person("Mari", 24);
    console.log(person1);

//BOM (Browser Objects Model)
    
    //window
    let desplazamientoHorizontal = window.scrollX;
    let desplazamientoVertical = window.scrollY;
    let fullScreen = window.fullScreen;
    window.scroll(x,y); //Desplaza la página en las coordenadas indicadas
    window.scrollBy(x,y); //Desplaza respecto a la posición actual
    let otraVentada = window.open("nuevaventana.html","texto descriptivo","height=800,width=600"); //Abre una ventana
    otraVentada.close(); //Cierra una ventana
    
    //navigator
    let infoNavegador = navigator.userAgent; //Indica información del navegador
    let cookie = navigato.cookieEnabled; //Indica si las cookies estan activadas
    
    //screen
    let top = screen.availTop; //Primera coordenada superior de la pantalla 
    let left = screen.availLeft; //Primera coordenada izquierda de la pantalla 
    let height = screen.availHeight; //Altura de la pantalla en pxs
    let width = screen.availWidth; //Ancho de la pantalla en pxs
    
    //location
    let direccion = location.href; //Dirección a la que estamos accediendo (URL o archivo local)
    let protocolo = location.protocol; //Indica el protocolo
    let host = location.host; //Devuelve el nombre del servidor y el puerto
    
    //history
    let paginaAnterior = history.go(-1); //Va a la página anterior
    let paginaSiguiente = history.go(); //Va a la página siguiente
    let primeraPagina = history.go(-(history.length-1)); //Te devuelve a la primera página
    
    //console
    console.log(); //Devuelve algo por consola

//DOM (Document Objects Model)

    //Obtener elemento por ID
    let elemento = document.getElementById("id"); //Obtiene el elemento por id
    let valor = elemento.value; //Obtener su valor

    //Obtener elementos por ETIQUETA
    let elementosEtiqueta = document.getElementsByTagName("p"); //Obtiene una lista de nodos con todos los elementos de etiqueta <p>
    console.log(elementosEtiqueta[0]); //Devuelve el primer elemento <p>
    console.log(elementosEtiqueta.length); //Devuelve cuantos elementos <p> hay
    let arrayElementosEtiqueta = [...elementosEtiqueta]; //elementosEtiqueta no es una array como tal, y no tiene todas las propiedades de los array, para tratarlo como tal hay que convertilo

    //Obtener elementos por CLASE
    let elementosClase = document.getElementsByClassName("clase"); //También devuelve una lista de nodos
    console.log(elementosClase[0]); //Devuelve el primer elemento con esa clase
    console.log(elementosClase.length); //Devuelve cuantos elementos hay en esa clase
    let arrayElementosClase = [...elementosClase]; //elementosClase no es una array como tal, y no tiene todas las propiedades de los array, para tratarlo como tal hay que convertilo

    //Obtener elementos GENERAL
    let elementosPorClase = document.querySelectorAll(".clase"); //Todos los elementos de clase .clase
    let elementosPorEtiqueta = document.querySelectorAll("ul li"); //Todos los li que esten dentro de ul
    let primerElementoLista = document.querySelectorAll("li:first-of-type"); //Primeros elementos li de las listas
    let primerElementoListaClase = document.querySelectorAll("li.clase:first-of-type");//Selecciona el primer elemento li de cada lista si es de clase .clase
    let primerElemento = document.querySelector(".clase"); //Devuelve solo el primer elemento de clase .clase

    //Tipos de datos
    elemento.nodeType; //Indica que tipo de nodo es (1 = elemento, 2 = atributo, 3 = texto, 9 = documento completo, ...) del html
    elemento.nodeName; //Igual que la enterior pero devuelvo el tipo en letra (#text, nombre del atributo, nombre de etiqueta, #document...)
    elemento.nodeValue; //Devuelve el contenido del elemento

    //Atributos
    let html = document.getElementsByTagName("html");
    html.getAttribute("lang"); //Obtiene el valor de un atributo por ejemplo, devolveria "es"
    html.setAttribute("lang","en"); //Modifica el valor de un atributo
    html.removeAttribute("lang"); //Elimina un atributo
    html.hasAttribute("lang"); // devuelve verdadero si el elemento tiene el atributo y falso si no lo tiene.
    html.toggleAttribute("lang", "es"); //Si ya tiene el atributo, lo quita y si no lo tiene lo pone.
    let atributos = html.attributes; //Obtiene una lista de nodos con todos los atributos y su valor, de esa etiqueta
    for (let atributo of atributos){
        document.write("Atributo:" + atributo.name + " Valor:" + atributo.value); //Asi se obtiene el atributo y su valor
    }
    
    //Textos
    let p = document.querySelector("p"); 
    let contenidoTexto = p.textContent; //Lee el texto, sin tener en cuenta las etiquetas internas del texto (strong, em...)
    let contenidoTextoHTML = p.innerHTML; //Lee el texto y permite su modificacion, teniendo en cuenta las etiquetas HTML
    p.innerHTML += "<strong>Hola</strong>"; //Añade a continuación lo que queramos

    //Navegar por el Documento

    let parrafo = getElementById("parrafo");
    for (let hijo of parrafo.childNodes){ //ChildNodes hace referencia a todos los nodos que hayan dentro del elemento
        document.write("texto:" + hijo.nodeValue + " tipo:" + hijo.nodeType + " nombre:" + hijo.nodeName);
    }

    for (let hijo of parrafo.children){ //Children obtiene solo los elementos que hayan en el elemento
        document.write("texto:" + hijo.nodeValue + " tipo:" + hijo.nodeType + " nombre:" + hijo.nodeName);
    }

    let primerhijo = parrafo.firstChild; //Primer hijo
    let ultimohijo = parrafo.lastChild; //Primer hijo
    let siguienteHermano = parrafo.nextSibling; //Siguiente hermano
    let anteriorHermano = parrafo.previousSibling; //Anterior hermano
    let numeroHijos = parrafo.childElementCount; //Numero de hijos

    //Crear elementos

    let nuevoElemento = document.createElement("div");//Crear elementos
    nuevoElemento.innerHTML="Contenido del div"; //Añadir contenido al elemento creado
    nuevoElemento.setAttribute("id","div1"); //Añadir atributos
    let p1 = document.createElement("p");
    nuevoElemento.appendChild(p1); //Añadir hijo al final
    let p2 = document.getElementsByTagName("p");
    nuevoElemento.removeChild(p2); //Elimina p