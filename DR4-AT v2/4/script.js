// Enunciado: Crie uma página com um programa JavaScript que exiba um array de objetos representando obras literárias classificadas por título.

// Observações:

// Crie um array com pelo menos 5 elementos representando as obras literárias.
// Use “document.write” ou innerHTML para mostrar as mensagens no próprio HTML de saída: mostre o array original e a sua resposta.
// O modelo de objeto deve seguir o exemplo: {autor: 'Machado de Assis', título: 'Dom Casmurro', isbn: 1254}.
// Dispare um erro caso o array não contenha objetos com o formato solicitado. Use throw e o erro mais adequado ao tipo de problema encontrado.
// Teste o seu programa com cenários diferentes.

// Considerações:

// O array original poderá ser alterado para testar outros cenários de execução.

const original = document.getElementById("original")
const filtro = document.getElementById("filtro")

const array = [
    { autor: "Miguel de Cervantes", titulo: "Dom Quixote", isbn: 1001 },
    { autor: "Jane Austen", titulo: "Orgulho e Preconceito", isbn: 1002 },
    { autor: "George Orwell", titulo: "1984", isbn: 1003 },
    { autor: "Fiódor Dostoiévski", titulo: "Crime e Castigo", isbn: 1004 },
    { nomeAutor: "Thomas Harris", nomeTitulo: "O Silêncio dos Inocentes", anoIsbn: 1988 }
];

array.forEach((item, index) => {
    const li = document.createElement("li")
    li.innerHTML = `Autor: <span>${item.autor}</span></br>Titulo: <span>${item.titulo}</span></br>ISBN: <span>${item.isbn}</span></br></br>`
    original.appendChild(li)
    // esse if é apenas pra exibir normalmente o ultimo item (que é o erro), para nao ficar como undefined...
    if(index === array.length - 1) {
        li.innerHTML = `Autor: <span>${item.nomeAutor}</span></br>Titulo: <span>${item.nomeTitulo}</span></br>ISBN: <span>${item.anoIsbn}</span></br></br>` 
    }
});

array.forEach(item => {
    const li = document.createElement("li");
    try {
        verificarFormatoArray(item);
        li.innerHTML = `Autor: <span>${item.autor}</span></br>Título: <span>${item.titulo}</span></br>ISBN: <span>${item.isbn}</span></br></br>`;
    } catch (erro) {
        li.innerHTML = `Error: <span>${erro.message}</span>`;
    }
    filtro.appendChild(li);
});