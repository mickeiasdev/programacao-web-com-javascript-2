// Nomes Próprios

// Crie uma aplicação que contenha uma função que corrija as palavras de um nome próprio informado, colocando as
// primeiras letras em maiúsculas corretamente. Por exemplo, se o usuário informar “machado de assis” a aplicação
// exibe “Machado de Assis” corretamente.

// Observações:

// Utilize prompt e alert.
// Empregue uma lista simples de exceções como “de”, “do” ou “da”. Não é preciso esgotar todas as possibilidades.

const nome = prompt("Digite seu nome completo:");

if(validarCancelar(nome)){
    if(tamanhoMinimo(nome, 5)) {
        if(tamanhoMaximo(nome, 50)) {
            corrigirNome(nome);
        }
    }
}