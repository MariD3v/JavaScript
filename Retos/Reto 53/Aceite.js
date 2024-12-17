class Aceite{
    constructor(nombre,precio = 0, capacidad, referencia){
        this.nombre = nombre;
        this.precio = precio;
        this.capacidad = capacidad;
        this.referencia = referencia;
    }

    mostrar(){
        document.write("<br>Nombre: "+this.nombre+", Precio:"+this.precio+", Capacidad:"+this.capacidad+", Referencia:"+this.referencia);
    }

    incrementoPrecio(porcentaje){
        this.precio = ((this.precio*porcentaje)/100)+this.precio;
    }

    tipo(porcentajeVirgen,porcentajeExtra){
        let erLetra = /^(A|E)/;
        let erNumeros = /[0-9]{3}/;

        let resultadoNumero = erNumeros.exec(this.referencia);
        let litros = resultadoNumero[0]; 
        let resultadoLetra = erLetra.exec(this.referencia);

        if(resultadoLetra){
            let primeraLetra = resultadoLetra[0]; 
            if(primeraLetra == "A"){
                return (litros-((litros*porcentajeVirgen)/100))/this.capacidad;
            } else{
                return (litros-((litros*porcentajeExtra)/100))/this.capacidad;
            }
        } else {
            return litros/this.capacidad;
        }
    }
}

let aceiteExtra = new Aceite('Capicua', 100, 1,"E234ES");
console.log("Litros de aceite Extra:"+aceiteExtra.tipo(15,13));
let aceiteVirgen = new Aceite('Capicua', 100, 1,"A234ES");
console.log("Litros de aceite virgen:"+aceiteVirgen.tipo(15,13));
let aceiteNormal = new Aceite('Capicua', 100, 1,"S234ES");
console.log("Litros de aceite normal:"+aceiteNormal.tipo(15,13));

aceiteNormal.incrementoPrecio(15);
console.log("Precio incrementado:"+aceiteNormal.precio);

document.write("<br>Aceites y vinos de los siguientes ejercicio:<br>")
aceiteNormal.mostrar();


class Vino extends Aceite{ 
    constructor(nombre,precio = 0, capacidad, referencia, uvas=[]){
        super(nombre,precio, capacidad, referencia); 
        this.uvas = uvas;
    }

    mostrar(){
        super.mostrar();
        document.write(", Uvas:");
        for (const uva of this.uvas){
            document.write(uva+" ");
        }
    }

    tipo(){
        let erNumeros = /[0-9]{3}/;
        let resultadoNumero = erNumeros.exec(this.referencia);
        let litros = resultadoNumero[0]; 
        
        return litros/this.capacidad;
    }

    comprobarUva(tipo){
        let boolean = false;
        if(this.uvas.includes(tipo)){
            boolean = true;
        }
        return boolean;
    }
}

let vino1 = new Vino('Capicua', 100, 1,"E234ES",["Tempranillo","Cariñena"]);
vino1.mostrar();
console.log("Litros de vino:"+ vino1.tipo());
console.log("¿Tiene esta uva el vino? "+vino1.comprobarUva("Tempranillo"));
console.log("¿Tiene esta uva el vino? "+vino1.comprobarUva("Merlot"));