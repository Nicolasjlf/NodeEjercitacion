//modulo de terceron por eso tiramos el comando 
const inquierer = require('inquirer');

//modulo nativo de node
const fs = require('fs')

//imprime la direccion del archivo
console.log(__dirname)

//crea una ruta al archivo pedidos.json
const ruta = __dirname + "/pedidos.json"

//guardo el contendio del archivo con el encoding clasico utf8
let content = fs.readFileSync(ruta,{encoding:'utf8'})

let pedidos = JSON.parse(content);


//las opciones para el inquierer
let opciones = [
    {
        type:'input',
        name : 'nombre',
        message : "Cuale es tu puto nombre?",
    },
    {
        type:'input',
        name : 'telefono',
        message : "ingresa el nunmero de tu vieja?",
        validate: function(respuesta){
            return respuesta == '69';
        }
    
    },
    {
        type:'rawlist',
        name : 'gusto',
        message : "de que mierda queres la pizza?",
        choices : ["anana","peperoni",'vegana']
    },
    {
        type:'rawlist',
        name : 'tamanio',
        message : "de que tamanio la queres?",
        choices : ["mani quemado","mediana",'negro de ww']
    },
    {
        type:'checkbox',
        name : 'extraTopings',
        message : "toppings extra ?",
        choices : ["anana","peperoni",'queso azul','tu vieja','bacon','dfl w']

    },
    {
        type:'confirm',
        name: 'confirSelection',
        message: 'confirmas la seleccion o quieres volver a empezar'
    }
]
//metodos externos para calcular el precio para no ensuciar el codigo
var calcularPrecioPorTamanio = (tamanio)=>{
    let precio = 450
    switch(tamanio){
        case 'mani quemado':
            precio= 300;
            break
        case 'mediano':
            precio= 450;
            break
        case 'negro de ww':
            precio= 600
            break

    }

    return precio;
}

var calcularPrecioPorToppings = toppings=>{
    return toppings.length * 20.0;
}

//la funcion que procesa el resultado
var crearRespuesta = function (respuesta){

    //le agrego a la respuesta la hora y fecha del pedidio
    let fechaDelPedido = new Date
    //llamo a mis funciones externas
    let precioFinal = calcularPrecioPorTamanio(respuesta.tamanio) + calcularPrecioPorToppings(respuesta.extraTopings)

    //le agrego extras a los objetos
    let extras = {
        fecha : fechaDelPedido.toLocaleDateString('en-US', {'hour12': true}),
        hora : fechaDelPedido.toLocaleTimeString('en-US', {'hour12': true}),
    }

    //uso el operador spread para unir los dos objetos 
    let final = {
        ...respuesta,
        ...extras,
        precioFinal : precioFinal,

    }

    pedidos.results.push(final)
    pedidos.total = pedidos.results.length
    pedidos = JSON.stringify(pedidos)
    
    console.log(final)


    fs.writeFileSync(ruta,pedidos)


}

//largo el inquierer y le paso la funcion que va a correr cunado vuelva el resultado
inquierer.prompt(opciones)
.then(crearRespuesta)

