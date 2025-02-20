export class Animal {
    // O # antes do nome da variável torna ela privada.

    #nome;
    #idade;

    constructor(nome, idade){
        this.#nome = nome;
        this.#idade = idade;
    }

    fazerBarulho(){
        return `${this.nome} faz um barulho!`;
    }

    // Método estático
    static descricao() {
        return "Esta é uma classe Animal";
    }

    //Getters & Setters
    get getNome (){
        return this.#nome;
    }

    set setNome (novoNome) {
        this.#nome = novoNome;
    }

    get getIdade() {
        return this.#idade;
    }

    set setIdade(novaIdade) {
        this.#idade = novaIdade;
    }

}

const cachorro = new Animal('Rex', 3);

//O Js chama os métodos Get e Set automaticamente:
console.log(cachorro);
console.log(cachorro.getNome, cachorro.getIdade);

cachorro.setNome = 'Totó';

console.log(cachorro.getNome, cachorro.getIdade);
