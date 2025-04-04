// Enunciado: Crie uma página que use uma função para validar se uma string só tem números.

// Observações:

// Use prompt e alert.
// Use expressões regulares.
// Teste o seu programa com cenários diferentes.

function validarVazioCancelar(valor) {
    if(valor === null || valor.trim() === ""){
        alert("Entrada invalida! O programa espera uma string apenas de numeros.")
        return false
    }
    return true
}

const exibir = document.getElementById("exibir")
const pergunta = prompt("Digite aqui:")

function entrada(pergunta) {
    if (!validarVazioCancelar(pergunta) || !validarStringApenasNumero(pergunta)) {
        return false;
    }
    alert(`Entrada valida! String: ${pergunta}`)
    return true;
}

if (entrada(pergunta)) {
    exibir.innerHTML = `<p>A string é válida: <span>${pergunta}</span></p>`;
} else {
    exibir.innerHTML = `<p>Entrada <span>inválida</span></p>`;
}