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
    texto1.trim();
    texto1.substring(inicio, fin); //Devuelve el texto desde la posición que indiquemos hasta la posición que indiquemos.
    texto1.split("separador", "limite"); //Divide el texto en un array eligiendo un separador y pudiendo elegir hasta que parte del texto separar
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

//FUNCIONES

    function myFunction(){
        console.log("Mi funcion está funcionando");
    }
    myFunction();

    function myReturnFunction(){
        return "Mi funcion está funcionando";
    }
    console.log(myReturnFunction());

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

    myList.length; //Tamaño del array
    myList.push(24); //Añade elementos al array por detras
    myList.unshift(24); //Añade elementos al array por delante
    let variableQuitada = myList.pop(24); //Quita un elemento del array y lo asigna a una variable
    myList.shift(); //Quita un elemento por delante del array
    myList.concat(myList2); //Une dos arrays
    myList.slice(0,3); //Corta el array desde la posicion que queramos. 
    myListDuplicado = myList.slice(); //Si no se meten argumentos, se haria un duplicado del array original
    myList.splice(2,3); //Añade y elimina elementos poniendo como argumento la posición y el dato
    myList.join(); //Convierte el Array en String separando los datos por ",". Si se le añade el argumento ("-"), el separador seria "-"
    myList.indexOf(2); //Busca en que posición se encuentra el argumento ofrecido que este en primer lugar
    myList.lastIndexOf(2); //Busca en que posición se encuentra el argumento ofrecido que este en ultimo lugar
    myList.includes(10); //Comprueba si el argumento se encuentra en el array (True/False)
    myList.reverse(); //Da la vuelta al array
    myList.sort(); //Ordena el array

    const mySetDup = new Set(...myList);

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
    console.log(mySet);

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
    console.log(myMap);

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

//CLASES

    class Person{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
    }

    let person1 = new Person("Mari", 24);
    console.log(person1);

