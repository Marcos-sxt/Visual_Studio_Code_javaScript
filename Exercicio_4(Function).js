let Peso, Altura, IMC

Peso = prompt("Qual é o seu peso?: ")
Altura = prompt("Qual é a sua altura?: ")

function IMCFunction(Peso, Altura){
IMC = parseFloat(Peso) / (parseFloat(Altura) * parseFloat(Altura))
return IMC
}
alert("Seu IMC é: " + IMCFunction(Peso, Altura).toFixed(2))