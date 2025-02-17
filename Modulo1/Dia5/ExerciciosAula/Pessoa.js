export class Pessoa {
    #nome;
    #idade;
    #email;

    constructor(nome, idade, email){
        this.#nome = nome;
        this.#idade = idade;
        this.#email = email;
    }

    get nome() {
        return this.#nome;
    }

    get idade() {
        return this.#idade;
    }

    get email() {
        return this.#email;
    }

    toString() {
        return `Nome: ${this.nome}, Idade: ${this.idade}, Email: ${this.email}`
    }
}