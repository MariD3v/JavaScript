function Vehiculo(marca="",modelo="",color="",fabricacion=0){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.fabricacion = fabricacion;

    this.acelerar= function(velocidad){
        document.write("El coche " + this.marca + ", " + this.modelo + ", " + this.color + " ha acelerado a "+ velocidad + "km/h");
    }

    this.arrancar = function(){
        document.write("El coche " + this.marca + ", " + this.modelo + ", " + this.color + " ha arrancado");
    }

    this.parar = function(){

    }

    this.mostrarDatos = function(){
        document.write(this.marca+', '+this.modelo+', '+this.color+', '+this.fabricacion+', '+this.cilindrada);
    }
}

Vehiculo.prototype.cilindrada = 0;

function Furgoneta(marca,modelo,color,fabricacion,pasajeros=0){
    this.pasajeros=pasajeros;
    Vehiculo.call(this,marca,modelo,color,fabricacion);

    this.mostrarDatos = function(){
        Vehiculo.call(mostrarDatos());
        document.write(', '+this.pasajeros);
    }
}

Furgoneta.prototype = new Vehiculo(); //Así decimos que hereda de Vehículo
Furgoneta.prototype.constructor = Furgoneta; //Heredamos el constructor
Furgoneta.prototype.asientos = 0; //Añadir una propiedad
Furgoneta.prototype.mostrarAsientos = function() {document.write(this.asientos);}; //Añadir un metodo

function Todoterreno(marca,modelo,color,fabricacion,traccion=""){
    this.traccion=traccion;
    Vehiculo.call(this,marca,modelo,color,fabricacion);
    
    this.mostrarDatos = function(){
        Vehiculo.call(mostrarDatos());
        document.write(', '+this.traccion+', '+this.asientos);
    }
}

Todoterreno.prototype = new Vehiculo(); //Así decimos que hereda de Vehículo
Todoterreno.prototype.constructor = Todoterreno; //Heredamos el constructor
Todoterreno.prototype.asientos = 0; //Añadir una propiedad

let furgo1 = new Furgoneta("Seat", "XR2", "blanco", 2010, 5);
furgo1.asientos=1;
furgo1.mostrarDatos();
let vehiculo1 = new Vehiculo("Seat", "XR2", "blanco", 2010);
vehiculo1.mostrarDatos();
let todoterreno1 = new Todoterreno("Seat", "XR2", "blanco", 2010,"4x4");
todoterreno1.mostrarDatos();
