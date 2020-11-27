let listas = [
    {
        "nombre": "Favoritos",
        "valoracion": 3,
        "cant_reproducciones": 127,
        "valorada": true,
        "canciones": [1, 2, 3, 4, 5, 6, 7, 8, 10, 20, 30, 40, 50, 60, 71, 80],
        "imagen": "../img/Card/Playlist/Favoritos.svg"
    },
    {
        "nombre": "Podcast",
        "valoracion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Marcos",
                "val": 5
            },
            {
                "user": "Mirta",
                "val": 4
            },
            {
                "user": "Juan",
                "val": 2
            },
            {
                "user": "Eduardo",
                "val": 3
            },
            {
                "user": "Miguel",
                "val": 3
            }
        ],
        "cant_reproducciones": 9,
        "canciones": [172, 175, 180, 182, 183, 185, 187],
        "imagen": "../img/Card/Playlist/podcasts.png"
    },
    {
        "nombre": "Coding",
        "valoracion": 2,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Marcos",
                "val": 5
            },
            {
                "user": "Mirta",
                "val": 4
            },
            {
                "user": "Juan",
                "val": 2
            },
            {
                "user": "Eduardo",
                "val": 3
            },
            {
                "user": "Miguel",
                "val": 3
            }
        ],
        "cant_reproducciones": 15000,
        "canciones": [85, 86, 87, 88, 89, 90],
        "imagen": "../img/Card/Playlist/coding.png"
    },
    {
        "nombre": "Nacional",
        "valoracion": 4,
        "valorada": false,
        "ultimas_valoraciones": [
            {
                "user": "Marcos",
                "val": 5
            },
            {
                "user": "Mirta",
                "val": 4
            },
            {
                "user": "Juan",
                "val": 2
            },
            {
                "user": "Eduardo",
                "val": 3
            },
            {
                "user": "Miguel",
                "val": 3
            }
        ],
        "cant_valoraciones": 10,
        "cant_reproducciones": 75187000,//75M
        "canciones": [19, 23, 31, 33, 60, 67, 68, 92, 95],
        "imagen": "../img/Card/Playlist/nacional.png"
    },
    {
        "nombre": "Lo mejor del Rock",
        "valoracion": 4,
        "valorada": false,
        "ultimas_valoraciones": [
            {
                "user": "Marcos",
                "val": 5
            },
            {
                "user": "Mirta",
                "val": 4
            },
            {
                "user": "Juan",
                "val": 2
            },
            {
                "user": "Eduardo",
                "val": 3
            },
            {
                "user": "Miguel",
                "val": 3
            }
        ],
        "cant_valoraciones": 10,
        "cant_reproducciones": 875187000,//875M
        "canciones": [30, 8, 12, 29, 6, 3, 13, 7, 11, 31, 10, 5, 1, 32, 2, 4, 9],
        "imagen": "../img/Card/Playlist/Rock.jpg"
    }
];
let listas_recomendadas = [
    {

        "nombre": "Rock Nacional",
        "valoracion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Marcos",
                "val": 5
            },
            {
                "user": "Mirta",
                "val": 4
            },
            {
                "user": "Juan",
                "val": 2
            },
            {
                "user": "Eduardo",
                "val": 3
            },
            {
                "user": "Miguel",
                "val": 3
            }
        ],
        "cant_reproducciones": 9,
        "canciones": [33, 115, 150, 29, 58, 59, 110, 121, 77, 149, 28, 62, 118, 34, 111, 147, 30, 78, 75],// 28-34 , 57-78 , 110-121 , 147-150
        "imagen": "../img/Card/Artistas_Song/La_renga.jpg"
    },
    {

        "nombre": "Cerati: Grandes Éxitos",
        "valoracion": 4,
        "valorada": false,
        "cant_valoraciones": 1588,
        "ultimas_valoraciones": [
            {
                "user": "Marcos",
                "val": 5
            },
            {
                "user": "Mirta",
                "val": 4
            },
            {
                "user": "Juan",
                "val": 2
            },
            {
                "user": "Eduardo",
                "val": 3
            },
            {
                "user": "Miguel",
                "val": 3
            }
        ],
        "cant_reproducciones": 9,
        "canciones": [31, 34, 28, 32, 29, 33, 30],//28-34
        "imagen": "../img/Card/Artistas_Song/Cerati.jpg"
    },
    {

        "nombre": "Podcasts",
        "valoracion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Marcos",
                "val": 5
            },
            {
                "user": "Mirta",
                "val": 4
            },
            {
                "user": "Juan",
                "val": 2
            },
            {
                "user": "Eduardo",
                "val": 3
            },
            {
                "user": "Miguel",
                "val": 3
            }
        ],
        "cant_reproducciones": 9,
        "canciones": [172, 180, 182, 183, 185, 187],
        "imagen": "../img/Card/Playlist/podcasts.png"
    },
    {
        "nombre": "Rock en Ingles",
        "valoracion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Marcos",
                "val": 5
            },
            {
                "user": "Mirta",
                "val": 4
            },
            {
                "user": "Juan",
                "val": 2
            },
            {
                "user": "Eduardo",
                "val": 3
            },
            {
                "user": "Miguel",
                "val": 3
            }
        ],
        "cant_reproducciones": 9,
        "canciones": [12, 123, 137, 4, 164, 154, 1, 48, 55, 91, 125, 128, 138, 166, 165, 9, 2, 90, 124, 49],    //1-12 , 45-56 , 86-91 , 123-128 , 135-139 , 151-166
        "imagen": "../img/Card/Playlist/podcasts.png"

    },
    {
        "nombre": "El Mejor Rap",
        "valoracion": 4,
        "valorada": false,
        "cant_valoraciones": 10,
        "ultimas_valoraciones": [
            {
                "user": "Marcos",
                "val": 5
            },
            {
                "user": "Mirta",
                "val": 4
            },
            {
                "user": "Juan",
                "val": 2
            },
            {
                "user": "Eduardo",
                "val": 3
            },
            {
                "user": "Miguel",
                "val": 3
            }
        ],
        "cant_reproducciones": 9,
        "canciones": [172, 175, 180, 182, 183, 185, 187],
        "imagen": "../img/Card/Playlist/podcasts.png"

    }
];


let recomendaciones = {
    "Recomendado_para_ti": [
        audios[42],
        audios[1],
        audios[7],
        listas_recomendadas[1],
        audios[72],
        audios[8],
        audios[13],
        audios[25],
        audios[28],
        listas_recomendadas[2],
        audios[47],
        audios[71],
        audios[73]
    ],
    "Rock_en_Español": [
        audios[29],
        audios[59],
        audios[120],
        audios[33],
        listas_recomendadas[0],
        audios[150],
        audios[110],
        audios[28],
        audios[85],
        audios[73],
        audios[121],
        audios[149],
        audios[31],
        audios[74],
        listas_recomendadas[1],
        audios[72],
        audios[117],
        audios[83]
    ],
    "Tarde_de_Mates": [
        audios[16],
        audios[58],
        audios[57],
        audios[19],
        audios[123],
        audios[45],
        audios[98],
        audios[111],
        listas_recomendadas[3],
        audios[104],
        audios[93],
        audios[31],
        listas_recomendadas[4],
        audios[2],
        audios[5],
        audios[180],
        audios[176],
        audios[124],
        audios[156],
        audios[169],
        audios[94],
        audios[82],
        audios[80],
        listas_recomendadas[0],
        audios[26],
        audios[47],
        audios[67],
        audios[3],
        audios[9]
    ],
    "Podcasts_exclusivos": [//173-188

        audios[173],
        // audios[188],
        audios[176],
        audios[174],
        audios[182],
        audios[187],
        audios[179],
        audios[186]
    ]
}
// 28-34 , 57-85 , 110-121 , 147-150
