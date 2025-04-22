// Enunciado: Crie uma página que use uma função para contar substrings em uma string.

// Observações:

// Use prompt e alert.
// Use expressões regulares.
// Teste o seu programa com cenários diferentes.

const exibir = document.getElementById("exibir");

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
    let texto = prompt("Digite o texto:");
    if(!validarCancelar(texto)) return
    while(!validarVazio(texto)){
      alert("O programa espera uma string como entrada.")
      texto = prompt("Digite o texto:")
      if(!validarCancelar(texto)) return
    }

    let substring = prompt("Digite a substring que deseja contar:");
    if(!validarCancelar(substring)) return
    while(!validarVazio(substring)){
      alert("O programa espera uma string como entrada.")
      substring = prompt("Digite a substring que deseja contar:")
      if(!validarCancelar(substring)) return
    }
    
    const resultado = contarSubstrings(texto, substring);
    alert(`A substring "${substring}" aparece ${resultado} vezes em "${texto}".`);
    exibir.innerHTML = `<p>A substring <span>"${substring}"</span> aparece <span>${resultado}</span> vezes em <span>"${texto}"</span>.</p>`;
  }

  entradaSubstring(); 