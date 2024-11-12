

function Factura(cli="", art=""){
    this.cliente=cli;
    this.articulos=art;

    this.crearFactura = function (clie, arti) {
        this.cliente = clie;
        this.articulos = arti;
    }
    this.mostrarFactura = function() {
        this.cliente.mostrarCliente();
        for (const articulo of this.articulos){
            articulo.muestraArticulo();
        }
    }
}
