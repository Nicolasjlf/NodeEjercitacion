//pido express
const express = require("express");
// pido el sistema de ruteo
const router = express.Router();
// pido mi archivo de movies
const movies = require('../src/movies')
//creo las rutas para movies, no necesito especificarle el movies lo hago despues cunado h
router.get('/all/masvotadas', (request,response)=> {
    response.send(movies.masVotadas)
})

//hago un ruteo dinamico con una query
router.get('/buscar', (request,response)=> {
    console.log(request.query)
    response.send(movies.buscarPelicula(request.query.q))
})

//hago un ruteo dinamico con la posicion de la pelicula
router.get('/:position', (request,response)=> {
    response.send(movies.traerPeliculaEnPosicion(request.params.position))
})
//hago una query basado en un path
router.get('/search/:query', (request,response)=> {
    console.log(request.params.query)
    response.send(movies.buscarPelicula(request.params.query))
})
//exporto el modulo
module.exports = router;