/*Crie um programa de saúde que trabalhe com variáveis que recebam 
dados de peso, nome, altura, data de internação e uma variável que receba
 o dado se o paciente é diabético ou não.
 */

 let Peso, Nome, Altura, DI, Diabetico

 Peso = prompt("Digite seu peso")
 Nome = prompt("Escreva seu nome")
 Altura = prompt("Digite sua altura")
 DI = prompt("Quando você foi internado?") 
 Diabetico = prompt("Você é diabético?")

 alert("Olá, " + Nome + "\n" + "Aqui estão os dados que recebemos de você: " + "\n" +
 "Peso: " + Peso + "\n" + "Altura: " + Altura + "\n" + "Dia da internação: " +
 DI + "\n" + "É diabético? " + Diabetico)