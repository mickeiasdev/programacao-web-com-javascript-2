// Enunciado: Crie uma página que use uma função para verificar se uma string é um palíndromo.
// Um palíndromo é uma palavra ou frase que é dita da mesma maneira na ordem natural que na ordem inversa,
// ignorando pontuação, capitalização e espaçamento. Por exemplo: "Roma me tem amor" e "Socorram-me, subi no ônibus em Marrocos”.

// Observações:

// Use prompt e alert.
// Remover todos os caracteres não alfanuméricos (pontuação, espaços e símbolos) e transformar tudo para minúsculo.
// Teste o seu programa com cenários diferentes.

function verificarPalavrasPalindromo(palavra) {
    const um = removerAcentos(palavra.toLowerCase().replace(/\s/g, ""));
    const dois = [...um.toLowerCase()].reverse().join("")
    console.log(um)
    console.log(dois)
    return um === dois
  }

  verificarPalavrasPalindromo("Socorram-me, subi no ônibus em Marrocos")