export class Eletronico {
    componentes: string;
    amperagem: string;
    voltagem: string;
    funcionando: string;

    constructor(
    componentes: string,
    amperagem: string,
    voltagem: string,
    funcionando: string,
    ){
        this.componentes = componentes
        this.amperagem = amperagem
        this.funcionando = funcionando
        this.voltagem = voltagem
    }
    Conferir(){
        console.log(`Checagem do eletrônico:
        Componentes: ${this.componentes}
        Amperagem: ${this.amperagem}
        Voltagem: ${this.voltagem}
        Funcionando: ${this.funcionando}`)
    }






















}