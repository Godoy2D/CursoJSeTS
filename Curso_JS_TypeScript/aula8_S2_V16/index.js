/*
Luiz Otávio Miranda tem 30 anos, pesa 48 kg
tem 1.80 de altura e seu imc é de 25.925925925925924.
Luiz Otávio nasceu em 1980.
 */

const nome = 'Luiz Otávio';
const sobrenome = 'sobrenome';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2023 - idade;
console.log(nome, sobrenome, 'tem', idade, 'anos,pesa', peso,'kg');
console.log('tem', altura, 'de altura e seu IMC é de', imc);
console.log(nome, 'nasceu em', anoNascimento,'.');




/* OBS */
/* icone "+" pode ser usado para unir as informações dentro do dos parentes no log */
/* caso utilize crases `` dentro do log, utilizar o formato " `tem ${altura} de altura e seu IMC é de ${imc}` " talvez o modo mais atual.
As chaves e o sifrão selecionas as consts setadas.
*/
/*
"Lets" = saida de inforamções, armazena as inforamçoes.
"Const" = constates, informaçoes que não mudam.
*/