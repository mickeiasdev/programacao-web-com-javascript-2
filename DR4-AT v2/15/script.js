// Enunciado: Crie uma página que use uma função para truncar uma string se ela for maior que o número especificado de caracteres.
// Strings truncadas terminarão com uma sequência de reticências.

// Observações:

// Use prompt e alert.
// Teste o seu programa com cenários diferentes.

function truncar(string, tamanho) {
  if (string.length > tamanho) {
    return string.slice(0, tamanho) + "...";
  }
  return string;
}

function entradaTruncarString(limite) {
    let entrada = prompt(
      "Digite uma palavra ou frase:"
    );
    if (!validarCancelar(entrada)) return;
    while (!validarVazio(entrada)) {
      entrada = prompt(
        "Digite uma palavra ou frase:"
      );
      if(!validarCancelar(entrada)) return;
    }

    const resultado = truncar(entrada, limite);

    if (resultado) {
      exibir.innerHTML = `<p>Frase/Palavra: <span>"${resultado}"</span></p>`;
      alert(`Frase/Palavra:\n\n"${resultado}"`);
    }
  }

  entradaTruncarString(20);