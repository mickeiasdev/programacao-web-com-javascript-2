// Enunciado: Crie uma página com um programa JavaScript para encontrar os anos bissextos em um determinado intervalo de anos. 

// Observações:

// Crie um array com pelo menos 5 elementos representando anos.
// Use “document.write” ou innerHTML para mostrar as mensagens no próprio HTML de saída: mostre o array original e a sua resposta.
// Crie a função de verificação de ano bissexto em uma biblioteca apropriada.
// Teste o seu programa com cenários diferentes.
// Considerações:

// O array original poderá ser alterado para testar outros cenários de execução.
// Pelo menos 1 ano do array deve ser bissexto.

// const anos = [1999, 2005, 2010, 2018, 2024];
// const anos = [1988, 1993, 2000, 2005, 2012];
// const anos = [1996, 2001, 2004, 2010, 2020];
// const anos = [1900, 2008, 2016, 2023, 2024];
const anos = [1800, 1896, 1924, 1950, 2000];

const original = document.getElementById("original")
const filtro = document.getElementById("filtro")

anos.forEach(item => {
        const li = document.createElement("li")
        li.innerHTML = item;
        original.appendChild(li)
});

anos.forEach(item => {
    if(validarAnoBissexto(item)){
        const li = document.createElement("li")
        li.innerHTML = item;
        filtro.appendChild(li)
    }
});

