/* TIPOS DE DADOS PRIMITIVOS */

const nome = 'Luiz';  // String
const nome1 = "Luiz"; // String
const nome2 = `Luiz`; // String

const num1 = 10; // Number
const num2 = 10.52; // Number


let nomeAluno; // Declarei a variavel porem não declarei valor, variavel Undefined = não aponta a local nenhum, valor nulo.
let sobrenomeAluno = null; // Valor nulo, não aponta a local nenhum, pore não é igual ao valor nomeAluno.

// OBS: Deixar a variavel "undefined" para o proprio js, assim ele seta sozinho.

/* VALORES BOLEANOS */

const aprovado = true; // Boolean é explicito = true or false (utilizar de maneria logica)


// ver o tipo de nome.
console.log (typeof nome, num1);


// DIFERENÇAS DOS DADOS PRIMITIVOS

const a = [1, 2];
const b = [a];

console.log(a, b);

b.push(3);
console.log(a, b);