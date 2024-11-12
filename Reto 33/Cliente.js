function Cliente(dni="", nomb="", direc="", telf=""){
    this.dni=dni;
    this.nombre=nomb;
    this.direccion=direc;
    this.telefono=telf;

    this.insertaCliente = function () {
        this.dni=prompt("Introduce tu DNI");
        this.nombre=prompt("Introduce tu nombre");
        this.direccion=prompt("Introduce tu direccion");
        this.telefono=prompt("Introduce tu telefono");
    }
    this.mostrarCliente = function() {
        document.write("DNI: " + this.dni + ", Nombre: " + this.nombre + ", Dirección: " + this.direccion + ", Teléfono:" + this.telefono);
    }
}
