import { Animal } from "./Animal.js";

class Cachorro extends Animal {
    #raca;
    #barulho;

    constructor(nome, idade, raca, barulho){
        super(nome, idade);
        this.raca = raca;
        this.barulho = barulho;
    }

    fazerBarulho(){
        return `${this.barulho}, ${this.barulho}`;
    }

    get getRaca() {
        return this.raca;
    }

    set setRaca(novaRaca){
        this.raca = novaRaca;
    }

    set setBarulho(novoBarulho){
        this.barulho = novoBarulho;
    }
}

const cachorro = new Cachorro('Pipito', 4, 'Pastor Alemão', 'Rouf rouf!');

console.log(cachorro.getNome, cachorro.fazerBarulho());