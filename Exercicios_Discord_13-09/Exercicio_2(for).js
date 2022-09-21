let N, Soma = 0

for(N = 1; N <= 500; N++){
    if(N % 2 != 0 && N % 3 == 0){
    Soma += N 
    alert(N)
}

}alert("a soma de todos os números múltiplos de 3 e ímpares contados até aqui é: " + parseInt(Soma))