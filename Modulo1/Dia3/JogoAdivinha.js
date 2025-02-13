const prompt = require('prompt-sync')();

const numeroAleatorio = Math.round(Math.random() * 100);
let nTentativas = 6;
let tentativa;

do {
    
    tentativa = Number(prompt('Adivinhe o número entre 0 e 100: '));
    
    if (tentativa > numeroAleatorio){
        console.log('Errou! O número certo é menor que o número digitado');
    } else if (tentativa < numeroAleatorio){
        console.log('Errou! O número certo é maior que o número digitado');
    } else {
        continue;
    }

    nTentativas++;

} while (tentativa != numeroAleatorio);

console.log(`Parabéns! você acertou!
    O número que você digitou é: ${tentativa}
    O número aleatório é: ${numeroAleatorio}
    Você acertou após ${nTentativas} tentativas.`);