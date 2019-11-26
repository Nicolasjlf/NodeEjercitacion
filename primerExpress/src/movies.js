//modulo nativo de node
const fs = require('fs')


//imprime la direccion del archivo
console.log(__dirname)

//crea una ruta al archivo pedidos.json
const ruta = "./data/movies.json"

//guardo el contendio del archivo con el encoding clasico utf8
let content = fs.readFileSync(ruta,{encoding:'utf8'})

//parseo el json
let movieInfo = JSON.parse(content);

//traigo todas las peliculas
let peliculas = movieInfo.movies

//creo el metodo que filtra las peliculas a las mas votadas
let masVotadas = peliculas.filter((pelicula) => pelicula.vote_average > 7);

//importo lo que me interesa del objeto
module.exports ={ 
    peliculas,
    masVotadas
}