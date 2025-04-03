// Enunciado: Crie uma página que use uma função para verificar se duas strings dadas são anagramas uma da outra ou não.
// Um anagrama de uma string é outra string que contém os mesmos caracteres, apenas a ordem dos caracteres pode ser diferente.
// Por exemplo, “listen” e “silent” são anagramas uma da outra.

// Observações:

// Use prompt e alert.
// Dispare um erro caso a string informada não seja válida. Use throw e o erro mais adequado ao tipo de problema encontrado.
// Teste o seu programa com cenários diferentes.

const exibir = document.getElementById("exibir")

function verificarPalavrasAnagrama(um, dois) {
  um = [...um.toLowerCase().replace(/\s/g, "")].sort();
  dois = [...dois.toLowerCase().replace(/\s/g, "")].sort();
  return um.join("") === dois.join("");
}

function validarEntradasComThrowErro(entrada) {
  if (entrada === null)
    throw new Error("Voce clicou em cancelar! Encerrando...");
  if (entrada.trim() === "")
    throw new Error("Voce inseriu um valor vazio! Encerrando...");
  if (!validarStringApenasLetras(entrada))
    throw Error("Voce deve digitar apenas numeros! Encerrando...");
}

try {
  let um = prompt("Digite a primeira palavra:");
  validarEntradasComThrowErro(um);

  let dois = prompt("Digite a segunda palavra:");
  validarEntradasComThrowErro(dois);

  if (verificarPalavrasAnagrama(um, dois)) {
    exibir.innerHTML = `As palavras "<span>${um}</span>" e "<span>${dois}</span>" sao Anagramas!`
    alert(`As palavras "${um}" e "${dois}" sao Anagramas!`);
  } else {
    exibir.innerHTML = `As palavras "<span>${um}</span>" e "<span>${dois}</span>" nao sao Anagramas!`
    alert(`As palavras "${um}" e "${dois}" nao sao Anagramas!`);
  }
} catch (erro) {
  exibir.innerHTML = `<p>Erro: <span>${erro.message}</span></p>`
  alert(erro.message);
}
