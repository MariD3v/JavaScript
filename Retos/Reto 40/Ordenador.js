class Ordenador{
    constructor(marca,modelo,memoria=4,disco=512,pulgadas=17, precio=0){
        this.marca = marca;
        this.modelo = modelo;
        this.memoria = memoria;
        this.disco= disco;
        this.pulgadas = pulgadas;
        this.precio = precio;
    }

    toString(){
        document.write("<br>Marca: "+this.marca+", Modelo:"+this.modelo+", Memoria:"+this.memoria+", Disco:"+ this.disco+", Pulgadas:"+this.pulgadas+", Precio:"+this.precio);
    }

    get pvp(){
        return (1.21*this.precio).toFixed(2);
    }

    set pvp(n){
        this.precio = (n/1.21).toFixed(2);
    }

    static sumaPrecios(ordenador1, ordenador2){
        return Number(ordenador1.precio) + Number(ordenador2.precio);
    }
}

class Portatil extends Ordenador{
    constructor(marca,modelo,memoria,disco=256,pulgadas=12,precio=0,autonomia=4){
        super(marca,modelo,memoria,disco,pulgadas,precio);
        this.autonomia = autonomia;
    }

    toString(){
        super.toString();
        document.write( ", Autonomia:" + this.autonomia); 
    }
}


let ordenador1 = new Ordenador("Samsung", "AF45",10,10,10,100);
let ordenador2 = new Ordenador("Samsung", "AF45X",10,15,10,10);
ordenador1.toString();
document.write(", Pvp:"+ordenador1.pvp);
ordenador1.pvp=34;
document.write(", Precio sin iva:"+ordenador1.precio);

let portatil1 = new Portatil("Samsung", "AF45-Flex",10,10,10,100);
let portatil2 = new Portatil("Samsung", "AF45-Flex",250,4,10,15);
portatil1.toString();
document.write(", Pvp:"+portatil1.pvp);
portatil1.pvp=34;
document.write(", Precio sin iva:"+portatil1.precio);

document.write("<br>2 portátiles: " + Ordenador.sumaPrecios(portatil1,portatil2));
document.write("<br>2 ordenadores: " + Ordenador.sumaPrecios(ordenador2,ordenador1));
document.write("<br>1 portátil, 1 ordenador: " + Ordenador.sumaPrecios(portatil1,ordenador1));
