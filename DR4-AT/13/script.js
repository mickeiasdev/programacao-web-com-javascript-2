// Enunciado: Crie uma página que use uma função para validar se uma string está em branco ou não.

// Observações:

// Use prompt e alert.
// Teste o seu programa com cenários diferentes.

const exibir = document.getElementById("exibir");

const entrada = prompt("Digite uma string:");
if (validarVazio(entrada)) {
  exibir.innerHTML = "A string não está vazia.";
} else {
  exibir.innerHTML = "A string está vazia.";
}
