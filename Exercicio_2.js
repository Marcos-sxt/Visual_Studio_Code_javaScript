let C, N, S, E = 0, ST, SE;

N = prompt("Quantas horas você trabalhou?")
C = prompt("Qual é o seu código de trabalhador?")

S = N * 10

if(N > 50){
    E = N - 50
    E = E * 20
    SE = S + E
    ST = S + E
    alert(C + ", Seu salário base é: " + S + "\n" + "\nSeu salário excedente é: " + E + "\n" + "\nSeu salário total é: " + ST);
}else{
    alert(C + ", Seu salário total é: " + S); 
}