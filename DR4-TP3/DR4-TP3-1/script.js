// Exercício 1 Sintaxe de Funções

// Enunciado: Crie uma aplicação que implemente uma biblioteca de funções de validação de strings com 2 funções:
// minLength e maxLength. Crie um script para testar cada uma das funções, solicitando ao usuário que digite valores para serem testados. 

// Observações:

// Utilize prompt e alert.
// Implemente minLength usando a sintaxe de declaração de função.
// Implemente maxLength usando a sintaxe de função de seta.

const texto = prompt("Digite uma palavra:");
const max = 10;
const min = 5;

if(validarCancelar(texto)){
    if(tamanhoMinimo(texto, min)) {
        alert(`sua palavra esta dentro do limite minimo de ${min} caracteres`);
        if(tamanhoMaximo(texto, max)) {
            alert(`Sua palavra esta dentro do limite maximo de ${max} caracteres`);
        } else {
            alert(`A palavra é maior que ${max} caracteres`);
        };
    }
}