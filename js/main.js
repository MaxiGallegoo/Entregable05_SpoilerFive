document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* Constantes */
    const BUTTON_TOGGLED_TEXT = "(js_toggled)";
    /* Fin Constantes */

    /*globales*/
    let player = new Player();
    let cancionActual = Math.floor(Math.random() * audios.length);
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
    document.querySelectorAll(".boton_pasar_cancion").forEach(button => {
        button.addEventListener("click", () => {
            cancionActual = Math.floor(Math.random() * audios.length);
            player.reproducir(audios[cancionActual]);
        });
    });

    //LISTENERS

    player.reproducir(audios[cancionActual]);
    //setInterval(function(){player.avanzar1seg(player)}, 1000); //Reproduccion en play(pausado para que no moleste)

    function cargarFavBar() {
        let divFavoritos = document.querySelector("#js-fav-Bar-contenido");
        let i = 0;
        listas.forEach(element => {

            let fila = document.createElement("div");
            let nom = document.createElement("p");
            // nom.style.fontWeight = "bold";
            nom.innerHTML = element.nombre;
            fila.appendChild(nom);
            let image = document.createElement("img");
            image.src = element.imageURL;
            fila.appendChild(image);
            let valora = document.createElement("p");
            let img_estrella = document.createElement("img");
            img_estrella.src="../img/Iconos/Base/Estrella.svg";
            valora.innerHTML = element.valoracion+"/5";
            valora.appendChild(img_estrella);
            // Esconde los no valorados.
            if(element.valoracion<=0)valora.classList.add("hidden");
            fila.appendChild(valora);
            let cant_canciones = document.createElement("p");
            cant_canciones.innerHTML = element.canciones.length+" elementos";
            fila.appendChild(cant_canciones);
            let reprod = document.createElement("p");
            reprod.innerHTML = transformarReproduccionesATexto(element.cant_reproducciones);
            fila.appendChild(reprod);
            fila.addEventListener("click", function () {
                let param1 = "../html/lista_reproduccion.html";
                let param2 = document.querySelector("#js-contenido");
                let param3 = function () { cargarDatosPaginaLista(element) };
                loadPage(param1, param2, param3)
            });
            i++;
            divFavoritos.appendChild(fila);
        });
    }
    function transformarReproduccionesATexto(cant_reproducciones) {
        let final_texto = " reproducciones";
        if (cant_reproducciones < 1000/* Mil */) {
            return cant_reproducciones + final_texto;
        } else if (cant_reproducciones < 1000000/* Millón */) {
            return (Math.floor(cant_reproducciones / 100) / 10) + "K" + final_texto;
        } else {
            return (Math.floor(cant_reproducciones / 100000/* 0.1 Millón */) / 10) + "M" + final_texto;
        }
    }
    function calcularTiempoTotalPlaylist(arreglo_canciones=[]) {
        let segundos = 0;
        arreglo_canciones.forEach(cancion=>{
            segundos+=audios[cancion].duracion;
        });
        return segundosToString(segundos);
    }
    function segundosToString(segundos){//TESTING.
        return Math.floor(segundos/60)+" Minutos " + Math.floor(segundos%60)+ " Segundos";
    }
    function cargarDatosPaginaLista(lista_reproduccion) {
        if (!lista_reproduccion) return;
        cargarTablaDeCancionesParaPaginaPlaylist(lista_reproduccion.canciones);
        document.querySelector("#js-playlist_card").src = lista_reproduccion.imageURL;
        let arr_parrafos = document.querySelectorAll(".js-playlist_data");
        llenarInfoDePaginaPlaylist(arr_parrafos,lista_reproduccion);
    }
    function llenarInfoDePaginaPlaylist(parrafos = [], playlist) {
        parrafos[0].innerHTML = playlist.nombre;
        parrafos[1].innerHTML = playlist.canciones.length + " Canciones";
        parrafos[2].innerHTML = transformarReproduccionesATexto(playlist.cant_reproducciones);
        parrafos[3].innerHTML = calcularTiempoTotalPlaylist(playlist.canciones);
    }

    function cargarTablaDeCancionesParaPaginaPlaylist(lista) {
        let tabla = document.querySelector("#cuerpo_tabla");
        document.querySelector("#js-sort_titulo").addEventListener("click", function(){sortTable(0)});
        document.querySelector("#js-sort_autor").addEventListener("click", function(){sortTable(1)});
        document.querySelector("#js-sort_valoracion").addEventListener("click", function(){sortTable(3)});
        lista.forEach(element => {
            let cancion = audios[element];
            let fila = document.createElement("tr");
            let nom_cancion = document.createElement("td");
            let anchorCancion = document.createElement("a");
            anchorCancion.innerHTML = cancion.nombre_cancion;
            anchorCancion.href = "#";
            anchorCancion.addEventListener("click", function () {
                player.reproducir(
                    audios[element]);
                cancionActual = element;
            });
            nom_cancion.appendChild(anchorCancion);
            fila.appendChild(nom_cancion);
            let autor = document.createElement("td");
            autor.innerHTML = cancion.artista;
            fila.appendChild(autor);
            let duracion = document.createElement("td");
            let tiempo = {
                min: Math.floor(cancion.duracion / 60),
                seg: cancion.duracion % 60
            }
            if (tiempo.seg < 10)
                tiempo.seg = "0" + tiempo.seg;
            duracion.innerHTML = tiempo.min + ":" + tiempo.seg;
            fila.appendChild(duracion);
            let calif = document.createElement("td");
            calif.innerHTML = cancion.calificacion;
            fila.appendChild(calif);
            tabla.appendChild(fila);
        });
    }

    /* Llamado a funciones (al cargar index) */
    cargarFavBar();

    //HELPERS

    async function fetchHtmlAsText(url) {
        return await (await fetch(url)).text();
    }

    async function loadPage(url, container, callback = null) {
        container.innerHTML = await fetchHtmlAsText(url);
        if (callback)
            callback();
    }

    function sortTable(n) {
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("js-tablaPlaylist");
        switching = true;
        // Set the sorting direction to ascending:
        dir = "asc";
        /* Make a loop that will continue until
        no switching has been done: */
        while (switching) {
          // Start by saying: no switching is done:
          switching = false;
          rows = table.rows;
          /* Loop through all table rows (except the
          first, which contains table headers): */
          for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /* Check if the two rows should switch place,
            based on the direction, asc or desc: */
            if (dir == "asc") {
              if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                // If so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
              }
            } else if (dir == "desc") {
              if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                // If so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
              }
            }
          }
          if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount ++;
          } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
              dir = "desc";
              switching = true;
            }
          }
        }
      }


    // TESTING (Borrar al finalizar)





});