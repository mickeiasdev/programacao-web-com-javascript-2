// receber quantidade de jogadores
// max de 6 numeros gerados

const numJogadores = Number(prompt("Digite o numero de jogadores:"))
const numeros = [];

for (let i = 0; i < numJogadores; i++) {
    const numero = parseInt(Math.random() * 60) + 1
    numeros.forEach((item) => {
        if(item === numero){
            i--
            return
        } else {
            numeros.push(numero)
        }
    });
}

console.log(numeros)