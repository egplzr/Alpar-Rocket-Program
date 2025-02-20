const prompt = require('prompt-sync')();

let pontos = 100;
let dado;

let rolarDados = () => Math.floor(Math.random() * 6) + 1;

for (let i = 0; i < 20; i++) {
    dado = rolarDados();
    let mensagem = '';

    prompt(`
        -----------------------------------------------------------
        Rodada ${i + 1}. Sua pontuação atual é: ${pontos};
        
        Aperte Enter para continuar...
        -----------------------------------------------------------
    `);

    if (dado % 2 !== 0) {
        pontos += 10;
        mensagem += '+10 o número é ímpar!';
    } else {
        if (pontos < 0) {
            pontos -= 15;
            mensagem += '-15 o número é par e sua pontuação é negativa!';
        } else {
            pontos -= 10;
            mensagem += '-10 o número é par!';
        }
    }

    if ((i + 1) % 3 === 0) {
        pontos += 15;
        mensagem += '+15 o número da rodada é múltiplo de 3!';

    }

    if ((i + 1) % 4 === 0) {
        if (pontos < 0) {
            pontos -= 40;
            mensagem += '-40 o número da rodada é múltiplo de 4 e sua pontuação é negativa!';
        } else {
            pontos -= 25;
            mensagem += '-25 o número da rodada é múltiplo de 4!';
        }
    }

    console.log(`
        _________________________________
        RESULTADOS:

        Número rolado: ${dado};
        ${mensagem}
        `);

}

if (pontos >= 50) {
    console.log('\n***Parabéns, você ganhou! Sua pontuação foi acima de 50! Pontuação final: ' + pontos);
} else {
    console.log('\n***Que pena! Você perdeu. Sua pontuação foi abaixo de 50! Pontuação final: ' + pontos);
}