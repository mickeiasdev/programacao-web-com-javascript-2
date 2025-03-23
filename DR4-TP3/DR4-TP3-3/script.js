//Exercício 3 Funções de Ordenação - Parte 2

// Crie uma aplicação que implemente uma biblioteca com 2 funções: sortStringAsc e sortStringDesc, recebendo um array como parâmetro.
// Crie um array com os itens: “Javascript”, “Kotlin”, “C”, “Rust”, “Python”, “Go” e “Basic” e use esse array para testar as duas funções,
// exibindo o resultado em 2 alerts separados e sequenciais. 

// Observações:

// Utilize alert.
// Implemente os métodos de forma a não alterar o array original.
// Use o operador de spread.

const array = [ "Javascript", "Kotlin", "C", "Rust", "Python", "Go", "Basic"]

ordenarCrescenteTexto([...array]);
ordenarDecrescenteTexto([...array]);