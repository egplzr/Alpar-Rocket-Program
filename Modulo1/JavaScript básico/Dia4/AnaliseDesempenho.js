function nota(){
  return Math.floor(Math.random() * 11);
}

const equipe = [
  {nome: "Cintia", tarefas: [nota(), nota(), nota(), nota(), nota()]},
  {nome: "Felipe", tarefas: [nota(), nota(), nota(), nota(), nota(), nota()]},
  {nome: "Enzo", tarefas: [nota(), nota(), nota(), nota(), nota(), nota(), nota()]},
  {nome: "Rebeca", tarefas: [nota(), nota(), nota(), nota(), nota(), nota(), nota(), nota()]},
  {nome: "Luigi", tarefas: [nota(), nota(), nota(), nota(), nota(), nota(), nota(), nota(), nota()]}
];

function calcularMedia(tarefas) {
  let soma = 0;
  let somaPesos = 0;

  for(let i = 0; i < tarefas.length; i++){
    const peso = (i % 2 === 0) ? 1 : 2;
    soma += tarefas[i] * peso;
    somaPesos += peso;
  }

  return soma / somaPesos;
}

//Método .map = mapeia os elementos de um vetor para outro novo vetor, excecutando a função de callBack em cada elemento.
const equipeMediaPonderada = equipe.map(membroEquipe => {
  let media = calcularMedia(membroEquipe.tarefas);
  
  if (media >= 8){
    media += 2;
  }

  return {nome: membroEquipe.nome, pontuacao: media};
});

//Função .reduce = percorre cada elemento do vetor, extrai um acumulador (seja valor mais alto ou mais baixo)
// aplicando a função callback que retorna um novo valor para o acumulador.

const melhorDesempenho = equipeMediaPonderada.reduce((a, b) => a.pontuacao > b.pontuacao ? a : b);
const piorDesempenho = equipeMediaPonderada.reduce((a, b) => a.pontuacao < b.pontuacao ? a : b);

equipeMediaPonderada.forEach(membroEquipe => {
  console.log(`Nome: ${membroEquipe.nome} | média: ${membroEquipe.pontuacao.toFixed(2)}`);
});

// Exibe o melhor e o pior desempenho
console.log(`\nMelhor desempenho: ${melhorDesempenho.nome} | média ${melhorDesempenho.pontuacao.toFixed(2)}`);
console.log(`Pior desempenho: ${piorDesempenho.nome} | média ${piorDesempenho.pontuacao.toFixed(2)}`);