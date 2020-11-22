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
    loadPage("../html/lista_reproduccion.html",document.querySelector("#js-contenido"),function(){cargarTabla(listas[0])});
    
    function cargarTabla(lista){
        let tabla=document.querySelector("#cuerpo_tabla");
        lista.canciones.forEach(element => {
            let cancion=audios[element];
            let fila=document.createElement("tr");
            let nom_cancion=document.createElement("td");
                let anchorCancion=document.createElement("a");
                    anchorCancion.innerHTML=cancion.nombre_cancion;
                    anchorCancion.href="#";
                    anchorCancion.addEventListener("click", function(){player.reproducir(audios[element]);cancionActual=element;});
                nom_cancion.appendChild(anchorCancion);
            fila.appendChild(nom_cancion);
            let autor=document.createElement("td");
                autor.innerHTML=cancion.artista;
            fila.appendChild(autor);
            let duracion=document.createElement("td");
                let tiempo={
                    min:Math.floor(cancion.duracion/60),
                    seg:cancion.duracion%60
                }
                if (tiempo.seg<10)
                    tiempo.seg="0"+tiempo.seg;
                duracion.innerHTML=tiempo.min+":"+tiempo.seg;
            fila.appendChild(duracion);
            let calif=document.createElement("td");
                calif.innerHTML=cancion.calificacion;
            fila.appendChild(calif);
            tabla.appendChild(fila);
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