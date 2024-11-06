

function Factura(cli = Cliente, art=[]){
    this.cliente=cli;
    this.articulos=art;

    this.crearFactura = function (clie = Cliente, arti = []) {
        this.cliente = clie;
        this.articulos = arti;
    }
    this.mostrarFactura = function() {
        this.cliente.mostrarCliente();
        for (const articulo of this.articulos){
            articulo.mostrarArticulo();
        }
    }
}

let cliente1= new Cliente("59384732x", "Mari", "calle esperanza", "678976796");
let cliente2= new Cliente();
cliente2.insertaCliente();

let articulo1 = new Articulo("1", "Muy bueno", 34)
let articulo2 = new Articulo();
articulo2.insertaArticulo();

let factura1= new Factura();
factura1.crearFactura(cliente1,[articulo1,articulo2]);
factura1.mostrarFactura();
