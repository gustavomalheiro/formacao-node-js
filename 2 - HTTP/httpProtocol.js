var http = require("http"); // carregando o módulo http do node aqui nessa minha variável

http.createServer(function(requisicao, resposta){
    resposta.end("<h1>Bem vindo ao meu site!</h1><h4>guiadoprogramador.com</h4>") //o que vai aparecer na tela da nossa aplicação
}).listen(8181); // com a função create server eu posso criar um servidor http e passar no listen uma porta como parâmetro para criar meu servidor
//isso é o suficiente para criar em um servidor SIMPLES em http.

console.log("Meu servidor está rodando!");