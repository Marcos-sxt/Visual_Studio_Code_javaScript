/*import { Pessoa } from "./src/pessoa";

let pessoaUm = new Pessoa();

pessoaUm.nome = "Debora / Pekky";
pessoaUm.cpf = "235.568.695-38";
pessoaUm.idade = 18;
pessoaUm.telefone = "(21) 98456-8147";

console.log(` o nome da pessoa é:  ${pessoaUm.nome}`);
*/

import { ContaBanco } from "./src/ContaBanco";

let Conta1 = new ContaBanco("Marcos", "005-4", "4002-52", 500);

Conta1.deposito(500);
Conta1.verSaldo();
Conta1.sacar(600);
Conta1.verSaldo();
console.log(Conta1.saldo)