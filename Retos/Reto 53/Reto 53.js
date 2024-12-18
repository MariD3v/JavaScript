/* ALMACEN DE ACEITE

El HTML contendrá un listado con los aceites que tendremos en un array de objetos aceites donde se guardará el nombre o tipo de aceite, el precio, capacidad y referencia):
El campo nombre o tipo de aceite será un select, donde las posibilidades son: Picual, Arbequina, Hojiblanca, Cornicabra, Royal, Manzanilla y Gordal. (obligatorio).
El campo con la capacidad de las botellas será numérico (mínimo 1 litro, máximo 5 litros) (obligatorio).
El campo precio de tipo texto.
El campo de tipo texto con la referenciada aceite (obligatorio).
Además del botón insertar, tendremos el botón enviar de tipo submit de tal manera que no envíe nada si la validación de los campos no es correcta.
El fichero JS validará que el precio es numérico y que sea mayor que 0. Hay que comprobar que la capacidad de las botellas sea correcta. El número de serie introducido debe cumplir los siguientes requisitos mediante el uso de expresiones regulares:
 -La longitud debe ser de 6 (ni más ni menos).
 -El número de serie comienza con 1 letra (A..Z).
 -A esta letra le siguen 3 dígitos (números).
 -Finaliza con 2 letras (A..Z).
Ejemplo de número de serie correcto: A256RW
Tras este listado de aceites aparecerá un formulario para insertar nuevos aceites.

El fichero JS debe crear un array de aceites vacío. Pondrá el div donde se muestran los aceites en blanco (limpiará en primer lugar la prueba).
Debe capturar el botón insertar y creará un objeto aceite con los campos: nombre, precio, capacidad y referencia, que serán recogidos del formulario que tenemos en el HTML. Ese objeto será insertado en el array de aceites.
Tras esto mostrará por pantalla el contenido de dicho array de aceites, si se respeta el formato de la prueba los aceites irán apareciendo como se muestra en el html inicial (la imagen es siempre la misma).
Crea un método en la clase aceite que aumente el precio del aceite en un porcentaje pasado como parámetro.
Crea otro método que extraiga de la referencia (mediante el método exec de las expresiones regulares) la primera letra y los números. Si la letra es “A” se trata de aceite virgen, si es “E” se trata de virgen extra y en cualquier otro caso aceite normal. Los números indican la cantidad de litros en una caja de aceite normal, si es extra o virgen la cantidad de litros se le reducirá en unos porcentajes que se pasan como parámetro. El método retornará la cantidad de botellas que se pueden obtener según la capacidad de las botellas.
Haz un método que muestre todos los datos de un objeto aceite.
Haz una prueba de uso de estos métodos.

Crea una clase para objetos vino que herede de la clase aceite. Esta clase tendrá una propiedad nueva que será un array con los nombres de los tipos de uva con la que se hace el vino (Tempranillo, cariñena, Monastrell, Merlot, etc...). En este caso el método que calcula la cantidad de botellas habrá que sobreescribirlo porque es diferente: no recibe parámetros y la cantidad de botellas que retorna equivale a dividir los números de la referencia entre la capacidad de una botella.
El método mostrar tendrá que contemplar la nueva propiedad de los tipos de uva.
Haz un nuevo método que retorne true si el vino en su composición tiene un tipo de uva que se le pasa como parámetro. Si en su composición no está ese tipo de uva debe devolver false.
Haz una prueba de uso de los métodos de la clase vino.

Introduce en el formulario los datos para poder crear un objeto de tipo Vino.
a) Crea un método que devuelva el JSON, después muéstralo.
b) Crea otro método que reciba un texto en formato JSON con los datos de un objeto
Vino y actualice cada una de sus propiedades con los datos de la cadena JSON. Una vez
construido el objeto muestra en la ficha del formulario el objeto obtenido del JSON.
*/

let contenedor = document.getElementById("contenedor");
let tipo = document.getElementsByName("tipo")[0];
let nombre = document.getElementsByName("nombre")[0];
let capacidad = document.getElementsByName("capacidad")[0];
let precio = document.getElementsByName("precio")[0];
let referencia = document.getElementsByName("referencia")[0];
let vacio = document.getElementsByName("vacio")[0];
let uvaslabel = document.getElementById("label");
let uvas = document.getElementsByName("uvas")[0];
let jsontext = document.getElementsByName("jsontext")[0];

let enviar =document.getElementsByName("enviar")[0];

let aceites = new Array();

function nuevo(){
    let uvasvalue = uvas.value;
    console.log(uvasvalue)
    let div = document.createElement("div");
    let arrayuvas = uvasvalue.split(",");
    if(tipo.value == "aceite"){
        div.innerHTML='<h1>'+tipo.value+'</h1><h1>'+nombre.value+'</h1><img src="../Reto 53/aceite.jpg"><h3>'+capacidad.value+'L '+precio.value+'€</h3><h4>Ref:'+referencia.value+'</h4>';
        contenedor.appendChild(div);
        let aceite = new Aceite(nombre.value, precio.value, capacidad.value,referencia.value);
        aceites.push(aceite)
    } else if (tipo.value == "vino"){
        let uvascontainer = "";
        for(const value of arrayuvas){
            uvascontainer += value+" ";
            console.log(value);
        }
        div.innerHTML='<h1>'+tipo.value+'</h1><h1>'+nombre.value+'</h1><img src="../Reto 53/vino.jpg"><h3>'+capacidad.value+'L '+precio.value+'€</h3><h4>Ref:'+referencia.value+'</h4><p>Uvas:'+uvascontainer+'</p>';
        contenedor.appendChild(div);
        let vino = new Vino(nombre.value, precio.value, capacidad.value,referencia.value,arrayuvas);
        aceites.push(vino)
    }
}

function json(){
    for (const value of aceites){
        document.write(JSON.stringify(value));
    }
}

function insertarJson(){
    jsonviceite = jsontext.value;
    console.log(jsonviceite)
    let jsonobject = JSON.parse(jsonviceite);
    let div = document.createElement("div");

    if(jsonobject.uvas == undefined){
        let viceite = new Aceite(jsonobject);
        div.innerHTML='<h1>'+jsonobject.nombre+'</h1><img src="../Reto 53/aceite.jpg"><h3>'+jsonobject.capacidad+'L '+jsonobject.precio+'€</h3><h4>Ref:'+jsonobject.referencia+'</h4>';
        contenedor.appendChild(div);
        aceites.push(viceite);
    } else {
        let viceite = new Vino(jsonobject);
        div.innerHTML='<h1>'+jsonobject.nombre+'</h1><img src="../Reto 53/vino.jpg"><h3>'+jsonobject.capacidad+'L '+jsonobject.precio+'€</h3><h4>Ref:'+jsonobject.referencia+'</h4><h4>uvas:'+jsonobject.uvas+'</h4>';
        contenedor.appendChild(div);
        aceites.push(viceite);
    }
    
}

window.onload = function(){  
    enviar.addEventListener("click", function(event){
        let exRegPrecio = /^[1-9]{1}[0-9]*$/;
        let exRegCapacidad = /^[1-5]$/;
        let exRegReferencia = /^([A-Z][0-9]{3}[A-Z]{2})$/;
        document.write("<h1>ACEITES/VINOS:</h1>");
        for (const value of aceites){ 
            if(exRegPrecio.test(value.precio) && exRegCapacidad.test(value.capacidad) && exRegReferencia.test(value.referencia)){
                 value.mostrar();
            } else {
                event.preventDefault();
                document.write("<br>Aceite/Vino incorrecto");
                alert("Hay 1 o más aceites/vinos incorrectos. Modificalos para enviar el formulario");
            }

        }
    })

    tipo.addEventListener("change", function(){
        if(tipo.value == "vino"){
            uvas.style.visibility="visible";
            uvaslabel.style.visibility="visible";
        } else {
            uvas.style.visibility="hidden";
            uvaslabel.style.visibility="hidden";
        }
    })


}