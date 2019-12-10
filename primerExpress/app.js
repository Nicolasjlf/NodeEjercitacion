//traigo expres
const express = require("express")
//lo incio
const app = express();
//traigo mi ruta de peliculas
const rutaMovies = require("./routes/movie.js") 

//levanto el servidor
app.listen(3000,()=>{
    console.log("servidor arriba")
})
//le digo que use mi ruteo de peliculas con el /movies como ruta principal
app.use('/movies',rutaMovies)

app.get("/",(request,response) => {
    console.log(request.query)
    response.send("Welcome")
})



