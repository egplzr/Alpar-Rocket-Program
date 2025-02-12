const prompt = require('prompt-sync')();

function delta (a, b, c){
    return (b**2) - (4 * a * c);
}

function bhaskara (a, b, c){
    
    const delt = delta(a, b, c);
    
    const x1 = (-b + Math.sqrt(delt)) / (2*a);
    const x2 = (-b - Math.sqrt(delt)) / (2*a);
    
    console.log(`A primeira raíz da equação é: ${x1} e a segunda é: ${x2}`)
}


//Definindo valores para equação x^2 - 5x + 6 = 0;
const a = 1;
const b = 4;
const c = 5;

if (a == 0) {
    console.log('O termo A da equação não pode ser 0.');
}

if (delta(a, b, c) > 0){
    console.log('A equação possui duas raízes reais.');
    bhaskara(a, b, c);
} else if (delta(a, b, c) == 0){
    console.log('A equação possui uma única raíz real.');
    bhaskara(a, b, c);
} else {
    console.log('Não existem raízes reais para a equação.');
}

const nome = prompt('Digite seu nome: ');
console.log(`Olá, ${nome}!`);