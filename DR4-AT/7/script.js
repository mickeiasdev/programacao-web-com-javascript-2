// Enunciado: Crie uma página com um programa que aplique uma pesquisa que avalia os serviços prestados por uma empresa
// de HelpDesk. Defina um array com perguntas que receberão respostas-padrão. As respostas-padrão pontuam o serviço da
// seguinte forma: Concordo = 10, Concordo Parcialmente = 5 e Discordo = 0 (use um prompt para obter a resposta do usuário).

// No final, use o alert para apresentar o percentual de satisfação do cliente.

// Observações:

// Use prompt e alert.
// Coloque pelo menos 5 questões.
// Teste o seu programa com cenários diferentes.

const exibir = document.getElementById("exibir");

const perguntas = [
  "O atendimento foi rápido e eficiente?",
  "O problema foi resolvido de forma satisfatória?",
  "O atendente foi educado e prestativo?",
  "Foi fácil entrar em contato com o suporte?",
  "Estou satisfeito com o atendimento recebido?",
];

function converterNota(num) {
  if (num === 1) return 10;
  if (num === 2) return 5;
  if (num === 3) return 0;
  return;
}

function fazerPerguntas() {
  let notaAcumulada = 0;
  const notaTotal = perguntas.length * 10;

  for (let i = 0; i < perguntas.length; i++) {
    let resposta = prompt(
      `${perguntas[i]}\n\n1. Concordo\n2. Concordo Parcialmente\n3. Discordo`
    );

    if (!validarCancelar(resposta)) return;

    while (
      !validarNumeroInteiroPositivo(resposta) ||
      !limitarNumeroDaEntrada(resposta)
    ) {
      resposta = prompt(
        `${perguntas[i]}\n\n1. Concordo\n2. Concordo Parcialmente\n3. Discordo`
      );

      if (!validarCancelar(resposta)) return;
    }
    
    console.log(resposta);
    notaAcumulada += converterNota(Number(resposta));
    console.log(notaAcumulada);
  }
  const percentual = (notaAcumulada / notaTotal) * 100;
  alert(`Percentual de satisfação: ${percentual.toFixed(2)}%`);
  exibir.innerHTML = `Percentual de satisfação: <span>${percentual.toFixed(
    2
  )}%</span>`;
}

fazerPerguntas();
