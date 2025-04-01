// Enunciado: Crie uma página com um programa para mostrar a tabuada de 1 a 10. Exiba o resultado em uma página HTML.

// Observações:

// Use “document.write” ou innerHTML para mostrar as mensagens no próprio HTML de saída: mostre o array gerado.

const filtro = document.getElementById("filtro")

for (let i = 1; i <= 10; i++) {
    const div = document.createElement("div")
    div.classList.add("box")
    const h4 = document.createElement("h4")
    h4.innerHTML = `Tabuada do ${i}`
    div.appendChild(h4)
    const ul = document.createElement("ul")
    for (let j = 1; j <= 10; j++) {
        const li = document.createElement("li")
        li.innerHTML = `${i} x ${j} = ${i * j}`
        ul.appendChild(li)
    }
    div.appendChild(ul)
    filtro.appendChild(div)
}