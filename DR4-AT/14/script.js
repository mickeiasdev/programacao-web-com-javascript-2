// Enunciado: Crie uma página que use uma função para converter uma string com um nome próprio em formato abreviado,
// como usado aqui no Brasil. Por exemplo: “Pedro Álvares Cabral” ficaria “Pedro A. Cabral”.

// Observações:

// Use prompt e alert.
// Dispare um erro caso o nome próprio informado não seja passível de abreviação. Use throw e o erro mais adequado ao tipo de problema encontrado.
// Teste o seu programa com cenários diferentes.

const exibir = document.getElementById("exibir");

function abreviarNome(nome) {
  const entrada = prompt("Digite um nome completo:");
  const preposicoes = ["de", "da", "do", "dos", "das"];
  
  try {
    validarEntradasComThrowErro(entrada);
    
    const nomes = entrada.split(" ");

    if (nomes.length < 2) {
      throw new Error("Nome inválido! Deve conter pelo menos um sobrenome.");
    }

    const nomeSemPreposicoes = nomes.filter((parte) => !preposicoes.includes(parte.toLowerCase()));
    const primeiroNome = nomeSemPreposicoes[0].charAt(0).toUpperCase() + nomeSemPreposicoes[0].slice(1).toLowerCase();
    const sobrenome = nomeSemPreposicoes
      .slice(1)
      .map((parte) => parte.charAt(0).toUpperCase() + ".")
      .join(" ");
    
    exibir.innerHTML = `<p>Nome abreviado: <span>${primeiroNome} ${sobrenome}</span></p>`;
    alert(`Nome abreviado: ${primeiroNome} ${sobrenome}`);
  } catch (erro) {
    exibir.innerHTML = `<p>Erro: <span>${erro.message}</span></p>`;
    alert(erro.message);
  }
}

abreviarNome();
