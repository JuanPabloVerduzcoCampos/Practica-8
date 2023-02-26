var http = require ('http'); //Importamos el modulo http

http.createServer(function (req, res) { //Creamos el servidor que escucha en el puerto 1337 y muestra el mensaje Hello World
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
    
}).listen(1337, '127.0.0.1'); //Escucha en el puerto 1337 y en la ip