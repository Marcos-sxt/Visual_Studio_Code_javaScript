import { Animal } from "./animaisPolimorfismo";

export class Cachorro extends Animal{
    constructor(
        nome: string,
        idade: number
    ){
        super(nome, idade)
        this.nome = nome
        this.idade = idade
    }
    EmitirSom(){
        console.log("Auau")
    }
    Correr(){
        console.log("Correndo igual um cachorro")
    }
}