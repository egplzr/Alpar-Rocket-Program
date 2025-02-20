import { adicionarUsuario, removerUsuario, listarUsuarios } from './funcoesAuxiliares.js';
import promptSync from 'prompt-sync';

const listaDeUsuarios = [];

const menu = function() {
    return `
    ____________________________________________________________
        "Gerenciamento de usuários, o que deseja fazer:" 
            "1 - Adicionar usuário" 
            "2 - Remover usuário" 
            "3 - Listar usuários" 
            "4 - Sair"
    ____________________________________________________________

    `;
}

function main() {

    const prompt = promptSync({ sigint: true });
    let opcao;

    do {
        console.log(menu());
        opcao = Number(prompt('Digite a opção: '));

        switch (opcao) {
            case 1:
                console.log(adicionarUsuario(listaDeUsuarios,
                    prompt("Digite o nome: "),
                    prompt("Digite a idade: "),
                    prompt("Digite o email: ")
                ));
                break;

            case 2:
                console.log(removerUsuario(listaDeUsuarios, prompt("Digite o email do usuário a ser removido: ")));
                break;

            case 3:
                console.log(listarUsuarios(listaDeUsuarios));
                break;

            case 4:
                console.log('Saindo...')
                break;

            default:
                console.log('\nOpção inválida')
        }

    } while (opcao != 4);
};

main();