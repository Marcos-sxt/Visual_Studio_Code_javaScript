let N;

N = prompt("Digite um número")

if(N % 2 == 0 && N >= 0){
    alert("Esse número é par e positivo")
}else if(N % 2 == 0 && N < 0){
    alert("Esse número é par e negativo")
}else if(N % 2 != 0 && N > 0){
    alert("Esse número é ímpar e positivo")
}else{
    alert("Esse número é ímpar e negativo")
}
