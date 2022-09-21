export class ContaBancaria {

    nomedocliente: string
    cpf: string
    numerodaconta: string
    saldo: number

    constructor(
    nomedocliente: string,
    cpf: string,
    numerodaconta: string,
    saldo: number
    ){
        this.nomedocliente = nomedocliente
        this.cpf = cpf
        this.numerodaconta = numerodaconta
        this.saldo = saldo
    }
    InfoDoCliente(){
        console.log(`Info do cliente
        Nome do Cliente: ${this.nomedocliente}
        CPF: ${this.cpf}
        Número da conta: ${this.numerodaconta}`)
    }
    SaldoDoCliente(){
        console.log(`
        Saldo da conta do cliente: ${this.saldo}`)
    }
}