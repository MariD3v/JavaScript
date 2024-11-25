
class Empleado{
    constructor(nombre = "",departamento = "General"){
        this.nombre = nombre;
        this.departamento = departamento;
    }
    
    toString(){
        document.write("<br>Nombre: "+this.nombre+", Departamento:"+this.departamento);
    }
}

class Director extends Empleado{ 
    constructor(nombre,departamento,informes=[]){
        super(nombre,departamento); 
        this.informes = informes;
    }

    toString(){
        super.toString();
        document.write(", Informes:");
        for (const informe of this.informes){
            document.write(informe+" ");
        }
    }
}

class Trabajador extends Empleado{ 
    constructor(nombre,departamento,proyectos=[]){
        super(nombre,departamento); 
        this.proyectos = proyectos;
    }

    toString(){
        super.toString();
        document.write(", Proyectos:");
        for (const proyecto of this.proyectos){
            document.write(proyecto+" ");
        }
    }
}

class Ingeniero extends Trabajador{ 
    constructor(nombre,departamento="Ingeniería",proyectos=[],maquina=[]){
        super(nombre,departamento,proyectos); 
        this.maquina = maquina;
    }
    
    toString(){
        super.toString();
        document.write(", Maquinas:");
        for (const maqui of this.maquina){
            document.write(maqui+" ");
        }
    }
}

let empleado1 = new Empleado("Mari");
empleado1.toString();

let director1 = new Director("Mari","Director",["Informe1","Informe2"]);
director1.toString();

let trabajador1 = new Trabajador("Mari","Trabajador",["Proyecto1","Proyecto2"]);
trabajador1.toString();

let ingeniero1 = new Ingeniero("Mari");
ingeniero1.toString();