// Bolão da Megasena

// Construir uma aplicação que gere os números da Megasena para um “bolão” de amigos.
// Assegure que não vão ser gerados números repetidos. Mostre os números em ordem ascendente.

// Observações:

// Valide sempre as entradas de dados.
// Utilize prompt e alert.
// Teste o seu código.

const quantNumeros = prompt("Digite a quantidade de numeros:");

const numeros = [];

if (validarNumeroInteiro(quantNumeros)) {
  for (let i = 0; i <= quantNumeros; ) {
    const numeroGerado = parseInt(Math.random() * 60 + 1); // alterar pra 60
    if (!numeros.includes(numeroGerado)) {
      numeros.push(numeroGerado);
      i++;
    }
    numeros.sort((a, b) => a - b);
  }
  alert(numeros);
}
