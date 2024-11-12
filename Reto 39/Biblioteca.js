const biblioteca=[];

for (let j=0; j<3;j++){ //Creamos 3 libros
    let j = new Libro();
    j.insertaLibro();
    biblioteca.push(j);
}

for (let i=0;i<biblioteca.length;i++){
    biblioteca[i].mostrarLibro();
}

function librosAutor(autor){
    document.write("<br>Libros de " + autor+":<br>");
    for (let i=0; i<biblioteca.length;i++){
        if (biblioteca[i].autor == autor){
            biblioteca[i].mostrarLibro();
        }
    }
}

function librosPrestados(){
    document.write("<br>Libros prestados:<br>");
    for (let i=0; i<biblioteca.length;i++){
        if (biblioteca[i].prestados >0){
            biblioteca[i].mostrarLibro();
        }
    }
}

librosAutor("sarah");
librosAutor("mari");
librosPrestados();