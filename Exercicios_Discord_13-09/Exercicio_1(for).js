let S = 0, F = 0, TS = 0, TF = 0, MS = 0, MF = 0, MaiorS = 0, S100 = 0, PercS100 = 0

//S = Salário, F = Filhos, TS = Total de salários, TF = Total de filhos, MS = Média salarial,
//MF = Média de filhos, MaiorS = Maior salário, S100 = Quantidade de salários até 100 reais,
//PercS100 = Percentual de pessoas com o salário de até 100 reais

for(x = 0; x < 20; x++){
    F = prompt("Quantos filhos você tem?")
    S = prompt("Digite seu salário:")
    
    TS = parseFloat(TS) + parseInt(S)
    TF = parseInt(TF) + parseInt(F)
    if(MaiorS < S){
        MaiorS = parseFloat(S)
    }

    if(S < 100){
        parseFloat(S100++)
    }

}

MS = TS / 20
MF = parseInt(TF) / 20
PercS100 = (parseFloat(S100) / 20) * 100

alert("A média do salarial da população é de R$: " + MS + "\n" +
"A média de filhos da população é: " + MF + "\n" +
"O maior salário entre a população é de R$: " + MaiorS + "\n" +
"O percentual de pessoas com o salario de até R$ 100 é de: " + PercS100 + "%");