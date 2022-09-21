let taxaDeImposto, CustoDeVenda, CustoDoImposto;

CustoDeVenda = prompt ("Insira o valor de custo do produto: ");
taxaDeImposto = prompt ("Insira o valor da taxa de imposto em porcentagem: ");

function somaImposto(taxaDeImposto, CustoDeVenda){
    CustoDoImposto = parseFloat(CustoDeVenda) + (parseFloat(CustoDeVenda)) *(parseFloat(taxaDeImposto)/100);
    alert ("O valor do produto com a taxa de imposto é de: " + parseFloat(CustoDoImposto));
}

somaImposto (taxaDeImposto, CustoDeVenda);