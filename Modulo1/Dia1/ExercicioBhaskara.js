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
const b = -5;
const c = 6;

bhaskara(a, b, c);
