// Enunciado: Crie uma página com um programa JavaScript para remover itens duplicados de um array, ignorando a diferenciação entre maiúsculas e minúsculas.

// Observações:

// Crie um array com pelo menos 10 elementos com alguns repetidos.
// Use “document.write” ou innerHTML para mostrar as mensagens no próprio HTML de saída: mostre o array original e a sua resposta.
// Teste o seu programa com cenários diferentes.
// Considerações:

// O array original poderá ser alterado para testar outros cenários de execução.

// const array = ["Maçã", "Banana", "Laranja", "Melancia", "Kiwi", "Manga", "Abacaxi", "Melancia", "Kiwi", "Banana"]
// const array = ["São Paulo", "Rio de Janeiro", "Curitiba", "Salvador", "Brasília", "Curitiba", "São Paulo", "Recife", "Rio de Janeiro", "Fortaleza"];
// const array = ["Cachorro", "Gato", "Papagaio", "Leão", "Tigre", "Gato", "Cavalo", "Leão", "Cachorro", "Elefante"];
// const array = ["Azul", "Vermelho", "Verde", "Amarelo", "Preto", "Verde", "Branco", "Azul", "Roxo", "Vermelho"];
const array = ["Fusca", "Gol", "Civic", "Corolla", "Ferrari", "Gol", "BMW", "Civic", "Porsche", "Fusca"];

const original = document.getElementById("original")
const filtro = document.getElementById("filtro")

array.forEach(item => {
    const li = document.createElement("li")
    li.innerHTML = item
    original.appendChild(li)
});

const arrayFiltrado = new Set(array)

arrayFiltrado.forEach(item => {
    const li = document.createElement("li")
    li.innerHTML = item
    filtro.appendChild(li)
});