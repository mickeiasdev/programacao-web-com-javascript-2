// Enunciado: Crie uma página que use uma função para contar substrings em uma string.

// Observações:

// Use prompt e alert.
// Use expressões regulares.
// Teste o seu programa com cenários diferentes.


function contarSubstrings(texto, substring) {
    let contador = 0;
    let posicao = texto.indexOf(substring);
  
    while (posicao !== -1) {
      contador++;
      posicao = texto.indexOf(substring, posicao + 1);
    }
    return contador;
  }
  
function entradaSubstring() {
    const texto = prompt("Digite o texto:");
    const substring = prompt("Digite a substring que deseja contar:");
    const resultado = contarSubstrings(texto, substring);
    alert(`A substring "${substring}" aparece ${resultado} vezes em "${texto}".`);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const exibir = document.getElementById("exibir");
    const texto = "banana";
    const substring = "na";
    const resultado = contarSubstrings(texto, substring);
  
    exibir.innerHTML = `<p>A substring "${substring}" aparece ${resultado} vezes em "${texto}".</p>`;
  });