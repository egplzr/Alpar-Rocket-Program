
function bhaskara(a, b, c) {

    const delt = (function (a, b, c) {
        return (b ** 2) - (4 * a * c)
    })(a, b, c);

    if (delt < 0) {
        return "A equação não possui raízes reais.";
    } else {
        const x1 = (-b + Math.sqrt(delt)) / (2 * a);
        const x2 = (-b - Math.sqrt(delt)) / (2 * a);

        return `A primeira raíz da equação é: ${x1} e a segunda é: ${x2}`;
    }
}

//Definindo valores para equação x^2 - 5x + 6 = 0;
const a = 1;
const b = -3;
const c = 2;

console.log(bhaskara(a, b, c));
