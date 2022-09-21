export class Aviao {
    gasolina: number;
    registro: string;
    passageiros: number;
    peso: number;

    constructor (
    gasolina: number,
    registro: string,
    passageiros: number,
    peso: number
    ) {
        this.gasolina = gasolina
        this.passageiros = passageiros
        this.peso = peso
        this.registro = registro 
    }

    ChecarGasolina(LitrosGasolina: number){
        if(LitrosGasolina < 3000){
            console.log(`São necessarios pelo menos 3000 litros de gasolina no tanque para decolar,
            Litros de gasolina no tanque: ${LitrosGasolina}`)
    }else{
        console.log(`Tudo bem o avião tem gasolina o suficiente para decolar e fazer a viagem,
        Litros de gasolina no tanque: ${LitrosGasolina}`)
    }
}
    ChecarRegistro(Registro: string){
        if(Registro != "H300JS"){
            console.log(`Essa número de serie não está autorizado a decolar`)
        }else{
            console.log("Tudo bem, esse número de serie está permitido para decolar")
        }
    }
    ChecarPassageiros(NumPassageiros: number){
         if(NumPassageiros < 400){
            console.log(`Ainda faltam passageiros para embarcar, aguarde o restante dos passageiros,
            Número de passageiros atual: ${NumPassageiros}`)
        }else if(NumPassageiros > 400){
            console.log(`O número de passageiros excedeu o permitido por avião, por favor retire alguns
            passageiros do avião, Número de passageiros atual: ${NumPassageiros}`)
        }else{
            console.log(`Tudo bem o número de passageiros está certo,
             Número de passageiros atual: ${NumPassageiros}`)
        }
        }
        ChecarPeso(PesoTon: number){
            if(PesoTon > 500){
                console.log(`O avião está muito pesado e não pode decolar nessas circuntâncias,
                 Peso atual do avião em toneladas: ${PesoTon}`)
            }else{
                console.log(`Tudo bem o peso do avião está dentro do permitido,
                 Peso atual do avião em toneladas: ${PesoTon}`)
            }
        }
    }