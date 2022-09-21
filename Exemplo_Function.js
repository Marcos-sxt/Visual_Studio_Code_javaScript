/*let N1, N2, Resultado;

N1 = prompt("Digite um numero");
N2 = prompt("Digite mais um numero");

function teste(N1, N2){

    Resultado = parseInt(N1) + parseInt(N2)
    return alert(Resultado);
}

teste(N1, N2);
*/

do{
    opcao = MostrarMenu();
}while(opcao != 2)

function MostrarMenu(){
    entrada = "";
    alert("==-Mostrar o Menu==-" + "\n1 - Mostrar o Menu" + "\n2 - Sair")
    return entrada = prompt();
}