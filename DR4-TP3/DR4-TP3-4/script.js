//  Internationalization (I18n)

// Crie uma aplicação que carregue um array com objetos formados pelos códigos de duas letras dos países e seu nome.
// Em seguida, liste o conteúdo do array em uma página HTML, com o título: “I18N - Países do Mundo”. 

// Observações:

// Utilize o objeto Intl.DisplayNames.

// codigo de A = 65;
// codigo de Z = 90;

const lista = document.getElementById('lista');

const codigos = [];
const resposta = [];

for (let i = 65; i <= 90;) {
    const letra1 = String.fromCharCode(i);
    for (let j = 65; j <= 90;) {
        const letra2 = String.fromCharCode(j);
        codigos.push(letra1 + letra2);
        j++;
    }
    i++;
}

for (let i = 0; i < codigos.length; i++) {
    const validarPais = new Intl.DisplayNames(['pt'], {type: 'region'});
    if(codigos[i] !== validarPais.of(codigos[i])) { 
        resposta.push(codigos[i] + " - " + validarPais.of(codigos[i]));
        }
}

resposta.forEach(item => {
    lista.innerHTML += `<li>${item}</li>`;
});