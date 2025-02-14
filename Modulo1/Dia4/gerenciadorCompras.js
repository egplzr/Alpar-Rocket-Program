function adiconarItem(listaCompras, item){
    listaCompras.push(item);
    return `
    Item ${item} adicionado.`
}

function removerItem(listaCompras, item){
    const index = listaCompras.indexOf(item);

    return `
    Item ${listaCompras.splice(index, 1)} removido.`
}

function exibirLista(listaCompras){
    let lista = [];
    for (let i = 0; i < listaCompras.length; i++){
        lista.push((`${i+1}° ${listaCompras[i]};`));
    }

    //Função .join() junta os elementos de um array em uma única String, separando eles pelo separador especificado no parâmetro.
    //O separador padrão é a vírgula.
    return lista.join("\n");
}

//testando funcao anonima
const menu = function() {
    return `
    ________________________________________
        Vamos montar sua lista de compras!
        Escolha uma das opções abaixo:
        
            1 Adicionar um item à lista.
            2 Remover um item da lista.
            3 Exibir os itens da lista.
            4 Sair do programa.
    ________________________________________

    `
}

const prompt = require('prompt-sync')();

let listaCompras = [];

let loop = true;

let opcao;

do{
    opcao = Number(prompt(menu()));  
    
    switch (opcao){
        case 1:
            console.log(adiconarItem(listaCompras, prompt('Informe o item que deseja adicionar: ')));
            prompt('\naperte enter para retornar ao menu...');
            break;
        
        case 2:
            console.log(removerItem(listaCompras, prompt('Informe o item que deseja remover: ')));
            prompt('\naperte enter para retornar ao menu...');
            break;
        
        case 3:
            console.log(exibirLista(listaCompras));
            prompt('\naperte enter para retornar ao menu...');
            break;
        
        default:
            console.log('\nSaindo...')
            loop = false;
    }

}while(loop);
