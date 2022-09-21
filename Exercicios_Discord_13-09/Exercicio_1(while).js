let N = 0, T = 0, M = 0, Q = 0

while(N >= 0){
    N = prompt("Digite um número")
    if(N > 0){
    T += parseInt(N)
    Q++
    M = T / Q
    }
} 
alert("A soma de todos os numeros é: " + T + "\n"
+ "A média da soma de todos os números é: " + parseFloat(M)  + "\n" + 
"Foram lidos um total de: " + Q + " números")