let P = 0, E = 0, M = 0;

P = prompt("Qual peso dos tomates? ")

if(P > 50){
    E = P - 50
    M = E * 4
    alert("O valor da multa que você deverá pagar é de R$:" + M.toFixed(2))
}else{
    alert("O valor da multa é de R$:" + M.toFixed(2) + "\n" + "O excesso foi de: " + E )
}