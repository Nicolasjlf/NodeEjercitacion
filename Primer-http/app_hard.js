//modulo nativo de node para https
const http = require('http');


const movies = require('./src/movies')
const faqs = require('./src/preguntasFrequentes')


http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
	
	// Route System
	switch (req.url) {
		// Home
		case '/':
			res.end('Home');
			break;
		// En cartelera
		case '/en-cartelera':
			res.end(movies.total_movies.toString);
			break;
		case '/mas-votadas':
			res.end(JSON.stringify(movies.masVotadas));
			break;
		case '/sucursales':
			res.end('Sucursales');
			break;
		case '/contacto':
			res.end('Contacto');
			break;
		case '/preguntas-frecuentes':
			res.end(JSON.stringify(faqs));
			break;
		default:
			res.end('404 not found')
	}
}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));