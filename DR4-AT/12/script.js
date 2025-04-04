// Enunciado: Crie uma página que use uma função para verificar se uma string é um palíndromo.
// Um palíndromo é uma palavra ou frase que é dita da mesma maneira na ordem natural que na ordem inversa,
// ignorando pontuação, capitalização e espaçamento. Por exemplo: "Roma me tem amor" e "Socorram-me, subi no ônibus em Marrocos”.

// Observações:

// Use prompt e alert.
// Remover todos os caracteres não alfanuméricos (pontuação, espaços e símbolos) e transformar tudo para minúsculo.
// Teste o seu programa com cenários diferentes.

const exibir = document.getElementById("exibir");

function verificarPalavrasPalindromo(palavra) {
  const um = limparString(palavra);
  const dois = [...um.toLowerCase()].reverse().join("");
  if(um !== dois) {
    return false;
  }
  return true;
}

function entradaPalavras() {
  let palavra = prompt(
    "Digite uma palavra ou frase para verificar se é um palíndromo:"
  );
  if (!validarCancelar(palavra)) return;
  while (!validarVazio(palavra)) {
    palavra = prompt(
      "Digite uma palavra ou frase para verificar se é um palíndromo:"
    );
    if(!validarCancelar(palavra)) return;
  }
  const resultado = verificarPalavrasPalindromo(palavra);
  if (resultado) {
    exibir.innerHTML = `<p>A palavra: <span>"${limparString(palavra)}"</span> é um palíndromo!</p>`;
    alert(`A palavra: "${limparString(palavra)}" é um palíndromo!`);
  } else {
    exibir.innerHTML = `<p>A palavra: <span>"${limparString(palavra)}"</span> não é um palíndromo!</p>`;
    alert(`A palavra: "${limparString(palavra)}" não é um palíndromo!`);
  }
}

entradaPalavras();
