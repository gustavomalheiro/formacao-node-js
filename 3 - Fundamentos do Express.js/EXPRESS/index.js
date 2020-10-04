const express = require("express"); // impportando o expert 
const app = express(); // iniciando o express e passando a inicialização para a variável app (instanciando)

//aqui estamos criando a rota inicial do nosso aplicativo, passando / como nome e a função que é chamada sempre que a rota é acessada
app.get("/", function(req, res){ //req e res: resposta e requisição
    res.send("Bem vindo ao guia do programador!");
}); // forma mais simples de se criar uma rota

//rota para o blog
app.get("/blog/:artigo?", function(req, res){ //agora com o interrogação, para acessar a rota blog eu não preciso passar obrigatoriamente esse parâmetro

    //com essa solução, podemos, além de acessar a rota blog sem passar parâmetro, criar uma resposta apenas para quando um parâmetro for passado.
    var artigo = req.params.artigo;

    if(artigo){
        res.send("<h2>Artigo: " + artigo + "</h2>");
    } else {
        res.send("Bem vindo ao meu blog!");
    }
});

//rota para o canal do youtube
app.get("/canal/youtube", function(req, res){
    //com o query param, conseguimos passar parâmetros de forma mais dinâmica. é totalmente opcional (estão entrando em desuso)
    var canal = req.query["canal"] // localhost:4000/canal/youtube?canal=valor

    if(canal){
        res.send(canal);
    }else{
        res.send("Nenhum canal fornecido");
    }
    
    res.send(canal);
});

app.get("/ola/:nome/:empresa", function(req, res){
    //REQ -> DADOS ENVIADOS PELO USUÁRIO
    //RES -> RESPOSTA QUE VAI SER ENVIADA PARA O USUÁRIO
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send("<h1>Oi " + nome + " do " + empresa + " </h1>");
});

//abrindo o servidor com o express. cpassando essa função que printa na tela essa mensagem de erro caso de algum erro.
//tambem é necessário passar a porta como parâmetro
app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})

