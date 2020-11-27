//Generic get (No funciona con categorias).
function genericGet(atrib, value) {
    let salida = new Array();
    for (let i = 0; i < audios.length; i++) {
        if (audios[i][atrib] == value)
            salida.push(audios[i]);
    }
    return salida;
}

//Devuelve un array con la primera canción de cada disco
function getAlbums() {
    let salida = new Array();
    let disco = "";
    for (let i = 0; i < audios.length; i++) {
        if (audios[i].tipo_audio == "musica") {
            if (disco != audios[i].album) {
                disco = audios[i].album;
                salida.push(audios[i]);
            }
        }
    }
    return salida;
}

//Devuelve un array con las canciones del album del parámetro
function getAlbum(album) {
    // for (let i=0;i<arreglo.length;i++){
    //     if (arreglo[i].album==album)
    //             salida.push(arreglo[i]);
    // }
    return genericGet("album", album);
}

//Devuelve un array con las canciones del artista del parámetro
function getArtist(artista) {
    return genericGet("artista", artista);
}

//Devuelve un array con las canciones de tipo "podcast"
function getPodcasts() {
    // let salida=new Array();
    // for (let i=0;i<audios.length;i++){
    //     if (audios[i].tipo_audio=="podcast")
    //             salida.push(audios[i]);
    // }
    return genericGet("tipo_audio", "podcast");
}

//Devuelve un array con las canciones del género del parámetro
function getGenero(genero) {
    // let salida=new Array();
    // let disco="";
    // for (let i=0;i<audios.length;i++){
    //     if (audios[i].tipo_audio=="musica"&&audios[i].genero==genero){
    //         if (disco!=audios[i].album){
    //             disco=audios[i].album;
    //             salida.push(audios[i]);
    //         }
    //     }
    // }
    return genericGet("genero", genero);
}
//Devuelve un array con las canciones de la categoría del parámetro
function getCategoria(categoria) {
    let salida = new Array();
    let disco = "";
    for (let i = 0; i < audios.length; i++) {
        if (audios[i].categoria.includes(categoria)) {
            salida.push(audios[i]);
        }
    }
    return salida

}

//Devuelve un array con las canciones que contengan en el artista, el album o la canción algo del parámetro
function listaBusqueda(string) {
    let salida = new Array();
    for (let i = 0; i < audios.length; i++) {
        if (audios[i].album.toLowerCase().includes(string.toLowerCase()) || audios[i].artista.toLowerCase().includes(string.toLowerCase()) || audios[i].nombre_cancion.toLowerCase().includes(string.toLowerCase()))
            salida.push(audios[i]);
    }
    return salida;
}

function getDuracion(arreglo) {
    let salida = 0;
    for (let i = 0; i < arreglo.length; i++) {
        salida += audios[i].duracion;
    }
    return salida;
}

//MODELO DE OBJETO
// {"artista":"",
//     "album":"",
//     "genero":"",
//     "año":2000,
//     "nombre_cancion":"",
//     "duracion":210, //En segundos
//     "imagen":"", //url a la imagen
//     "tipo_audio":"musica", //musica/podcast
//     "categoria":["rock_nac","rock"] //Para armar las listas de recomendados.
//     "calificacion":4, //rango de 1 a 5
//     "valorada":false,
//     "cant_valoraciones":10,
//     "ultimas_valoraciones": [
    //     {
    //         "user":"Andrea",
    //         "val":2
    //     },
    //     {
    //         "user":"Jorge",
    //         "val":4
    //     },
    //     {
    //         "user":"Gabriela",
    //         "val":4
    //     },
    //     {
    //         "user":"Alberto",
    //         "val":3
    //     },
    //     {
    //         "user":"Mariano",
    //         "val":5
    //     }
//     ],
//     "comentarios":[]//array de comentarios en formato json
//    }

let audios = [
    {
        "artista": "Ac/Dc",
        "album": "Highway to hell",
        "genero": "rock",
        "año": 1979,
        "nombre_cancion": "Highway to hell",
        "duracion": 210,
        "imagen": "../img/Card/Artistas_Song/ac_dc.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock", "metal"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }, { "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }, { "user": "user1", "comment": "Este es el comentario del usuario", "premium": false, "fecha": "01/01/2020" }, { "user": "user1", "comment": "Este es el comentario del usuario", "premium": false, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Ac/Dc",
        "album": "Highway to hell",
        "genero": "rock",
        "año": 1979,
        "nombre_cancion": "Girls got rythm",
        "duracion": 206,
        "imagen": "../img/Card/Artistas_Song/ac_dc.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock"],
        "calificacion": 3,
        "valorada": true,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Ac/Dc",
        "album": "Highway to hell",
        "genero": "rock",
        "año": 1979,
        "nombre_cancion": "Walk all over you",
        "duracion": 312,
        "imagen": "../img/Card/Artistas_Song/ac_dc.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock"],
        "calificacion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Ac/Dc",
        "album": "Highway to hell",
        "genero": "rock",
        "año": 1979,
        "nombre_cancion": "Touch too much",
        "duracion": 394,
        "imagen": "../img/Card/Artistas_Song/ac_dc.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Ac/Dc",
        "album": "Highway to hell",
        "genero": "rock",
        "año": 1979,
        "nombre_cancion": "Get it hot",
        "duracion": 157,
        "imagen": "../img/Card/Artistas_Song/ac_dc.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Ac/Dc",
        "album": "Highway to hell",
        "genero": "rock",
        "año": 1979,
        "nombre_cancion": "Love hungry man",
        "duracion": 260,
        "imagen": "../img/Card/Artistas_Song/ac_dc.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock"],
        "calificacion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Aerosmith",
        "album": "Get a grip",
        "genero": "rock",
        "año": 1993,
        "nombre_cancion": "Intro",
        "duracion": 24,
        "imagen": "../img/Card/Artistas_Song/aerosmith.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock", "pop_rock"],
        "calificacion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Aerosmith",
        "album": "Get a grip",
        "genero": "rock",
        "año": 1993,
        "nombre_cancion": "Eat the rich",
        "duracion": 251,
        "imagen": "../img/Card/Artistas_Song/aerosmith.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock", "pop_rock"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Aerosmith",
        "album": "Get a grip",
        "genero": "rock",
        "año": 1993,
        "nombre_cancion": "Get a grip",
        "duracion": 251,
        "imagen": "../img/Card/Artistas_Song/aerosmith.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock", "pop_rock"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Aerosmith",
        "album": "Get a grip",
        "genero": "rock",
        "año": 1993,
        "nombre_cancion": "Fever",
        "duracion": 255,
        "imagen": "../img/Card/Artistas_Song/aerosmith.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock", "pop_rock"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Aerosmith",
        "album": "Get a grip",
        "genero": "rock",
        "año": 1993,
        "nombre_cancion": "Flesh",
        "duracion": 357,
        "imagen": "../img/Card/Artistas_Song/aerosmith.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock"],
        "calificacion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Aerosmith",
        "album": "Get a grip",
        "genero": "rock",
        "año": 1993,
        "nombre_cancion": "Amazing",
        "duracion": 350,
        "imagen": "../img/Card/Artistas_Song/aerosmith.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock", "pop_rock"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Aerosmith",
        "album": "Get a grip",
        "genero": "rock",
        "año": 1993,
        "nombre_cancion": "Crazy",
        "duracion": 314,
        "imagen": "../img/Card/Artistas_Song/aerosmith.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock", "pop_rock"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Bob Marley",
        "album": "Love songs",
        "genero": "reggae",
        "año": 2015,
        "nombre_cancion": "How many times",
        "duracion": 250,
        "imagen": "../img/Card/Artistas_Song/bob_marley.jpg",
        "tipo_audio": "musica",
        "categoria": ["reggae"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Bob Marley",
        "album": "Love songs",
        "genero": "reggae",
        "año": 2015,
        "nombre_cancion": "Sun is shining",
        "duracion": 192,
        "imagen": "../img/Card/Artistas_Song/bob_marley.jpg",
        "tipo_audio": "musica",
        "categoria": ["reggae"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Bob Marley",
        "album": "Love songs",
        "genero": "reggae",
        "año": 2015,
        "nombre_cancion": "It's alright",
        "duracion": 212,
        "imagen": "../img/Card/Artistas_Song/bob_marley.jpg",
        "tipo_audio": "musica",
        "categoria": ["reggae"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Bob Marley",
        "album": "Love songs",
        "genero": "reggae",
        "año": 2015,
        "nombre_cancion": "There she goes",
        "duracion": 212,
        "imagen": "../img/Card/Artistas_Song/bob_marley.jpg",
        "tipo_audio": "musica",
        "categoria": ["reggae"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Bob Marley",
        "album": "Love songs",
        "genero": "reggae",
        "año": 2015,
        "nombre_cancion": "Dreamland",
        "duracion": 314,
        "imagen": "../img/Card/Artistas_Song/bob_marley.jpg",
        "tipo_audio": "musica",
        "categoria": ["reggae"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Bob Marley",
        "album": "Love songs",
        "genero": "reggae",
        "año": 2015,
        "nombre_cancion": "Can't you see",
        "duracion": 249,
        "imagen": "../img/Card/Artistas_Song/bob_marley.jpg",
        "tipo_audio": "musica",
        "categoria": ["reggae"],
        "calificacion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Canserbero",
        "album": "Muerte",
        "genero": "hip hip/rap",
        "año": 2012,
        "nombre_cancion": "C'est la mort",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Canserbero.jpg",
        "tipo_audio": "musica",
        "categoria": ["hip hop/rap", "latino"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Canserbero",
        "album": "Muerte",
        "genero": "hip hip/rap",
        "año": 2012,
        "nombre_cancion": "Es épico",
        "duracion": 362,
        "imagen": "../img/Card/Artistas_Song/Canserbero.jpg",
        "tipo_audio": "musica",
        "categoria": ["hip hop/rap", "latino"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Canserbero",
        "album": "Muerte",
        "genero": "hip hop/rap",
        "año": 2012,
        "nombre_cancion": "Ser vero",
        "duracion": 215,
        "imagen": "../img/Card/Artistas_Song/Canserbero.jpg",
        "tipo_audio": "musica",
        "categoria": ["hip hop/rap", "latino"],
        "calificacion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Canserbero",
        "album": "Muerte",
        "genero": "hip hop/rap",
        "año": 2012,
        "nombre_cancion": "De mi muerte",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Canserbero.jpg",
        "tipo_audio": "musica",
        "categoria": ["hip hop/rap", "latino"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Canserbero",
        "album": "Muerte",
        "genero": "hip hop/rap",
        "año": 2012,
        "nombre_cancion": "La hora del juicio",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Canserbero.jpg",
        "tipo_audio": "musica",
        "categoria": ["hip hop/rap", "latino"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Canserbero",
        "album": "Muerte",
        "genero": "hip hop/rap",
        "año": 2012,
        "nombre_cancion": "Sin mercy",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Canserbero.jpg",
        "tipo_audio": "musica",
        "categoria": ["hip hop/rap", "latino"],
        "calificacion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Canserbero",
        "album": "Muerte",
        "genero": "hip hop/rap",
        "año": 2012,
        "nombre_cancion": "Mundo de piedra",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Canserbero.jpg",
        "tipo_audio": "musica",
        "categoria": ["hip hop/rap", "latino"],
        "calificacion": 1,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Canserbero",
        "album": "Muerte",
        "genero": "hip hop/rap",
        "año": 2012,
        "nombre_cancion": "En el valle de las sombras",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Canserbero.jpg",
        "tipo_audio": "musica",
        "categoria": ["hip hop/rap", "latino"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Gustavo Cerati",
        "album": "Ahí vamos",
        "genero": "rock",
        "año": 2006,
        "nombre_cancion": "Al fin sucede",
        "duracion": 210,
        "imagen": "../img/Card/Artistas_Song/Cerati.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Gustavo Cerati",
        "album": "Ahí vamos",
        "genero": "rock",
        "año": 2006,
        "nombre_cancion": "La excepción",
        "duracion": 210,
        "imagen": "../img/Card/Artistas_Song/Cerati.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Gustavo Cerati",
        "album": "Ahí vamos",
        "genero": "rock",
        "año": 2006,
        "nombre_cancion": "Uno entre 1000",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Cerati.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Gustavo Cerati",
        "album": "Ahí vamos",
        "genero": "rock",
        "año": 2006,
        "nombre_cancion": "Otra piel",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Cerati.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Gustavo Cerati",
        "album": "Ahí vamos",
        "genero": "rock",
        "año": 2006,
        "nombre_cancion": "Jugo de luna",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Cerati.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Gustavo Cerati",
        "album": "Ahí vamos",
        "genero": "rock",
        "año": 2006,
        "nombre_cancion": "Caravana",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Cerati.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Gustavo Cerati",
        "album": "Ahí vamos",
        "genero": "rock",
        "año": 2006,
        "nombre_cancion": "Dios nos libre",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Cerati.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Eminem",
        "album": "Recovery",
        "genero": "hip hop/rap",
        "año": 2010,
        "nombre_cancion": "Cold wind blows",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/eminem.jpg",
        "tipo_audio": "musica",
        "categoria": ["hip hop/rap"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Eminem",
        "album": "Recovery",
        "genero": "hip hop/rap",
        "año": 2010,
        "nombre_cancion": "Talkin' to myself",
        "duracion": 480,
        "imagen": "../img/Card/Artistas_Song/eminem.jpg",
        "tipo_audio": "musica",
        "categoria": ["hip hop/rap"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Eminem",
        "album": "Recovery",
        "genero": "hip hop/rap",
        "año": 2010,
        "nombre_cancion": "On fire",
        "duracion": 389,
        "imagen": "../img/Card/Artistas_Song/eminem.jpg",
        "tipo_audio": "musica",
        "categoria": ["hip hop/rap"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Eminem",
        "album": "Recovery",
        "genero": "hip hop/rap",
        "año": 2010,
        "nombre_cancion": "No love",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/eminem.jpg",
        "tipo_audio": "musica",
        "categoria": ["hip hop/rap"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Eminem",
        "album": "Recovery",
        "genero": "hip hop/rap",
        "año": 2010,
        "nombre_cancion": "Almost famous",
        "duracion": 439,
        "imagen": "../img/Card/Artistas_Song/eminem.jpg",
        "tipo_audio": "musica",
        "categoria": ["hip hop/rap"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Eminem",
        "album": "Recovery",
        "genero": "hip hop/rap",
        "año": 2010,
        "nombre_cancion": "Untitled",
        "duracion": 389,
        "imagen": "../img/Card/Artistas_Song/eminem.jpg",
        "tipo_audio": "musica",
        "categoria": ["hip hop/rap"],
        "calificacion": 1,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Eminem",
        "album": "Recovery",
        "genero": "hip hop/rap",
        "año": 2010,
        "nombre_cancion": "Not afraid",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/eminem.jpg",
        "tipo_audio": "musica",
        "categoria": ["hip hop/rap"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Eminem",
        "album": "Recovery",
        "genero": "hip hop/rap",
        "año": 2010,
        "nombre_cancion": "Cold wind blows",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/eminem.jpg",
        "tipo_audio": "musica",
        "categoria": ["hip hop/rap"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Eminem",
        "album": "Recovery",
        "genero": "hip hop/rap",
        "año": 2010,
        "nombre_cancion": "Cinderella man",
        "duracion": 280,
        "imagen": "../img/Card/Artistas_Song/eminem.jpg",
        "tipo_audio": "musica",
        "categoria": ["hip hop/rap"],
        "calificacion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Eminem",
        "album": "Recovery",
        "genero": "hip hop/rap",
        "año": 2010,
        "nombre_cancion": "On fire",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/eminem.jpg",
        "tipo_audio": "musica",
        "categoria": ["hip hop/rap"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Guns n' roses",
        "album": "Mr. Brownstone",
        "genero": "rock",
        "año": 2019,
        "nombre_cancion": "Down on the farm",
        "duracion": 439,
        "imagen": "../img/Card/Artistas_Song/guns_and_roses.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Guns n' roses",
        "album": "Mr. Brownstone",
        "genero": "rock",
        "año": 2019,
        "nombre_cancion": "It's so easy",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/guns_and_roses.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock"],
        "calificacion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Guns n' roses",
        "album": "Mr. Brownstone",
        "genero": "rock",
        "año": 2019,
        "nombre_cancion": "Mr. Brownstone (live)",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/guns_and_roses.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock", "live_rock"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Guns n' roses",
        "album": "Mr. Brownstone",
        "genero": "rock",
        "año": 2019,
        "nombre_cancion": "Live and let die",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/guns_and_roses.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock", "clasic_rock", "cover_rock"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Guns n' roses",
        "album": "Mr. Brownstone",
        "genero": "rock",
        "año": 2019,
        "nombre_cancion": "Out ta get me",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/guns_and_roses.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Guns n' roses",
        "album": "Mr. Brownstone",
        "genero": "rock",
        "año": 2019,
        "nombre_cancion": "My Michelle",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/guns_and_roses.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock"],
        "calificacion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Guns n' roses",
        "album": "Mr. Brownstone",
        "genero": "rock",
        "año": 2019,
        "nombre_cancion": "Free Fallin'",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/guns_and_roses.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Guns n' roses",
        "album": "Mr. Brownstone",
        "genero": "rock",
        "año": 2019,
        "nombre_cancion": "Patience",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/guns_and_roses.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock", "romantic_rock", "balada_rock"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Guns n' roses",
        "album": "Mr. Brownstone",
        "genero": "rock",
        "año": 2019,
        "nombre_cancion": "Civil war",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/guns_and_roses.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock", "balada_rock"],
        "calificacion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Guns n' roses",
        "album": "Mr. Brownstone",
        "genero": "rock",
        "año": 2019,
        "nombre_cancion": "Knockin on heavens doors",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/guns_and_roses.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock", "balada_rock"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Guns n' roses",
        "album": "Mr. Brownstone",
        "genero": "rock",
        "año": 2019,
        "nombre_cancion": "Wild horses",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/guns_and_roses.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Guns n' roses",
        "album": "Mr. Brownstone",
        "genero": "rock",
        "año": 2019,
        "nombre_cancion": "Paradise City",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/guns_and_roses.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Intoxicados",
        "album": "Otro dia en el planeta tierra",
        "genero": "rock",
        "año": 2005,
        "nombre_cancion": "Intro",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/intoxicados.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 1,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Intoxicados",
        "album": "Otro dia en el planeta tierra",
        "genero": "rock",
        "año": 2005,
        "nombre_cancion": "Niña de Tilcara",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/intoxicados.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Intoxicados",
        "album": "Otro dia en el planeta tierra",
        "genero": "rock",
        "año": 2005,
        "nombre_cancion": "Nunca quise",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/intoxicados.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Intoxicados",
        "album": "Otro dia en el planeta tierra",
        "genero": "rock",
        "año": 2005,
        "nombre_cancion": "Necesito",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/intoxicados.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Intoxicados",
        "album": "Otro dia en el planeta tierra",
        "genero": "rock",
        "año": 2005,
        "nombre_cancion": "Transan",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/intoxicados.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Intoxicados",
        "album": "Otro dia en el planeta tierra",
        "genero": "rock",
        "año": 2005,
        "nombre_cancion": "Espero que la vida",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/intoxicados.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Intoxicados",
        "album": "Otro dia en el planeta tierra",
        "genero": "rock",
        "año": 2005,
        "nombre_cancion": "Duermete niño",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/intoxicados.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Intoxicados",
        "album": "Otro dia en el planeta tierra",
        "genero": "rock",
        "año": 2005,
        "nombre_cancion": "Hermano Tolueno",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/intoxicados.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Intoxicados",
        "album": "No es solo rock and roll",
        "genero": "rock",
        "año": 2003,
        "nombre_cancion": "Está saliendo el sol",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/intoxicados2.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Intoxicados",
        "album": "No es solo rock and roll",
        "genero": "rock",
        "año": 2003,
        "nombre_cancion": "Volver a casa",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/intoxicados2.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Intoxicados",
        "album": "No es solo rock and roll",
        "genero": "rock",
        "año": 2003,
        "nombre_cancion": "De la guitarra",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/intoxicados2.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Intoxicados",
        "album": "No es solo rock and roll",
        "genero": "rock",
        "año": 2003,
        "nombre_cancion": "Reggae para los amigos",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/intoxicados2.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock", "reggae"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Intoxicados",
        "album": "No es solo rock and roll",
        "genero": "rock",
        "año": 2003,
        "nombre_cancion": "Una vela",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/intoxicados2.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Intoxicados",
        "album": "No es solo rock and roll",
        "genero": "rock",
        "año": 2003,
        "nombre_cancion": "Rodando por ahí",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/intoxicados2.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Intoxicados",
        "album": "No es solo rock and roll",
        "genero": "rock",
        "año": 2003,
        "nombre_cancion": "Don electrón",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/intoxicados2.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "La renga",
        "album": "Despedazado por mil partes",
        "genero": "rock",
        "año": 1996,
        "nombre_cancion": "Desnudo para siempre",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/La_renga.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock", "metal"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "La renga",
        "album": "Despedazado por mil partes",
        "genero": "rock",
        "año": 1996,
        "nombre_cancion": "A la carga mi rocanrol",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/La_renga.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock", "metal"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "La renga",
        "album": "Despedazado por mil partes",
        "genero": "rock",
        "año": 1996,
        "nombre_cancion": "El final es en donde partí",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/La_renga.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock", "metal"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "La renga",
        "album": "Despedazado por mil partes",
        "genero": "rock",
        "año": 1996,
        "nombre_cancion": "Cuándo vendrán",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/La_renga.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock", "metal"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "La renga",
        "album": "Despedazado por mil partes",
        "genero": "rock",
        "año": 1996,
        "nombre_cancion": "Paja brava",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/La_renga.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock", "metal"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "La renga",
        "album": "Despedazado por mil partes",
        "genero": "rock",
        "año": 1996,
        "nombre_cancion": "Veneno",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/La_renga.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock", "balada_rock"],
        "calificacion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "La renga",
        "album": "Despedazado por mil partes",
        "genero": "rock",
        "año": 1996,
        "nombre_cancion": "Hablando de la libertad",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/La_renga.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock", "metal"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "La vela puerca",
        "album": "A contraluz",
        "genero": "rock",
        "año": 2004,
        "nombre_cancion": "A contraluz",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/La_vela_puerca.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "latino"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "La vela puerca",
        "album": "A contraluz",
        "genero": "rock",
        "año": 2004,
        "nombre_cancion": "Sin palabras",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/La_vela_puerca.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "latino"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "La vela puerca",
        "album": "A contraluz",
        "genero": "rock",
        "año": 2004,
        "nombre_cancion": "Dice",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/La_vela_puerca.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "latino"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "La vela puerca",
        "album": "A contraluz",
        "genero": "rock",
        "año": 2004,
        "nombre_cancion": "De atar",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/La_vela_puerca.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "latino"],
        "calificacion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "La vela puerca",
        "album": "A contraluz",
        "genero": "rock",
        "año": 2004,
        "nombre_cancion": "Va a escampar",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/La_vela_puerca.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "latino", "balada_rock"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "La vela puerca",
        "album": "A contraluz",
        "genero": "rock",
        "año": 2004,
        "nombre_cancion": "Escobas",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/La_vela_puerca.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "latino", "reggae"],
        "calificacion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "La vela puerca",
        "album": "A contraluz",
        "genero": "rock",
        "año": 2004,
        "nombre_cancion": "En el limbo",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/La_vela_puerca.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "latino", "balada_rock"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Linkin Park",
        "album": "Meteora",
        "genero": "rock",
        "año": 2003,
        "nombre_cancion": "Foreward",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Linkin_park.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_ing"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Linkin Park",
        "album": "Meteora",
        "genero": "rock",
        "año": 2003,
        "nombre_cancion": "Don't stay",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Linkin_park.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_ing"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Linkin Park",
        "album": "Meteora",
        "genero": "rock",
        "año": 2003,
        "nombre_cancion": "Somewhere I belong",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Linkin_park.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_ing"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Linkin Park",
        "album": "Meteora",
        "genero": "rock",
        "año": 2003,
        "nombre_cancion": "Lying from you",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Linkin_park.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_ing"],
        "calificacion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Linkin Park",
        "album": "Meteora",
        "genero": "rock",
        "año": 2003,
        "nombre_cancion": "Hit the floor",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Linkin_park.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_ing"],
        "calificacion": 1,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Linkin Park",
        "album": "Meteora",
        "genero": "rock",
        "año": 2003,
        "nombre_cancion": "From the inside",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Linkin_park.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_ing"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los Cafres",
        "album": "Suena la alarma",
        "genero": "reggae",
        "año": 1997,
        "nombre_cancion": "Pobre angelito",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/los_cafres.jpg",
        "tipo_audio": "musica",
        "categoria": ["raggae", "latino"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los Cafres",
        "album": "Suena la alarma",
        "genero": "reggae",
        "año": 1997,
        "nombre_cancion": "Capitán pelusa",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/los_cafres.jpg",
        "tipo_audio": "musica",
        "categoria": ["raggae", "latino"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los Cafres",
        "album": "Suena la alarma",
        "genero": "reggae",
        "año": 1997,
        "nombre_cancion": "Ruge la barra",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/los_cafres.jpg",
        "tipo_audio": "musica",
        "categoria": ["raggae", "latino"],
        "calificacion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los Cafres",
        "album": "Suena la alarma",
        "genero": "reggae",
        "año": 1997,
        "nombre_cancion": "Flor de potrero",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/los_cafres.jpg",
        "tipo_audio": "musica",
        "categoria": ["raggae", "latino"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los Cafres",
        "album": "Suena la alarma",
        "genero": "reggae",
        "año": 1997,
        "nombre_cancion": "Tus ojos",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/los_cafres.jpg",
        "tipo_audio": "musica",
        "categoria": ["raggae", "latino"],
        "calificacion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los Cafres",
        "album": "Suena la alarma",
        "genero": "reggae",
        "año": 1997,
        "nombre_cancion": "Chau!",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/los_cafres.jpg",
        "tipo_audio": "musica",
        "categoria": ["raggae", "latino"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los del fuego",
        "album": "Por siempre",
        "genero": "cumbia",
        "año": 2019,
        "nombre_cancion": "Eres mi amor",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/los_del_fuego.jpg",
        "tipo_audio": "musica",
        "categoria": ["cumbia", "latino", "bailable", "cumbia_tradicional"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los del fuego",
        "album": "Por siempre",
        "genero": "cumbia",
        "año": 2019,
        "nombre_cancion": "Amor de verdad",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/los_del_fuego.jpg",
        "tipo_audio": "musica",
        "categoria": ["cumbia", "latino", "bailable", "cumbia_tradicional"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los del fuego",
        "album": "Por siempre",
        "genero": "cumbia",
        "año": 2019,
        "nombre_cancion": "Dulce niña mía",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/los_del_fuego.jpg",
        "tipo_audio": "musica",
        "categoria": ["cumbia", "latino", "bailable", "cumbia_tradicional"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los del fuego",
        "album": "Por siempre",
        "genero": "cumbia",
        "año": 2019,
        "nombre_cancion": "Maravillosa esta noche",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/los_del_fuego.jpg",
        "tipo_audio": "musica",
        "categoria": ["cumbia", "latino", "bailable", "cumbia_tradicional"],
        "calificacion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los del fuego",
        "album": "Por siempre",
        "genero": "cumbia",
        "año": 2019,
        "nombre_cancion": "No voy a mentirte",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/los_del_fuego.jpg",
        "tipo_audio": "musica",
        "categoria": ["cumbia", "latino", "bailable", "cumbia_tradicional"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los del fuego",
        "album": "Por siempre",
        "genero": "cumbia",
        "año": 2019,
        "nombre_cancion": "Otras como tú",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/los_del_fuego.jpg",
        "tipo_audio": "musica",
        "categoria": ["cumbia", "latino", "bailable", "cumbia_tradicional"],
        "calificacion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los Palmeras",
        "album": "Chiquita pero buena",
        "genero": "cumbia",
        "año": 1990,
        "nombre_cancion": "oh! Monica",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/los_palmeras.jpg",
        "tipo_audio": "musica",
        "categoria": ["cumbia", "latino", "bailable", "cumbia_tradicional"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los Palmeras",
        "album": "Chiquita pero buena",
        "genero": "cumbia",
        "año": 1990,
        "nombre_cancion": "Morena te llamo",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/los_palmeras.jpg",
        "tipo_audio": "musica",
        "categoria": ["cumbia", "latino", "bailable", "cumbia_tradicional"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los Palmeras",
        "album": "Chiquita pero buena",
        "genero": "cumbia",
        "año": 1990,
        "nombre_cancion": "Esperando una llamada",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/los_palmeras.jpg",
        "tipo_audio": "musica",
        "categoria": ["cumbia", "latino", "bailable", "cumbia_tradicional"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los Palmeras",
        "album": "Chiquita pero buena",
        "genero": "cumbia",
        "año": 1990,
        "nombre_cancion": "Estás con él",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/los_palmeras.jpg",
        "tipo_audio": "musica",
        "categoria": ["cumbia", "latino", "bailable", "cumbia_tradicional"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los Palmeras",
        "album": "Chiquita pero buena",
        "genero": "cumbia",
        "año": 1990,
        "nombre_cancion": "Sin tu amor",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/los_palmeras.jpg",
        "tipo_audio": "musica",
        "categoria": ["cumbia", "latino", "bailable", "cumbia_tradicional"],
        "calificacion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los Palmeras",
        "album": "Chiquita pero buena",
        "genero": "cumbia",
        "año": 1990,
        "nombre_cancion": "Dame tu amor",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/los_palmeras.jpg",
        "tipo_audio": "musica",
        "categoria": ["cumbia", "latino", "bailable", "cumbia_tradicional"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los Redondos",
        "album": "Oktubre",
        "genero": "rock",
        "año": 1986,
        "nombre_cancion": "Fuegos de octubre",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Los_Redondos.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los Redondos",
        "album": "Oktubre",
        "genero": "rock",
        "año": 1986,
        "nombre_cancion": "Preso en mi ciudad",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Los_Redondos.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los Redondos",
        "album": "Oktubre",
        "genero": "rock",
        "año": 1986,
        "nombre_cancion": "Música para pastillas",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Los_Redondos.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los Redondos",
        "album": "Oktubre",
        "genero": "rock",
        "año": 1986,
        "nombre_cancion": "Semen-up",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Los_Redondos.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los Redondos",
        "album": "Oktubre",
        "genero": "rock",
        "año": 1986,
        "nombre_cancion": "Jijiji",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Los_Redondos.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock", "clasic_rock"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los Redondos",
        "album": "Oktubre",
        "genero": "rock",
        "año": 1986,
        "nombre_cancion": "Canción para náufragos",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Los_Redondos.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los tipitos",
        "album": "Tipitorex",
        "genero": "rock",
        "año": 1986,
        "nombre_cancion": "Búsquenla",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Los_Tipitos.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los tipitos",
        "album": "Tipitorex",
        "genero": "rock",
        "año": 1986,
        "nombre_cancion": "En el cielo",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Los_Tipitos.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los tipitos",
        "album": "Tipitorex",
        "genero": "rock",
        "año": 1986,
        "nombre_cancion": "El pasillo mágico",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Los_Tipitos.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los tipitos",
        "album": "Tipitorex",
        "genero": "rock",
        "año": 1986,
        "nombre_cancion": "canción cósmica",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Los_Tipitos.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los tipitos",
        "album": "Tipitorex",
        "genero": "rock",
        "año": 1986,
        "nombre_cancion": "Sabados blancos",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Los_Tipitos.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Los tipitos",
        "album": "Tipitorex",
        "genero": "rock",
        "año": 1986,
        "nombre_cancion": "Reality show",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Los_Tipitos.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_nac", "rock"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Metallica",
        "album": "Black album",
        "genero": "rock",
        "año": 1991,
        "nombre_cancion": "Enter sandman",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/metallica.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock", "metal", "clasic_rock"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Metallica",
        "album": "Black album",
        "genero": "rock",
        "año": 1991,
        "nombre_cancion": "Sad but true",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/metallica.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock", "metal"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Metallica",
        "album": "Black album",
        "genero": "rock",
        "año": 1991,
        "nombre_cancion": "Holier than thou",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/metallica.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock", "metal"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Metallica",
        "album": "Black album",
        "genero": "rock",
        "año": 1991,
        "nombre_cancion": "The unforgiven",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/metallica.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock", "metal", "clasic_rock"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Metallica",
        "album": "Black album",
        "genero": "rock",
        "año": 1991,
        "nombre_cancion": "don't tread on me",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/metallica.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock", "metal"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Metallica",
        "album": "Black album",
        "genero": "rock",
        "año": 1991,
        "nombre_cancion": "My friend of misery",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/metallica.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock", "metal"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Metallica",
        "album": "Black album",
        "genero": "rock",
        "año": 1991,
        "nombre_cancion": "Nothing else matters",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/metallica.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock_ing", "rock", "metal", "clasic_rock"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Michael Jackson",
        "album": "Thriller",
        "genero": "pop",
        "año": 1982,
        "nombre_cancion": "Wanna be startin' something",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Michael_Jackson.jpg",
        "tipo_audio": "musica",
        "categoria": ["pop"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Michael Jackson",
        "album": "Thriller",
        "genero": "pop",
        "año": 1982,
        "nombre_cancion": "Baby be mine",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Michael_Jackson.jpg",
        "tipo_audio": "musica",
        "categoria": ["pop"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Michael Jackson",
        "album": "Thriller",
        "genero": "pop",
        "año": 1982,
        "nombre_cancion": "Thriller",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Michael_Jackson.jpg",
        "tipo_audio": "musica",
        "categoria": ["pop"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Michael Jackson",
        "album": "Thriller",
        "genero": "pop",
        "año": 1982,
        "nombre_cancion": "Beat it",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Michael_Jackson.jpg",
        "tipo_audio": "musica",
        "categoria": ["pop"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Michael Jackson",
        "album": "Thriller",
        "genero": "pop",
        "año": 1982,
        "nombre_cancion": "human nature",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Michael_Jackson.jpg",
        "tipo_audio": "musica",
        "categoria": ["pop"],
        "calificacion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Michael Jackson",
        "album": "Thriller",
        "genero": "pop",
        "año": 1982,
        "nombre_cancion": "Billie jean",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Michael_Jackson.jpg",
        "tipo_audio": "musica",
        "categoria": ["pop"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Nirvana",
        "album": "In utero",
        "genero": "rock",
        "año": 1993,
        "nombre_cancion": "Serve the servants",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/nirvana.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_ing", "alternative_rock"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Nirvana",
        "album": "In utero",
        "genero": "rock",
        "año": 1993,
        "nombre_cancion": "Scentless apprentice",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/nirvana.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_ing", "alternative_rock"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Nirvana",
        "album": "In utero",
        "genero": "rock",
        "año": 1993,
        "nombre_cancion": "Rape me",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/nirvana.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_ing", "alternative_rock"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Nirvana",
        "album": "In utero",
        "genero": "rock",
        "año": 1993,
        "nombre_cancion": "Pennyroyal tea",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/nirvana.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_ing", "alternative_rock"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Nirvana",
        "album": "In utero",
        "genero": "rock",
        "año": 1993,
        "nombre_cancion": "tourette's",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/nirvana.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_ing", "alternative_rock"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Nonpalidece",
        "album": "Hagan correr la voz",
        "genero": "reggae",
        "año": 2006,
        "nombre_cancion": "Reggae en el universo",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/nonpalidece.jpg",
        "tipo_audio": "musica",
        "categoria": ["raggae", "latino"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Nonpalidece",
        "album": "Hagan correr la voz",
        "genero": "reggae",
        "año": 2006,
        "nombre_cancion": "Tu presencia",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/nonpalidece.jpg",
        "tipo_audio": "musica",
        "categoria": ["raggae", "latino"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Nonpalidece",
        "album": "Hagan correr la voz",
        "genero": "reggae",
        "año": 2006,
        "nombre_cancion": "Love song",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/nonpalidece.jpg",
        "tipo_audio": "musica",
        "categoria": ["raggae", "latino"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Nonpalidece",
        "album": "Hagan correr la voz",
        "genero": "reggae",
        "año": 2006,
        "nombre_cancion": "Danger man",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/nonpalidece.jpg",
        "tipo_audio": "musica",
        "categoria": ["raggae", "latino"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Nonpalidece",
        "album": "Hagan correr la voz",
        "genero": "reggae",
        "año": 2006,
        "nombre_cancion": "Mi fortaleza",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/nonpalidece.jpg",
        "tipo_audio": "musica",
        "categoria": ["raggae", "latino"],
        "calificacion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Nonpalidece",
        "album": "Hagan correr la voz",
        "genero": "reggae",
        "año": 2006,
        "nombre_cancion": "Libre al fin",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/nonpalidece.jpg",
        "tipo_audio": "musica",
        "categoria": ["raggae", "latino"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Nonpalidece",
        "album": "Hagan correr la voz",
        "genero": "reggae",
        "año": 2006,
        "nombre_cancion": "X-plotion",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/nonpalidece.jpg",
        "tipo_audio": "musica",
        "categoria": ["raggae", "latino"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Papo's blues",
        "album": "Volumen 1",
        "genero": "rock",
        "año": 1971,
        "nombre_cancion": "Algo ha cambiado",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Pappos_Blues.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_nac"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Papo's blues",
        "album": "Volumen 1",
        "genero": "rock",
        "año": 1971,
        "nombre_cancion": "El viejo",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Pappos_Blues.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_nac", "clasic_rock"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Papo's blues",
        "album": "Volumen 1",
        "genero": "rock",
        "año": 1971,
        "nombre_cancion": "Gris y amarillo",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Pappos_Blues.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_nac"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Papo's blues",
        "album": "Volumen 1",
        "genero": "rock",
        "año": 1971,
        "nombre_cancion": "El hombre suburbano",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/Pappos_Blues.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_nac"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Pink Floyd",
        "album": "Dark side of the moon",
        "genero": "rock",
        "año": 1973,
        "nombre_cancion": "Speak to me",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/pink floyd.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_ing"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Pink Floyd",
        "album": "Dark side of the moon",
        "genero": "rock",
        "año": 1973,
        "nombre_cancion": "On the run",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/pink floyd.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_ing", "alternative_rock"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Pink Floyd",
        "album": "Dark side of the moon",
        "genero": "rock",
        "año": 1973,
        "nombre_cancion": "Time",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/pink floyd.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_ing"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Pink Floyd",
        "album": "Dark side of the moon",
        "genero": "rock",
        "año": 1973,
        "nombre_cancion": "the great gig in the sky",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/pink floyd.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_ing"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Pink Floyd",
        "album": "Dark side of the moon",
        "genero": "rock",
        "año": 1973,
        "nombre_cancion": "Money",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/pink floyd.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_ing"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Pink Floyd",
        "album": "Dark side of the moon",
        "genero": "rock",
        "año": 1973,
        "nombre_cancion": "Us an them",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/pink floyd.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_ing", "alternative_rock"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Pink Floyd",
        "album": "Dark side of the moon",
        "genero": "rock",
        "año": 1973,
        "nombre_cancion": "Any colour you like",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/pink floyd.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_ing"],
        "calificacion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Red Hot Chili Peppers",
        "album": "Californication",
        "genero": "rock",
        "año": 1999,
        "nombre_cancion": "Around the world",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/red_hot_chili_peppers.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_ing", "alternative_rock"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Red Hot Chili Peppers",
        "album": "Californication",
        "genero": "rock",
        "año": 1999,
        "nombre_cancion": "How strong",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/red_hot_chili_peppers.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_ing", "alternative_rock"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Red Hot Chili Peppers",
        "album": "Californication",
        "genero": "rock",
        "año": 1999,
        "nombre_cancion": "Parallel Universe",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/red_hot_chili_peppers.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_ing", "alternative_rock"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Red Hot Chili Peppers",
        "album": "Californication",
        "genero": "rock",
        "año": 1999,
        "nombre_cancion": "Otherside",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/red_hot_chili_peppers.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_ing", "alternative_rock", "clasic_rock"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Red Hot Chili Peppers",
        "album": "Californication",
        "genero": "rock",
        "año": 1999,
        "nombre_cancion": "Get on top",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/red_hot_chili_peppers.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_ing", "alternative_rock"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Red Hot Chili Peppers",
        "album": "Californication",
        "genero": "rock",
        "año": 1999,
        "nombre_cancion": "Easily",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/red_hot_chili_peppers.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_ing", "alternative_rock"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Red Hot Chili Peppers",
        "album": "Californication",
        "genero": "rock",
        "año": 1999,
        "nombre_cancion": "Porcelain",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/red_hot_chili_peppers.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_ing", "alternative_rock"],
        "calificacion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Red Hot Chili Peppers",
        "album": "Californication",
        "genero": "rock",
        "año": 1999,
        "nombre_cancion": "I like dirt",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/red_hot_chili_peppers.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_ing", "alternative_rock"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Red Hot Chili Peppers",
        "album": "Californication",
        "genero": "rock",
        "año": 1999,
        "nombre_cancion": "Savior",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/red_hot_chili_peppers.jpg",
        "tipo_audio": "musica",
        "categoria": ["rock", "rock_ing", "alternative_rock"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Rodrigo",
        "album": "Lo mejor del amor",
        "genero": "cumbia",
        "año": 1996,
        "nombre_cancion": "El divorcio",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/rodrigo.jpg",
        "tipo_audio": "musica",
        "categoria": ["cumbia", "latino", "bailable"],
        "calificacion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Rodrigo",
        "album": "Lo mejor del amor",
        "genero": "cumbia",
        "año": 1996,
        "nombre_cancion": "Lo mejor del amor",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/rodrigo.jpg",
        "tipo_audio": "musica",
        "categoria": ["cumbia", "latino", "bailable", "cumbia_tradicional"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Rodrigo",
        "album": "Lo mejor del amor",
        "genero": "cumbia",
        "año": 1996,
        "nombre_cancion": "Himno del cucumelo",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/rodrigo.jpg",
        "tipo_audio": "musica",
        "categoria": ["cumbia", "latino", "bailable"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Rodrigo",
        "album": "Lo mejor del amor",
        "genero": "cumbia",
        "año": 1996,
        "nombre_cancion": "El amor de esa mujer",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/rodrigo.jpg",
        "tipo_audio": "musica",
        "categoria": ["cumbia", "latino", "bailable"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Rodrigo",
        "album": "Lo mejor del amor",
        "genero": "cumbia",
        "año": 1996,
        "nombre_cancion": "El muñeco",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/rodrigo.jpg",
        "tipo_audio": "musica",
        "categoria": ["cumbia", "latino", "bailable"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Rodrigo",
        "album": "Lo mejor del amor",
        "genero": "cumbia",
        "año": 1996,
        "nombre_cancion": "La humanidad",
        "duracion": 489,
        "imagen": "../img/Card/Artistas_Song/rodrigo.jpg",
        "tipo_audio": "musica",
        "categoria": ["cumbia", "latino", "bailable"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "La venganza será terrible",
        "album": "",
        "genero": "",
        "año": 1996,
        "nombre_cancion": "Transmisión 10/2020",
        "duracion": 1500,
        "imagen": "../img/Card/Podcast/lavenganza.jpg",
        "tipo_audio": "podcast",
        "categoria": ["podcast", "humor", "comediante_nacional"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "La venganza será terrible",
        "album": "",
        "genero": "",
        "año": 1996,
        "nombre_cancion": "Transmisión 9/2020",
        "duracion": 1400,
        "imagen": "../img/Card/Podcast/lavenganza.jpg",
        "tipo_audio": "podcast",
        "categoria": ["podcast", "humor", "comediante_nacional"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "La venganza será terrible",
        "album": "",
        "genero": "",
        "año": 1996,
        "nombre_cancion": "Transmisión 7/2020",
        "duracion": 1500,
        "imagen": "../img/Card/Podcast/lavenganza.jpg",
        "tipo_audio": "podcast",
        "categoria": ["podcast", "humor", "comediante_nacional"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "La venganza será terrible",
        "album": "",
        "genero": "",
        "año": 1996,
        "nombre_cancion": "Transmisión 3/2020",
        "duracion": 1500,
        "imagen": "../img/Card/Podcast/lavenganza.jpg",
        "tipo_audio": "podcast",
        "categoria": ["podcast", "humor", "comediante_nacional"],
        "calificacion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "coding train",
        "album": "",
        "genero": "",
        "año": 1996,
        "nombre_cancion": "Learning P5",
        "duracion": 1200,
        "imagen": "../img/Card/Podcast/codingtrain.jpg",
        "tipo_audio": "podcast",
        "categoria": ["podcast", "estudio", "coding"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "coding train",
        "album": "",
        "genero": "",
        "año": 1996,
        "nombre_cancion": "Making an api",
        "duracion": 1200,
        "imagen": "../img/Card/Podcast/codingtrain.jpg",
        "tipo_audio": "podcast",
        "categoria": ["podcast", "estudio", "coding"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "coding train",
        "album": "",
        "genero": "",
        "año": 1996,
        "nombre_cancion": "coding without borders",
        "duracion": 1200,
        "imagen": "../img/Card/Podcast/codingtrain.jpg",
        "tipo_audio": "podcast",
        "categoria": ["podcast", "estudio", "coding"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Fútbol para todos",
        "album": "",
        "genero": "",
        "año": 1996,
        "nombre_cancion": "Análisis del último mundial",
        "duracion": 1300,
        "imagen": "../img/Card/Podcast/futbol.jpg",
        "tipo_audio": "podcast",
        "categoria": ["podcast", "deporte", "futbol"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Fútbol para todos",
        "album": "",
        "genero": "",
        "año": 1996,
        "nombre_cancion": "Jugadas asombrosas",
        "duracion": 1300,
        "imagen": "../img/Card/Podcast/futbol.jpg",
        "tipo_audio": "podcast",
        "categoria": ["podcast", "deporte", "futbol"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Fútbol para todos",
        "album": "",
        "genero": "",
        "año": 1996,
        "nombre_cancion": "Último torneo",
        "duracion": 1300,
        "imagen": "../img/Card/Podcast/futbol.jpg",
        "tipo_audio": "podcast",
        "categoria": ["podcast", "deporte", "futbol"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Hacking",
        "album": "",
        "genero": "",
        "año": 1996,
        "nombre_cancion": "Hacking scene",
        "duracion": 1300,
        "imagen": "../img/Card/Podcast/hacking.jpg",
        "tipo_audio": "podcast",
        "categoria": ["podcast", "coding"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Hacking",
        "album": "",
        "genero": "",
        "año": 1996,
        "nombre_cancion": "Grab ips from thin air",
        "duracion": 1300,
        "imagen": "../img/Card/Podcast/hacking.jpg",
        "tipo_audio": "podcast",
        "categoria": ["podcast", "coding"],
        "calificacion": 5,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Illuminati for dummies",
        "album": "",
        "genero": "",
        "año": 1996,
        "nombre_cancion": "The new world order",
        "duracion": 1300,
        "imagen": "../img/Card/Podcast/illuminati.jpg",
        "tipo_audio": "podcast",
        "categoria": ["podcast", "random"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Illuminati for dummies",
        "album": "",
        "genero": "",
        "año": 1996,
        "nombre_cancion": "Beating the system",
        "duracion": 1300,
        "imagen": "../img/Card/Podcast/illuminati.jpg",
        "tipo_audio": "podcast",
        "categoria": ["podcast", "random"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Victor Hugo Morales",
        "album": "",
        "genero": "",
        "año": 1996,
        "nombre_cancion": "Peronismo y populismo",
        "duracion": 1200,
        "imagen": "../img/Card/Podcast/victor_hugo.jpg",
        "tipo_audio": "podcast",
        "categoria": ["podcast", "politica", "economia", "periodismo"],
        "calificacion": 3,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    },
    {
        "artista": "Victor Hugo Morales",
        "album": "",
        "genero": "",
        "año": 1996,
        "nombre_cancion": "La cuarentena y el hambre",
        "duracion": 1450,
        "imagen": "../img/Card/Podcast/victor_hugo.jpg",
        "tipo_audio": "podcast",
        "categoria": ["podcast", "politica", "economia", "periodismo"],
        "calificacion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Andrea",
                "val": 2
            },
            {
                "user": "Jorge",
                "val": 4
            },
            {
                "user": "Gabriela",
                "val": 4
            },
            {
                "user": "Alberto",
                "val": 3
            },
            {
                "user": "Mariano",
                "val": 5
            }
        ],
        "comentarios": [{ "user": "user1", "comment": "Este es el comentario del usuario", "premium": true, "fecha": "01/01/2020" }]
    }
];