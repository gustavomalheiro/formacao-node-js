CREATE TABLE usuarios( -- criando a tabela usuários com suas respectivas colunas
    nome VARCHAR(50), -- criando a coluna nome do tipo varchar(texto) com apenas 50 caracteres permitidos (mas 255)
    email VARCHAR(100), -- criando a coluna email do tipo varchar(texto) com 100 caracateres
    idade INT -- criando a coluna idade do tipo int
);

INSERT INTO usuarios(nome, email, idade) VALUES ( -- comando para inserir dados na tabela usuários, nas colunas nome, email e idade
    "Gustavo Malheiro", -- inserindo um nome na coluna nome (varchar, então é necessário escrever entre aspas)
    "gus.malheiro@gmail.com", -- inserindo um email na coluna email (varchar, então é necessário escrever entre aspas)
    20 -- inserindo uma idade na coluna idade (tipo inteiro, não é necessário aspas)
);

INSERT INTO usuarios(nome, email, idade) VALUES ( 
    "Ana Sprogis", 
    "ana.sprogis@gmail.com", 
    20 
);

INSERT INTO usuarios(nome, email, idade) VALUES ( 
    "Amanda Grebnoff", 
    "mandyoca@gmail.com", 
    19 
);

INSERT INTO usuarios(nome, email, idade) VALUES ( 
    "Juan Carlos", 
    "latorrebit@gmail.com", 
    20 
);

SELECT * FROM usuarios WHERE idade = 20;

SELECT * FROM usuarios WHERE nome = "Amanda Grebnoff";

SELECT * FROM usuarios WHERE idade >= 20;

DELETE FROM usuarios WHERE nome = "Gustavo Malheiro";

UPDATE usuarios SET nome = "Sprogis Ana" WHERE nome = "Ana Sprogis"; -- email = "analinda@gmail.com" WHERE email = "ana.sprogis@gmail.com";