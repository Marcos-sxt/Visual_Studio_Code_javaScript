export class Paciente {

    nome: string
    internacao: string
    idade: number
    alta: string

    constructor(
    nome: string,
    internacao: string,
    idade: number,
    alta: string
    ){
        this.nome = nome
        this.idade = idade
        this.internacao = internacao
        this.alta = alta
    }
    InfoDoPaciente(){
        console.log(`Info do paciente
        Nome: ${this.nome}
        Idade: ${this.idade}
        Data de internatação: ${this.internacao}
        Data de alta: ${this.alta}`)
    }














}