let C, F 
 
C = prompt("Digite um valor em graus Celsius para ser convertido para Farenheit: ")

function ConvertCtoF(C, F){
    F = parseFloat(C) * 1.8 + 32
    return F
}
alert("O valor convertido para Farenheit fica:" + ConvertCtoF(C, F))