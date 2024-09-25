//Soy un comentario
/*
Soy un comentario en varias lineas
*/
console.log("Soy un print en consola!")
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

let myBool = true 
let myNumber = 6.5
let myString = "String"
let myVoidVariable = null //Variable aun no definida
let myInfinityVariable = 1/0 // Variable infinita, no da ERROR
let myNaNVariable = "hola"*3 //Variable NaN (Not a number)
const MY_CONST = "Soy un valor que no puede cambiar (constante)"

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
    console.log("myBool es true y myNumber es igual a 6")
} else if (myBool || myNumber == 6){
    console.log("O myBool es true o myNumber es 6")
} else {
    console.log ("Ni myBool es true ni myNumber es igual a 6")
}

//FUNCIONES

function myFunction(){
    console.log("Mi funcion está funcionando")
}
myFunction()

function myReturnFunction(){
    return "Mi funcion está funcionando"
}
console.log(myReturnFunction())

//LISTAS (desordenado y con repetidos)

let myList = ["Mari", 23, "Urus"]
console.log(myList)
console.log(myList[0])

//SETS (desordenado y sin repetidos)

let mySet = new Set(["Mari", 24, "Urus", "Mari"])
mySet.add("Rosa")
console.log(mySet)

//MAPAS/DICCIONARIOS (desordenado, con claves sin repetir)

let myMap = new Map([["Nombre", "Mari"],["Edad", 24],["Mascota", "Urus"]])
myMap.set("Color", "Rosa")
console.log(myMap)
console.log(myMap.get("Nombre"))

//BUCLES

for (const value of myList){
    console.log(value)
}

for (let i=0; i<=10; i++){
    console.log(i);
}

myCounter = 0;
while(myCounter <= 10){
    console.log(myCounter)
    myCounter ++
}

//CLASES

class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

let person1 = new Person("Mari", 24)
console.log(person1)

