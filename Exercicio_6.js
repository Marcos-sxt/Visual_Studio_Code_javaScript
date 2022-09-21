let Idade

Idade = prompt("Digite sua idade:")

if(Idade == 5 || Idade == 6 || Idade == 7){
    alert("Você está classificado/a para a categoria Infantil A")
}else if(Idade == 8 || Idade == 9 || Idade == 10 || Idade == 11){
    alert("Você está classificado/a para a categoria Infantil B")
}else if(Idade == 12 || Idade == 13){
    alert("Você está classificado/a para a categoria Juvenil A")
}else if(Idade == 14 || Idade == 15 || Idade == 16 || Idade == 17){
    alert("Você está classificado/a para a categoria Juvenil B")
}else if(Idade >= 18){
    alert("Você está classificado/a para a categoria Adultos")
}else{
    alert("Você não tem Idade suficiente para se classificar em nenhuma das categorias")
}