// Enunciado: Crie uma página com um programa JavaScript para encontrar o item mais frequente em um array.

// Observações:

// Crie um array com pelo menos 10 elementos com alguns repetidos.
// Use “document.write” ou innerHTML para mostrar as mensagens no próprio HTML de saída: mostre o array
// original e a sua resposta.
// Teste o seu programa com cenários diferentes.
// Considerações:

// O array original poderá ser alterado para testar outros cenários de execução.

const array = ["carro", "moto", "carro", "bicicleta", "carro", "moto", "carro", "carro", "moto", "carro"];
const original = document.getElementById("original");
const filtro = document.getElementById("filtro");

let frequencias = {};

array.forEach(item => {
  frequencias[item] = frequencias[item] ? frequencias[item] + 1 : 1;
});

console.log(frequencias)