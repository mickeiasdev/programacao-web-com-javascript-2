// Enunciado: Crie uma página que use uma função para converter uma string com um nome próprio em formato abreviado,
// como usado aqui no Brasil. Por exemplo: “Pedro Álvares Cabral” ficaria “Pedro A. Cabral”.

// Observações:

// Use prompt e alert.
// Dispare um erro caso o nome próprio informado não seja passível de abreviação.
// Use throw e o erro mais adequado ao tipo de problema encontrado.
// Teste o seu programa com cenários diferentes.

const exibir = document.getElementById("exibir");

function abreviarNome() {
  const entrada = prompt("Digite um nome completo:");
  const preposicoes = ["de", "da", "do", "dos", "das"];

  try {
    validarEntradasComThrowErro(entrada);

    const nomes = entrada.split(" ");

    if (nomes.length < 2) {
      throw new Error("Nome inválido! Deve conter pelo menos um sobrenome.");
    }

    const nomeLimpo = nomes.filter(
      (parte) => !preposicoes.includes(parte.toLowerCase())
    );

    const primeiroNome =
      nomeLimpo[0].charAt(0).toUpperCase() +
      nomeLimpo[0].slice(1).toLowerCase();
      
    const ultimoNome =
      nomeLimpo[nomeLimpo.length - 1]
        .charAt(0)
        .toUpperCase() + nomeLimpo[nomeLimpo.length - 1].slice(1).toLowerCase();

    const abreviado = nomeLimpo.slice(1).map((parte) => (parte.charAt(0).toUpperCase() + "."))
    abreviado.pop().join(" ");
    
    console.log(abreviado)

    exibir.innerHTML = `<p>Nome abreviado: <span>${primeiroNome} ${abreviado} ${ultimoNome}</span></p>`;
    alert(`Nome abreviado: ${primeiroNome} ${abreviado} ${ultimoNome}`);
  } catch (erro) {
    exibir.innerHTML = `<p>Erro: <span>${erro.message}</span></p>`;
    alert(erro.message);
  }
}

abreviarNome();
