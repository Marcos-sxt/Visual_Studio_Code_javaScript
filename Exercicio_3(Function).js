let C, F 
 
F = prompt("Digite um valor em Farenheit para ser convertido para Celsius: ")

function ConvertCtoF(C, F){
    C = (parseInt(F) - 32) / 1.8
    return C
}
alert("O valor convertido para graus Celsius fica: " + ConvertCtoF(C, F))