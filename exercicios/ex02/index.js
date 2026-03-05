// Exercicios constantes

/*
Paulo Carvalho tem 30 anos, pesa 94 kg
tem 1.80 de altura e seu IMC é ????
Paulo Nasceu em anoNascimento
*/

const nome = 'Paulo Carvalho';
let anoAtual = 2026;
let anoNascimento = 1989;
let idade = anoAtual - anoNascimento;
let peso = 96;
const alturaEmCm = 1.80;
let IMC = peso / (alturaEmCm * alturaEmCm);

console.log(`${nome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmCm} altura e seu IMC é ${IMC}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
