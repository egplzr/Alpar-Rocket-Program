const precoProduto = 50.65;

const desconto = true;


const icms = Math.random() * (25 - 12) + 12;

function calcularDesconto(precoProduto){
    if (desconto) {
        return precoProduto - (precoProduto * 0.1);
    } else {
        return precoProduto;
    }
}

const precoComDesconto = calcularDesconto(precoProduto);

const precoIcms = precoComDesconto * (icms/100);

const precoFinal = precoComDesconto + precoIcms;

console.log(`Preço inicial: R$ ${precoProduto.toFixed(2)}
Preço com desconto: R$ ${precoComDesconto.toFixed(2)}
ICMS aplicado: ${precoIcms.toFixed(2)}%
Preço final com ICMS: R$ ${precoFinal.toFixed(2)}`);