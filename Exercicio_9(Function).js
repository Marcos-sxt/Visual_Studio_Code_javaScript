let N1, N2,  Soma, Subtração, Multiplicação, Divisão

N1 = prompt("Digite um número: ")
N2 = prompt("Digite um segundo número: ")

function Calculos(N1, N2){
    Soma = parseInt(N1) + parseInt(N2)
    Subtração = parseInt(N1) - parseInt(N2)
    Multiplicação = parseInt(N1) * parseInt(N2)
    Divisão = parseInt(N1) / parseInt(N2) 
    return Soma, Subtração, Multiplicação, Divisão
}
Calculos(N1, N2)
alert("A soma dos números que você digitou é: " + Soma + "\n" + "A Subtração dos números que você digitou é: " + Subtração + 
"\n" + "A Multiplicação dos números que você digitou é: " + Multiplicação + "\n" + "A Divisão dos números que você digitou é: " 
+ Divisão)