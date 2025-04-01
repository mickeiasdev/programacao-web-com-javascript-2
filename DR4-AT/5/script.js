// Enunciado: Crie uma página com um programa para mostrar a tabuada de 1 a 10. Exiba o resultado em uma página HTML.

// Observações:

// Use “document.write” ou innerHTML para mostrar as mensagens no próprio HTML de saída: mostre o array gerado.

const filtro = document.getElementById("filtro")
const som = document.getElementById("som")
const sub = document.getElementById("sub")
const mult = document.getElementById("mult")
const div = document.getElementById("div")

const array = []
const tabuadoDo = 10;

for (let i = 1; i <= 10; i++) {
    const resSom = `${i} + ${tabuadoDo} = ${tabuadoDo * i}`;
    const resSub = `${i} + ${tabuadoDo} = ${tabuadoDo - i}`;
    const resMult = `${i} + ${tabuadoDo} = ${tabuadoDo * i}`;
    const resDiv = `${i} + ${tabuadoDo} = ${tabuadoDo * i}`;

    const pSom = document.createElement("p")
    pSom.innerHTML = resSom
    som.appendChild(pSom)

    const pSub = document.createElement("p")
    pSub.innerHTML = resSub
    sub.appendChild(pSub)
    
    const pMult = document.createElement("p")
    pMult.innerHTML = resMult
    mult.appendChild(pMult)
    
    const pDiv = document.createElement("p")
    pDiv.innerHTML = resDiv
    div.appendChild(pDiv)
}