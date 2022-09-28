// Crie uma um programa para trabalhar com estoque de uma loja, o programa deverá
// trabalhar com Collection do tipo Array de JavaScript para manipular os
// dados desse estoque, o programa deverá atender as seguintes funcionalidades:

// Armazenar dados da Array
// Remover dados da Array;
// Atualizar dados da Array.
// Apresentar todos os dados da Array.


let Estoque: string[] = []


console.log("Bem vindo(a) a nossa loja de compostos químicos")
console.log("A seguir estão os itens disponiveis no nosso estoque")
Estoque.push('Nitrito de Amonio', 'Bicarbonato de Sódio', 'Hexafluoreto de Xenônio', 'Sulfato de Magnésio',
 'Hidróxido de Potássio')

// for(let I = 0; I <= 4; I++){
//     console.log(Estoque)
// }
for( let I of Estoque){
         console.log(I)
    }

Estoque.pop()

Estoque.splice(1, 1)

console.log("Perdão, aparentemente houve um erro de leitura do estoque \nOs itens que estão atualmente disponiveis são:")

Estoque.forEach((Leitura) => console.log(Leitura))