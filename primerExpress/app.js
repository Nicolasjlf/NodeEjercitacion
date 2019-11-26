let express = require("express")

let app = express();

const movies = require('./src/movies')
const faqs = require('./src/preguntasFrequentes')

fs = require('fs');


app.listen(3000,()=>{
    console.log("servidor arriba")
})

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    app.get("/index",(request,response)=>{
        response.send(html)
    })
});

app.get("/",(request,response) => {
    response.send("Welcome")
})

app.get('/contact', (request,response)=> {
    response.send("seccion de contactos")
})

app.get('/movies/masvotadas', (request,response)=> {
    response.send(movies.masVotadas)
})

