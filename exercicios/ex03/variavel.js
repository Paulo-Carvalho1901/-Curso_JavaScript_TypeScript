/*
Exercicio variaveis:

varA = 'A'
varB = 'B'
varC = 'C'

Faça o valor de varA apontar para o valor de B
Faça o valor de varB apontar para o valor de C
Faça o valor de varC apontar para o valor de A
*/

// Declarando variáveis
let varA = 'A';
let varB = 'B';
let varC = 'C';
let varD = ''

varD = varA;
varA = varB;
varB = varC;
varC = varD;

console.log(varA, varB, varC);
