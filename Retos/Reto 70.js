/* Uso Api Notification (de notificaciones)
Crea una aplicación web que:
1. Muestre un botón que nos lleve a la página de youtube.
2. Si transcurridos 5 segundos el usuario no pulsa el botón saltará una notificación recordando que no ha pulsado.
3. Al pulsar sobre la notificación nos llevará a la página de youtube
*/

var button = document.getElementsByTagName("input")[0];

var pulsado= false;
function ir(){
window.open("https://www.youtube.com/?gl=ES&hl=es&app=desktop");
pulsado = true;
}

let tiempo = setTimeout(() => {
    if(pulsado == false){
        Notification.requestPermission()
        .then(resp=>{
            if(resp==="granted"){
                let n = new Notification('No has pulsado el boton',{body:"Pulsa aqui y te llevaremos a youtube"})
                n.addEventListener("click", ir)
            } else {
                new Notification('Permiso denegado')
            }        
        })
    }
}, 5000);


