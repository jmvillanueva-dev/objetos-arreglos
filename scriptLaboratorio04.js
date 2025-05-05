// Labotario 04 - Introducción a JavaScript

// Objeto que representa una canción en Spotify
const cancionSpotify = {
    titulo: "I Want To Break Free",
    artista: "Queen",
    album: "The Miracle",
    duracion: "4:18",
    genero: "Rock",
    reproducciones: 688163508
};

const { titulo, artista, album, duracion, genero, reproducciones } = cancionSpotify;

// Mostrar la información por consola 
console.log(`Canción en Spotify
    Título         : ${titulo}
    Artista        : ${artista}
    Álbum          : ${album}
    Duración       : ${duracion}
    Género         : ${genero}
    Reproducciones : ${reproducciones.toLocaleString()} veces`);
    

// Arreglo de canciones en Spotify
const cancionesSpotify = [
    {
        titulo: "Bohemian Rhapsody",
        artista: "Queen",
        album: "A Night at the Opera",
        duracion: "5:55",
        genero: "Rock",
        reproducciones: 2781659480
    },
    {
        titulo: "Don't Stop Me Now",
        artista: "Queen",
        album: "Jazz",
        duracion: "3:29",
        genero: "Rock",
        reproducciones: 2309043904
    },
    {
        titulo: "Under Pressure",
        artista: "Queen & David Bowie",
        album: "Hot Space",
        duracion: "4:00",
        genero: "Rock",
        reproducciones: 187611653
    }
];

  // Mostramos la información de todas las canciones en el array
cancionesSpotify.forEach((cancion, index) => {
    const { titulo, artista, album, duracion, genero, reproducciones } = cancion;
    console.log(`Canción ${index + 1}
    Título         : ${titulo}
    Artista        : ${artista}
    Álbum          : ${album}
    Duración       : ${duracion}
    Género         : ${genero}
    Reproducciones : ${reproducciones.toLocaleString()} veces
    -----------------------------`);});


