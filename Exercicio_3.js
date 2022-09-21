let N1, N2, N3, N4, N1Q, N2Q, N3Q, N4Q;

N1 = prompt("Digite o primeiro número")
N2 = prompt("Digite o segundo número")
N3 = prompt("Digite o terceiro número")
N4 = prompt("Digite o quarto número")

// ** = ao quadrado
N1Q = N1 * N1
N2Q = N2 * N2
N3Q = N3 * N3
N4Q = N4 * N4

if(N3Q >= 1000){
    alert("O quadrado do terceiro número é: " + N3Q)
}else{
    alert("O quadrado de " + N1 + " é " + N1Q + "\nO quadrado de " + N2 + " é " + N2Q + "\nO quadrado de " + N3 + " é " + N3Q + "\nO quadrado de " + N4 + " é " + N4Q)
}