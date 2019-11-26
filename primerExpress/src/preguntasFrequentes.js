//modulo nativo de node
const fs = require('fs')


//imprime la direccion del archivo
console.log(__dirname)

//crea una ruta al archivo pedidos.json
const ruta = "./data/faqs.json"

//guardo el contendio del archivo con el encoding clasico utf8
let content = fs.readFileSync(ruta,{encoding:'utf8'})

//parseo el json
let faqs = JSON.parse(content);

//traigo todas las peliculas
let preguntasFrecuentes = faqs.faqs

let totalPreguntas = faqs.total_faqs

//importo lo que me interesa del objeto
module.exports ={
    totalPreguntas,
    preguntasFrecuentes
}