export class CFuncionario {
    cod: string;
    cargo: string;
    ct: string;
    salario: number

    constructor(
        cod: string,
        cargo: string,
        ct: string,
        salario: number
    ){
        this.cod = cod
        this.cargo = cargo
        this.ct = ct
        this.salario = salario
    }
    InfoFuncionario(){
        console.log(`Info desse funcionario:
        Código do Funcionario: ${this.cod}
        Cargo do Funcionario: ${this.cargo}
        Número da carteira de trabalho do Funcionario: ${this.ct}
        Salário do Funcionario: ${this.salario}`)
    }
}