let N1, N2, N3, Maior, Menor

N1 = prompt("Digite o primeiro número: ")
N2 = prompt("Digite o segundo número: ")
N3 = prompt("Digite o terceiro número: ")

function MaiorNum(N1, N2, N3){
    Maior = Math.max(N1, N2, N3);
    return Maior

}
function MenorNum(N1, N2, N3){
    Menor = Math.min(N1, N2, N3);
    return Menor
}
alert("O maior número desses três números é: " + MaiorNum(N1, N2, N3))
alert("O menor número desses três números é: " + MenorNum(N1, N2, N3))