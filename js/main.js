document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* Constantes */
    const BUTTON_TOGGLED_TEXT = "(js_toggled)";
    // const CANTIDAD_CATEGORIAS_RECOMENDADAS = 4;
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
    document.querySelector("#js-search").addEventListener("click", function () {
        let param1 = "../html/busqueda.html";
        let param2 = document.querySelector("#js-contenido");
        let param3 = function () {
            let clave = document.querySelector("#js-input-search").value;
            cargarBusqueda(clave)
        };
        loadPage(param1, param2, param3);
    });
    document.querySelector("#js-input-search").addEventListener("input", function () {
        let param1 = "../html/busqueda.html";
        let param2 = document.querySelector("#js-contenido");
        let param3 = function () {
            let clave = document.querySelector("#js-input-search").value;
            cargarBusqueda(clave)
        };
        loadPage(param1, param2, param3);
    });

    document.querySelectorAll(".js-button_to_home").forEach(element => {
        element.addEventListener("click", function () {
            let param1 = "../html/recomendaciones.html";
            let param2 = document.querySelector("#js-contenido");
            // let param3 = null;
            let param3 = () => {
                cargarPaginaRecomendados(document.querySelector("#js-container_recomendaciones"));
            }
            loadPage(param1, param2, param3);
        });
    });
    //FIN LISTENERS

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
            image.src = element.imagen;
            fila.appendChild(image);
            let valora = document.createElement("p");
            let img_estrella = document.createElement("img");
            img_estrella.src = "../img/Iconos/Base/Estrella.svg";
            valora.innerHTML = element.valoracion + "/5";
            valora.appendChild(img_estrella);
            // Esconde los no valorados.
            if (element.valoracion <= 0) valora.classList.add("hidden");
            fila.appendChild(valora);
            let cant_canciones = document.createElement("p");
            cant_canciones.innerHTML = element.canciones.length + " elementos";
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
    function calcularTiempoTotalPlaylist(arreglo_canciones = []) {
        let segundos = 0;
        arreglo_canciones.forEach(cancion => {
            segundos += audios[cancion].duracion;
        });
        return segundosToString(segundos);
    }
    function segundosToString(segundos) {//TESTING.
        return Math.floor(segundos / 60) + " Minutos " + Math.floor(segundos % 60) + " Segundos";
    }
    function cargarDatosPaginaLista(lista_reproduccion) {
        if (!lista_reproduccion) return;
        cargarTablaDeCancionesParaPaginaPlaylist(lista_reproduccion.canciones);
        let divValoracion = document.querySelector("#js-valoracion-playlist");
        dibujarEstrellasPlaylist(divValoracion, lista_reproduccion);
        document.querySelector("#js-playlist_card").src = lista_reproduccion.imagen;
        let arr_parrafos = document.querySelectorAll(".js-playlist_data");
        llenarInfoDePaginaPlaylist(arr_parrafos, lista_reproduccion);
    }
    function llenarInfoDePaginaPlaylist(parrafos = [], playlist) {
        parrafos[0].innerHTML = playlist.nombre;
        parrafos[1].innerHTML = playlist.canciones.length + " Canciones";
        parrafos[2].innerHTML = transformarReproduccionesATexto(playlist.cant_reproducciones);
        parrafos[3].innerHTML = calcularTiempoTotalPlaylist(playlist.canciones);
    }
    function cargarDatosPaginaElementoIndividual(elem) {
        if (!elem || !elem.nombre_cancion) return;
        document.querySelector("#js-elem_card").src = elem.imagen;
        let arr_parrafos = document.querySelectorAll(".js-element_data");

        llenarInfoDePaginaElemIndividual(arr_parrafos, elem);
    }
    function llenarInfoDePaginaElemIndividual(parrafos = [], elem) {
        parrafos[0].innerHTML = elem.nombre_cancion;
        parrafos[1].innerHTML = elem.artista;
        parrafos[2].innerHTML = elem.album;
        //Los podcast tienen sección "album" vacía
        if (!elem.album || elem.album == "") parrafos[2].classList.add("js-display_none");
        parrafos[3].innerHTML = elem.año;

    }
    function cargarTablaDeCancionesParaPaginaPlaylist(lista) {
        let tabla = document.querySelector("#cuerpo_tabla");
        document.querySelector("#js-sort_titulo").addEventListener("click", function () { sortTable(0) });
        document.querySelector("#js-sort_autor").addEventListener("click", function () { sortTable(1) });
        document.querySelector("#js-sort_valoracion").addEventListener("click", function () { sortTable(3) });
        lista.forEach(element => {
            let cancion = audios[element];
            // Crea los botones "Play" y "Add" para cada fila.

            let boton_play = document.createElement("button");
            let image_play = document.createElement("img");
            image_play.src = "../img/Iconos/Base/botones_armados/Button_Play.svg";
            boton_play.appendChild(image_play);

            let boton_add = document.createElement("button");
            let image_add = document.createElement("img");
            image_add.src = "../img/Iconos/Base/botones_armados/Button_Add.svg";
            boton_add.appendChild(image_add);

            boton_play.addEventListener("click", function () {
                player.reproducir(
                    audios[element]);
                cancionActual = element;
            });
            let nombre_cancion = document.createElement("a");
            nombre_cancion.innerHTML = cancion.nombre_cancion;
            nombre_cancion.href = "#";
            nombre_cancion.addEventListener("click", () => {
                let param1 = "../html/elemento_individual.html";
                let param2 = document.querySelector("#js-contenido");
                let param3 = function () { cargarDatosPaginaElementoIndividual(cancion) };
                loadPage(param1, param2, param3);
            });

            let fila = document.createElement("tr");
            let primera_celda = document.createElement("td");

            primera_celda.appendChild(boton_play);
            primera_celda.appendChild(nombre_cancion);
            primera_celda.appendChild(boton_add);

            fila.appendChild(primera_celda);
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
    function cargarBusqueda(clave) {
        let listaSalida = listaBusqueda(clave);
        let divSalida = document.querySelector("#js-resultados");
        divSalida.innerHTML = "";
        if (listaSalida.length > 0) {
            listaSalida.forEach(element => {
                let divCard = document.createElement("div");
                divCard.classList.add("individual_card");
                let imgcard = document.createElement("img");
                imgcard.src = element.imagen;
                divCard.append(imgcard);
                divCard.append(document.createElement("div"));
                let btn1 = document.createElement("button");
                let img1 = document.createElement("img");
                img1.src = "../img/Iconos/Base/botones_armados/Button_Add.svg";
                btn1.append(img1);
                divCard.append(btn1);
                let titulo = document.createElement("p");
                titulo.innerHTML = element.nombre_cancion;
                divCard.append(titulo);
                let btn2 = document.createElement("button");
                let img2 = document.createElement("img");
                img2.src = "../img/Iconos/Base/botones_armados/Button_Play.svg";
                btn2.append(img2);
                divCard.append(btn2);

                divSalida.append(divCard);
            });
        }
        else {
            let pe = document.createElement("p");
            pe.innerHTML = "No se encontraron resultados";
            divSalida.append(pe);
        }
    }

    function dibujarEstrellasPlaylist(div, lista) {
        let estrella1 = document.createElement("IMG");
        if (lista.valoracion >= 1) {
            estrella1.src = "../img/Iconos/Base/EstrellaLlena.svg";
            if (lista.valorada)
                estrella1.src = "../img/Iconos/Base/EstrellaLlenaDorada.svg";
        }
        else
            estrella1.src = "../img/Iconos/Base/Estrella.svg";
        let estrella2 = document.createElement("IMG");
        if (lista.valoracion >= 2) {
            estrella2.src = "../img/Iconos/Base/EstrellaLlena.svg";
            if (lista.valorada)
                estrella2.src = "../img/Iconos/Base/EstrellaLlenaDorada.svg";
        }
        else
            estrella2.src = "../img/Iconos/Base/Estrella.svg";
        let estrella3 = document.createElement("IMG");
        if (lista.valoracion >= 3) {
            estrella3.src = "../img/Iconos/Base/EstrellaLlena.svg";
            if (lista.valorada)
                estrella3.src = "../img/Iconos/Base/EstrellaLlenaDorada.svg";
        }
        else
            estrella3.src = "../img/Iconos/Base/Estrella.svg";
        let estrella4 = document.createElement("IMG");
        if (lista.valoracion >= 4) {
            estrella4.src = "../img/Iconos/Base/EstrellaLlena.svg";
            if (lista.valorada)
                estrella4.src = "../img/Iconos/Base/EstrellaLlenaDorada.svg";
        }
        else
            estrella4.src = "../img/Iconos/Base/Estrella.svg";
        let estrella5 = document.createElement("IMG");
        if (lista.valoracion == 5) {
            estrella5.src = "../img/Iconos/Base/EstrellaLlena.svg";
            if (lista.valorada)
                estrella5.src = "../img/Iconos/Base/EstrellaLlenaDorada.svg";
        }
        else
            estrella5.src = "../img/Iconos/Base/Estrella.svg";
        if (div != null)
            div.innerHTML = "";
        div.appendChild(estrella1);
        div.appendChild(estrella2);
        div.appendChild(estrella3);
        div.appendChild(estrella4);
        div.appendChild(estrella5);

        //COMENTAR HASTA EL FINAL SI ROMPE
        let f0 = function () {
            for (let i = 0; i < div.children.length; i++) {
                div.children[i].src = "../img/Iconos/Base/Estrella.svg";
            }
            div.children[0].src = "../img/Iconos/Base/EstrellaLlena.svg";
        }
        let f01 = function () {
            lista.valorada = true;
            lista.valoracion = 1;
        }
        let f1 = function () {
            for (let i = 0; i < div.children.length; i++) {
                div.children[i].src = "../img/Iconos/Base/Estrella.svg";
            }
            div.children[0].src = "../img/Iconos/Base/EstrellaLlena.svg";
            div.children[1].src = "../img/Iconos/Base/EstrellaLlena.svg";
        }
        let f11 = function () {
            lista.valorada = true;
            lista.valoracion = 2;
        }
        let f2 = function () {
            for (let i = 0; i < div.children.length; i++) {
                div.children[i].src = "../img/Iconos/Base/Estrella.svg";
            }
            div.children[0].src = "../img/Iconos/Base/EstrellaLlena.svg";
            div.children[1].src = "../img/Iconos/Base/EstrellaLlena.svg";
            div.children[2].src = "../img/Iconos/Base/EstrellaLlena.svg";
        }
        let f21 = function () {
            lista.valorada = true;
            lista.valoracion = 3;
        }
        let f3 = function () {
            for (let i = 0; i < div.children.length; i++) {
                div.children[i].src = "../img/Iconos/Base/Estrella.svg";
            }
            div.children[0].src = "../img/Iconos/Base/EstrellaLlena.svg";
            div.children[1].src = "../img/Iconos/Base/EstrellaLlena.svg";
            div.children[2].src = "../img/Iconos/Base/EstrellaLlena.svg";
            div.children[3].src = "../img/Iconos/Base/EstrellaLlena.svg";
        }
        let f31 = function () {
            lista.valorada = true;
            lista.valoracion = 4;
        }
        let f4 = function () {
            for (let i = 0; i < div.children.length; i++) {
                div.children[i].src = "../img/Iconos/Base/Estrella.svg";
            }
            div.children[0].src = "../img/Iconos/Base/EstrellaLlena.svg";
            div.children[1].src = "../img/Iconos/Base/EstrellaLlena.svg";
            div.children[2].src = "../img/Iconos/Base/EstrellaLlena.svg";
            div.children[3].src = "../img/Iconos/Base/EstrellaLlena.svg";
            div.children[4].src = "../img/Iconos/Base/EstrellaLlena.svg";
        }
        let f41 = function () {
            lista.valorada = true;
            lista.valoracion = 5;
        }
        let x = function () { dibujarEstrellasPlaylist(div, lista) }
        div.removeEventListener("mouseleave", x.bind(this));
        div.children[0].removeEventListener("mouseover", f0);
        div.children[0].removeEventListener("click", f01);
        div.children[1].removeEventListener("mouseover", f1);
        div.children[1].removeEventListener("click", f11);
        div.children[2].removeEventListener("mouseover", f2);
        div.children[2].removeEventListener("click", f21);
        div.children[3].removeEventListener("mouseover", f3);
        div.children[3].removeEventListener("click", f31);
        div.children[4].removeEventListener("mouseover", f4);
        div.children[4].removeEventListener("click", f41);
        if (!lista.valorada) {
            div.children[0].addEventListener("mouseover", f0);
            div.children[0].addEventListener("click", f01);
            div.children[1].addEventListener("mouseover", f1);
            div.children[1].addEventListener("click", f11);
            div.children[2].addEventListener("mouseover", f2);
            div.children[2].addEventListener("click", f21);
            div.children[3].addEventListener("mouseover", f3);
            div.children[3].addEventListener("click", f31);
            div.children[4].addEventListener("mouseover", f4);
            div.children[4].addEventListener("click", f41);
            let x = function () { dibujarEstrellasPlaylist(div, lista) }
            div.addEventListener("mouseleave", x.bind(this));
        }
    }
    //La idea sería que también reciba como parámetro el modo, y cree las recomendaciones en base a eso.
    //No se si llegaremos a implementarlo. 
    function cargarPaginaRecomendados(container) {
        if(!container)return;

        let child = createElementoCategoria("Recomendado_para_ti", recomendaciones["Recomendado_para_ti"]);
        container.appendChild(child);

        child = createElementoCategoria("Rock_en_Español", recomendaciones["Rock_en_Español"]);
        container.appendChild(child);

        child=createElementoCategoria("Lo_mejor_de_La_Renga", getArtist("La renga"));
        container.appendChild(child);

        child=createElementoCategoria("Podcasts_exclusivos", recomendaciones["Podcasts_exclusivos"]);
        container.appendChild(child);

        child=createElementoCategoria("Tarde_de_Mates", recomendaciones["Tarde_de_Mates"]);
        container.appendChild(child);

        child=createElementoCategoria("Lo_mejor_de_Ac/Dc", getArtist("Ac/Dc"));
        container.appendChild(child);
    }

    function createElementoCategoria(titulo, cards = []) {
        let div = document.createElement("div");
        div.classList.add("categoria_recomendada");
        let title = document.createElement("p");
        titulo = titulo.replaceAll('_', ' ');
        title.innerHTML = titulo;
        div.appendChild(title);
        cards.forEach(c => {
            div.appendChild(createCard(c));
        });
        return div;
    }
    function createCard(c) {

        let nombreAtributo = "nombre_cancion";
        let className = "individual_card";
        if (c.canciones) {
            className = "playlist_card";
            nombreAtributo = "nombre";
        }

        let cardDiv = document.createElement("div");
        cardDiv.classList.add(className);

        let cardImg = document.createElement("img");
        cardImg.classList.add("card_image");
        cardImg.src = c.imagen;

        cardDiv.appendChild(cardImg);

        let effectDiv = document.createElement("div");

        cardDiv.appendChild(effectDiv);

        let buttonAdd = document.createElement("button");
        let imagenAdd = document.createElement("img");
        imagenAdd.src = "../img/Iconos/Base/botones_armados/Button_Add.svg";
        buttonAdd.appendChild(imagenAdd);

        cardDiv.appendChild(buttonAdd);

        let titleP = document.createElement("p");
        titleP.innerHTML = c[nombreAtributo];

        cardDiv.appendChild(titleP);

        let buttonPlay = document.createElement("button");
        let imagenPlay = document.createElement("img");
        imagenPlay.src = "../img/Iconos/Base/botones_armados/Button_Play.svg";
        buttonPlay.appendChild(imagenPlay);
        if (!c.canciones) {
            buttonPlay.addEventListener("click", () => {
                player.reproducir(c);
                // cancionActual = element;
            });
        }

        cardDiv.appendChild(buttonPlay);
        return cardDiv;
    }

    /* Llamado a funciones (al cargar index) */
    cargarFavBar();

    player.reproducir(audios[cancionActual]);
    //setInterval(function(){player.avanzar1seg(player)}, 1000); //Reproduccion en play(pausado para que no moleste)
    loadPage("../html/recomendaciones.html", document.querySelector("#js-contenido"),
     () => {
        cargarPaginaRecomendados(document.querySelector("#js-container_recomendaciones"));
    }
    );

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
                switchcount++;
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





});