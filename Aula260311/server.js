var http = require('http');
var url = require('url');
var fs = require('fs');

//função para ler arquivos
function readFile(response, file){

    fs.readFile(file, function(err, data){

        if(err){
            response.writeHead(404, {"Content-Type":"text/plain"});
            response.end("Arquivo não encontrado");
            return;
        }

        response.end(data);
    });
}

//callback do servidor
var callback = function(request, response){

    var parts = url.parse(request.url);
    var path = parts.pathname;

    if(path == "/rota1/cadastro"){
        readFile(response, "cadastro.json");

    }else if(path == "/rota1"){
        readFile(response, "cadastro.json");

    }else if(path == "/html"){
        readFile(response, "index.html");

    }else if(path == "/jpeg"){
        readFile(response, "skyLab.jpg");

    }else if(path == "/pdf"){
        readFile(response, "gg.pdf");

    }else{
        response.end("Rota não encontrada");
    }

}

var server = http.createServer(callback);

server.listen(3000);

console.log("Servidor iniciado em http://localhost:3000");