let Indice;

Indice = prompt("Qual é o indice de poluição atual?")

if(Indice == 0.3){
    alert("O indice de poluição está crescendo o 1° grupo deve suspender suas atividades!")
}else if(Indice == 0.4){
    alert("O indice de poluição esta acima da média geral de funcionamento de todas as unidades, o 1° e o 2° grupo devem suspender suas atividades!")
}else if(Indice == 0.5){
    alert("O indice de poluição excedeu o limite aceito!, todos os grupos devem suspender suas atividades imediatamente!")
}else if(Indice <= 0.25){
    alert("O indice de poluição esta aceitavel")
}