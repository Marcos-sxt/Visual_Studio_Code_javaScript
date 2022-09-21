let N, P, Resultado

 N = prompt("Digite um número que você quer saber uma porcentagem?: ")
 P = prompt("Quantos por cento desse número você quer saber?: ")

 function Porcentagem(N, P){
    Resultado = (parseInt(N) * parseInt(P)) / 100
    return Resultado
 }
 alert(P + "% de " + N + " é igual a: " + Porcentagem(N, P))