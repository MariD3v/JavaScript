let cliente1= new Cliente("59384732x", "Mari", "calle esperanza", "678976796");
let cliente2= new Cliente();
cliente2.insertaCliente();

let articuloArray = [];

let articulo1 = new Articulo("1", "Muy bueno", 34);
let articulo2 = new Articulo();
articulo2.insertaArticulo();

articuloArray.push(articulo1);
articuloArray.push(articulo2);

let factura1= new Factura();
factura1.crearFactura(cliente1,articuloArray);
factura1.mostrarFactura();
