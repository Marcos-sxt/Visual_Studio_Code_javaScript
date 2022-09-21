import { Animal } from "./animaisPolimorfismo";

export class Preguica extends Animal {
    constructor(
        nome: string,
        idade: number
    ){
        super(nome, idade)
        this.nome = nome
        this.idade = idade
    }
    EmitirSom(){
        console.log("Som de preguiça?")
    }
    SubirEmArvores(){
        console.log("Subindo em árvores")
    }
}