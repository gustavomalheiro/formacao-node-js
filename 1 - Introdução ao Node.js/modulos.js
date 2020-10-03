var calculadora = require("./calculadora"); //dessa formna pois está na mesma pasta

console.log(calculadora.soma(10,20));
console.log(calculadora.mult(10,20));

calculadora.nome = "Calculadora do Gustavo";
console.log(calculadora.nome); // exportando uma variável