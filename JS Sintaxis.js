//Soy un comentario
/*
Soy un comentario en varias lineas
*/
console.log("Soy un print!")

//DEFINICIÓN DE VARIABLES (var y let)

if (true) {
    var x = 10;
}
console.log(x); // 10, porque x tiene alcance global, fuera de los bloques incluso

console.log(typeof(x)); //Para saber el tipo de variable
if (true) {
    let y = 10;
}
//console.log(y); // Error, y tiene alcance de bloque, no se puede acceder desde fuera

let myBool = true 
let myNumber = 6.5
let myString = "String"
let myVoidVariable = null //Variable aun no definida
const MY_CONST = "Soy un valor que no puede cambiar (constante)"

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