import { Animal } from "./animaisPolimorfismo";

export class Cavalo extends Animal {
    constructor(
        nome: string,
        idade: number
    ){
        super(nome, idade)
        this.nome = nome
        this.idade = idade
    }
    EmitirSom(){
        console.log("Relincho")
    }
    Correr(){
        console.log("Pocotó")
    }
}