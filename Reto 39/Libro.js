class Libro{
    constructor(titulo="", autor="",isbn="",pagina =0,publicaciones ="",ejemplares =0,prestados =0){
        this.titulo =titulo;
        this.autor =autor;
        this.isbn =isbn;
        this.pagina =pagina;
        this.publicaciones =publicaciones;
        this.ejemplares = ejemplares;
        this.prestados =prestados;
    }

    insertaLibro(){
        this.titulo = prompt("Introduce título");
        this.autor =prompt("Introduce autor");
        this.isbn =prompt("Introduce isbn");
        this.pagina =prompt("Introduce pagina");
        this.publicaciones =prompt("Introduce publicaciones");
        this.ejemplares =prompt("Introduce ejemplares");
        this.prestados =prompt("Introduce prestados");
    }

    realizaPrestamo(){
        if (this.ejemplares > 0){
            this.prestados++;
            this.ejemplares--;
            return true;
        } else {
            return false;
        }
    }

    realizaDevolucion(){
        if (this.prestados > 0){
            this.ejemplares++;
            this.prestados--;
            return true;
        } else {
            return false;
        }
    }

    mostrarLibro(){
        document.write("Titulo: "+this.titulo+", Autor:"+this.autor+", ISBN:"+this.ISBN+", Páginas:"+this.pagina+" ,Publicaciones:"+this.publicaciones+" ,Ejemplares:"+this.ejemplares+" ,Prestados:"+this.prestados);
    }
}