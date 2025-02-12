const prompt = require('prompt-sync')();

function calcularDesconto(desconto){
    if (desconto.toLowerCase() == "promo15") {
        return precoProduto - (precoProduto * 0.15);
    } else if(descontoRandomizer){
        return precoProduto - (precoProduto * 0.1);
    } else {
        return precoProduto
    }
}

function calcularFrete(estado) {
    if (estado.toLowerCase() == 'sp') {
        return 10;
    } else if (estado.toLowerCase() == 'rj') {
        return 20;
    } else {
        return 30;
    }
}

const descontoRandomizer = Math.random() < 0.5;;
const icms = Math.random() * (25 - 12) + 12;

const precoProduto = Number(prompt('Digite o preço do produto(00.00): '));
const cupomDesconto = prompt('Digite o cupom de desconto (caso não tenha pressione enter.): ');
const estado = prompt('Digite o estado para calcularmos o frete(Ex: SP): ');

const precoComDesconto = calcularDesconto(cupomDesconto);
const precoFrete = calcularFrete(estado);
const precoIcms = precoComDesconto * (icms/100);

const precoFinal = precoComDesconto + precoIcms + precoFrete;

console.log(`Preço inicial: R$ ${precoProduto.toFixed(2)}
Preço com desconto: R$ ${precoComDesconto.toFixed(2)}
Preço do frete para ${estado.toUpperCase()}: R$ ${precoFrete.toFixed(2)}
ICMS aplicado: ${icms.toFixed(2)}% (R$ ${precoIcms.toFixed(2)})
Preço final com ICMS: R$ ${precoFinal.toFixed(2)}`);
