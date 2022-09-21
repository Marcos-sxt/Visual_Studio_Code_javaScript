export class Patinete {

    cor: string
    marca: string
    aro: number

    constructor(
    cor: string,
    marca: string,
    aro: number
    ){
        this.cor = cor
        this.marca = marca
        this.aro = aro
    }
    PatineteInfo(){
        console.log(`Info desse patinete:
        Cor: ${this.cor}
        Marca: ${this.marca}
        Aro: ${this.aro}`)
    }


















}