let N, P, Resultado

N = prompt("Digite um número que você quer descobrir uma porcentagem: ")
P = prompt("Quantos por cento desse número você quer descobrir?: ")

function Porcentagem(N, P){
    Resultado = (P / 100) * N
    return Resultado
}
alert(P + "% de " + N + " é: " + Porcentagem(N, P))