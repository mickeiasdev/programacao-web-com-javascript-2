// Enunciado: Crie uma página com um programa JavaScript que solicite um valor inteiro positivo e gere um array com a série Fibonacci dos números menores ou iguais ao número informado.

// Observações:

// Use input para obter o número.
// Use “document.write” ou innerHTML para mostrar as mensagens no próprio HTML de saída: mostre o array gerado.
// Não use recursividade nesta questão.
// Dispare um erro caso o valor informado não seja válido. Use throw e o erro mais adequado ao tipo de problema encontrado.
// Teste o seu programa com cenários diferentes.
// Considerações:

// Serão usados como teste os números 4181 e 6765.

const filtro = document.getElementById("filtro");
const entrada = document.getElementById("entrada");
const botao = document.getElementById("botao");
const array = [0, 1];

function fibonacci(valor, arr) {
  if (valor < 0 || isNaN(valor)) {
    return false;
  }
  arr.length = 2;
  for (let i = 2; arr[i - 1] + arr[i - 2] <= valor; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  arr.forEach((item) => {
    const p = document.createElement("p");
    p.classList.add("numero");
    p.innerHTML = `${item}`;
    filtro.appendChild(p);
  });
  return true;
}

botao.addEventListener("click", () => {
  filtro.innerText = ""
  try {
    const valor = parseInt(entrada.value);
    if (isNaN(valor) || valor < 0) {
      throw new TypeError(
        "Error! O valor informado não é um número inteiro positivo."
      );
    }
    if (!fibonacci(valor, array)) {
      throw new Error("Erro ao gerar a sequência.");
    }
  } catch (erro) {
    filtro.innerText = erro.message
  }
  entrada.value = ""
});
