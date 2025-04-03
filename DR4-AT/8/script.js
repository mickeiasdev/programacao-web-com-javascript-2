// Enunciado: Uma eleição de um órgão profissional foi realizada e concorreram 5 chapas identificadas pelos números de 1 a 5. 

// Crie uma página com um programa que leia o número de votos de cada chapa, permitindo apenas números naturais.

// Mostre os resultados, indicando quantos votos cada chapa recebeu e o percentual do total de votos equivalente (faça um alert para isto).

// Indique se deve haver segundo turno da eleição e quais serão as duas chapas a concorrer no segundo turno caso alguma das chapas não consiga mais de 50% dos votos totais no primeiro turno (faça outro alert para isto). 

// Observações:

// Use prompt e alert.
// Teste o seu programa com cenários diferentes.

const exibir = document.getElementById("exibir");

const partidos = [
    { num: 1, nome: "FEN - Front Enzo", votos: 0, percentual: 0 },
    { num: 2, nome: "JAV - Javeiros do Penta", votos: 0, percentual: 0 },
    { num: 3, nome: "FSO - Full Stack Overflow", votos: 0, percentual: 0 },
    { num: 4, nome: "WTU - While True Unidos", votos: 0, percentual: 0 },
    { num: 5, nome: "DOP - DevOps e Paz", votos: 0, percentual: 0 }
];

function calcularPercentualPartidos(partidos, totalDeVotos, i){
        let percentual = (partidos[i].votos / totalDeVotos) * 100
        partidos[i].percentual = percentual
}

function verificarSegundoTurno(partidos){
    const array = []
    for (let i = 0; i < partidos.length; i++) {
        if(partidos[i].percentual >= 50){
            return
        } else {
            array.push(partidos[i])
        }
    }
    const ordem = array.sort((a, b) => Number(a.percentual) - Number(b.percentual))
    alert(`Teremos segundo turno!!! entre os partidos ${ordem[ordem.length -1].nome} e ${ordem[ordem.length - 2].nome}`)
}

function receberVotos(partidos){
    let mensagem = ""
    let totalDeVotos = 0

    for (let i = 0; i < partidos.length; i++) {
        let pergunta = prompt(`Digite a quantidade de votos do partido ${partidos[i].nome}:`)
        if(!validarCancelar(pergunta)) return
        while(!validarNumeroInteiroPositivo(pergunta)){
            pergunta = prompt(`Digite a quantidade de votos do partido ${partidos[i].nome}:`)
            if(!validarCancelar(pergunta)) return
        }
        partidos[i].votos = Number(pergunta)
        totalDeVotos += Number(pergunta)
    }

    for (let i = 0; i < partidos.length; i++) {
        calcularPercentualPartidos(partidos, totalDeVotos, i)
        const div = document.createElement("div")
        div.classList.add("caixa")
        const p = document.createElement("p")
        p.innerHTML = `<p class="partido">${partidos[i].nome}</p><p class="votos">Votos: ${partidos[i].votos}</p><p class="votos">Percentual: ${partidos[i].percentual.toFixed(2)}%</p>`
        div.appendChild(p)
        exibir.appendChild(div)
        mensagem += `${partidos[i].nome}\nVotos: ${partidos[i].votos}\nPercentual: ${partidos[i].percentual.toFixed(2)}%\n\n`
        console.log(partidos[i].percentual)
    }
    alert(mensagem)
    verificarSegundoTurno(partidos)
}

receberVotos(partidos)