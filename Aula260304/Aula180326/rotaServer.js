const http = require('http');
const url = require('url');
const fs = require('fs');

var callback = function(request, response){

    var parts = url.parse(request.url);

    let arquivo = "";

    if(parts.pathname == "/"){
        arquivo = "Index.html";
    }
    else if(parts.pathname == "/produtos"){
        arquivo = "Produtos.html";
    }
    else if(parts.pathname == "/produtos1"){
        arquivo = "produtos1.html";
    }
    else if(parts.pathname == "/produtos2"){
        arquivo = "produtos2.html";
    }
    else if(parts.pathname == "/produtos3"){
        arquivo = "produtos3.html";
    }

    if(arquivo){
        fs.readFile(arquivo, (err, data) => {
            if(err){
                response.writeHead(404, {"content-type": "text/plain"});
                return response.end("Arquivo não encontrado");
            }

            response.writeHead(200, {"content-type": "text/html; charset=utf-8"});
            response.end(data);
        });
    } else {
        response.writeHead(404, {"content-type": "text/plain"});
        response.end("Página não encontrada");
    }
};

var server = http.createServer(callback);
server.listen(3000);
console.log("Servidor iniciado em http://localhost:3000");