"use strict";
/*import { Pessoa } from "./src/pessoa";

let pessoaUm = new Pessoa();

pessoaUm.nome = "Debora / Pekky";
pessoaUm.cpf = "235.568.695-38";
pessoaUm.idade = 18;
pessoaUm.telefone = "(21) 98456-8147";

console.log(` o nome da pessoa é:  ${pessoaUm.nome}`);
*/
exports.__esModule = true;
var ContaBanco_1 = require("./src/ContaBanco");
var Conta1 = new ContaBanco_1.ContaBanco("Marcos", "005-4", "4002-52", 500);
Conta1.deposito(500);
Conta1.verSaldo();
Conta1.sacar(2000);
Conta1.verSaldo();
//console.log(Conta1.saldo)
