let N1, Soma = 0

N1 = prompt("Digite um número")

do{
   Soma += parseInt(N1)
   N1--
}while(N1 > 0)
alert("A soma de todos os números de 1 até o número escolhido é: " + Soma)
