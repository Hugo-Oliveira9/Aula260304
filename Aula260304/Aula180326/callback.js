const http = require('http');

var callback = function(request, response){
    response.writeHead(200, {"content-type": "text/plain"});
    response.end('pagina Inicio');
}

var server = http.createServer(callback);

server.listen(3000);
console.log("servidor iniciado em http://localhost:3000");