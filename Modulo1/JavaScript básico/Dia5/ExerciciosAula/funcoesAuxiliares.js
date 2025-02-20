import { Pessoa } from "./Pessoa.js"

export function adicionarUsuario(lista, nome, idade, email) {
    // função .some percorre o array e verifica se um elemento satisfaz a condição criada pelo parâmetro que é uma função de callback.
    if (lista.some(usuario => usuario.email === email)) {
        throw new Error('Email já cadastrado');
    }
    lista.push(new Pessoa(nome, idade, email));
    return 'usuário adicionado!';
}

export function removerUsuario(lista, email){
    for (let i = 0; i < lista.length; i++){
        if(lista[i].email.toLowerCase() === email.toLowerCase()){
            lista.splice(i, 1);
            return 'Usuário removido.'
        }
    }
    return 'email não encontrado';
}

export function listarUsuarios(lista) {
    return lista.map(usuario => usuario.toString()).join("\n");
}