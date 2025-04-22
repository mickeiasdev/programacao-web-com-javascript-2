// Enunciado: Crie uma página que use uma função para contar quantas vogais estão presentes em uma determinada string.

// Observações:

// Use prompt e alert.
// Teste o seu programa com cenários diferentes.

const exibir = document.getElementById("exibir")

function contarVogais() {
    let pergunta = prompt("Digite uma string:")

    const vogais = ["a", "e", "i", "o", "u"];
    let qntVogais = 0;

    if(!validarCancelar(pergunta)) return
    while(!validarVazio(pergunta)){
        pergunta = prompt("Digite uma string:")
        if(!validarCancelar(pergunta)) return
    }
    
    arrLetras = [...removerAcentos(pergunta)]

    arrLetras.forEach(letra => {
        if(vogais.includes(letra)){
            qntVogais++
        }
    });

    exibir.innerHTML = `<p>A string <span>"${pergunta}"</span> contem <span>${qntVogais}</span> vogais.</p>`
    alert(`A string "${pergunta}" contem ${qntVogais} vogais.`)
}

contarVogais()