class Person{
    constructor(nombre, edad, dni, sexo, peso, altura){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        let imc = Number(this.peso/(this.altura**2));
        if (imc < 20){
            return -1;
        } else if (imc > 20){
            return 1;
        } else {
            return 0;
        }
    }

    esMayorDeEdad(){
        if (this.edad >= 18){
            return true;
        } else {
            return false;
        }
    }

    comprobarSexo(sexo){
        if (this.sexo == sexo){
            return true;
        } else {
            return false;
        }
    }

    toString(){
        document.write("Nombre:"+this.nombre+", Edad:"+this.edad+", Dni:"+this.dni+", Sexo:"+this.sexo+", Peso:"+this.peso+", Altura:"+this.altura);
    }

    generaDNI(){
        let numero = Math.floor(Math.random() * 99999999) + 10000000;
        let letramap = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
        let letra = letramap[Math.floor(Math.random() * 26)]
        this.dni = numero + letra;
    }

    get nombre(){
        return this.nombre;
    }

    set nombre(n){
        n = prompt("Introduce Nombre");
        this.nombre = n;
    }

    get edad(){
        return this.edad;
    }

    set edad(e){
        e=prompt("Introduce Edad");
        this.edad = e;
    }

    get sexo(){
        return this.sexo;
    }

    set sexo(s){
        s=prompt("Introduce Sexo");
        this.sexo = s;
    }

    get altura(){
        return this.altura;
    }

    set altura(a){
        a=prompt("Introduce Altura");
        this.altura = a;
    }

    get peso(){
        return this.peso;
    }

    set peso(p){
        p=prompt("Introduce Peso");
        this.peso = p;
    }
}


let person1 = new Person("Mari", 24, "49248439P", "M", 70, 1.70);
person1.toString();
person1.generaDNI();
person1.edad; //Asi se usa el get y set
person1.edad=25; //Asi se usa el get y set
person1.toString();
document.write(person1.calcularIMC());