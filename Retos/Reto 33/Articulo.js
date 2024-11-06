function Articulo(cod="", desc="", precio=0){
    this.codigo=cod;
    this.descripcion=desc;
    this.pvp=precio;

    this.insertaArticulo = function () {
        this.codigo=prompt("Introduce un código");
        this.descripcion=prompt("Introduce una descripción");
        this.pvp=Number(prompt("Introduce un precio"));
    }
    this.muestraArticulo = function() {
        document.write("Código: " + this.codigo + ", Descripción: " + this.descripcion + ", PVP: " + this.pvp);
    }
}
