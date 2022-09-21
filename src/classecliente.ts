export class Cliente {
    nome: string
    cpf: string
    fidelidade: string
    telefone: string

    constructor(
    nome: string,
    cpf: string,
    fidelidade: string,
    telefone: string,
    ){
        this.nome = nome
        this.cpf = cpf
        this.fidelidade = fidelidade
        this.telefone = telefone
    }
        VerInfo(){
            console.log(`Info do cliente:
            Nome: ${this.nome}
            CPF: ${this.cpf}
            Fidelidade: ${this.fidelidade}
            Telefone: ${this.telefone}`)
        }
    }