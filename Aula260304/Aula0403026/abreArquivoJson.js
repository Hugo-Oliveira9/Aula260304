// carrega os módulos necessários
var http = require('http');
var url = require('url');
var fs = require('fs');

// função para ler arquivo e enviar na resposta
function readFile(response, file){
    fs.readFile(file, function(err, data){
        if(err){
            response.writeHead(404, {"Content-Type": "text/plain; charset=utf-8"});
            response.end("Arquivo não encontrado");
        } else {
            response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
            response.end(data);
        }
    });
}

// função callback
var callBack = function(request, response){

    var parts = url.parse(request.url);
    var path = parts.pathname;

    if(path == "/rota1/cadastro"){
        readFile(response, "cadastro.json");

    } else if(path == "/rota1/catalogo"){
        readFile(response, "catalogo.json");

    } else if(path == "/rota1/dados"){
        readFile(response, "dados.json");

    } else {
        response.writeHead(404, {"Content-Type": "text/plain; charset=utf-8"});
        response.end("Rota não encontrada");
    }
};

// cria o servidor
var server = http.createServer(callBack);

// configura o servidor
server.listen(3000);
console.log("Servidor iniciado em http://localhost:3000");