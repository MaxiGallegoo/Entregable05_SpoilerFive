document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* Constantes */
    const BUTTON_TOGGLED_TEXT = "(js_toggled)";
    /* Fin Constantes */

    /*globales*/
    let player = new Player();
    let cancionActual=Math.floor(Math.random()*audios.length);
    /*Fin globales*/

    //LISTENERS
        /* Envent Listeners para "togglear" botones */
        document.querySelectorAll(".js-togglable_button").forEach(button => {
            button.addEventListener("click", () => {
                let image = button.querySelector("img");
                let source = image.src;
                if (source && source.includes(BUTTON_TOGGLED_TEXT)) {
                    source = source.replace(BUTTON_TOGGLED_TEXT, "");
                } else {
                    let added_toggled = BUTTON_TOGGLED_TEXT + ".svg";
                    source = source.replace(".svg", added_toggled);
                }
                image.src = source;
            });
        });
        document.querySelectorAll(".boton_pasar_cancion").forEach(button=>{
            button.addEventListener("click", ()=> {
                cancionActual=Math.floor(Math.random()*audios.length);
                player.reproducir(audios[cancionActual]);
            });
        });

    //LISTENERS


    player.reproducir(audios[cancionActual]);
    //setInterval(function(){player.avanzar1seg(player)}, 1000); //Reproduccion en play
    loadPage("../html/lista_reproduccion.html",document.querySelector("#js-contenido"),cargarTabla);
    
    function cargarTabla(){
        let tabla=document.querySelector("#cuerpo_tabla");
        listas[0].canciones.forEach(element => {
            let cancion=audios[element];
            let fila="<tr>"+"<td>"+cancion.nombre_cancion+"</td>"+"<td>"+cancion.artista+"</td>"+"<td>"+cancion.duracion+"</td>"+"<td>"+cancion.calificacion+"</td>"+"</tr>";
            tabla.innerHTML+=fila
        });
    }

    async function fetchHtmlAsText(url) {
        return await (await fetch(url)).text();
    }
    
    async function loadPage(url, container, callback=null) {
        container.innerHTML = await fetchHtmlAsText(url);
        if (callback)
            callback();
    }


});