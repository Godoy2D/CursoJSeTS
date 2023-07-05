/*Diferanças entre Var e Let*/

var nome = 'Luiz';
var nome = 'Otávio';

/* Caso eu utilize duas "Var" a ultima sepre sera redeclarada, com isso as anteriores serão anuladas */



/* NÃO UTILIZAR O MODELO  " nome = 'Luiz'; " */

/*Isso gera um modelo global, talvez para puxar a msm var em qualquer lugar possa ser interessante, mas para sistemas e sites nem tanto.
Sempre setar com const, var ou let, sempre.
*/

console.log(nome);