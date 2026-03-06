// Exercicio de conta

/*
Receba dois números do úsuario e faça uma conta de adicção e exiba o resultado.
*/

// Iteragindo com úsuario
let num1 = prompt('Digite um número: ');
let num2 = prompt('Digite outro número: ');

// convertando a string
num1 = Number(num1)
num2 = Number(num2)

// const resultado = num1 + num2

// Formas de apresentar o resultado:

// console.log(typeof num1,typeof num2);
// alert('O resultado foi: ' + resultado);
// alert(`O resultado foi ${resultado}`); // template string
alert(`O resultado foi ${num1 + num2}`);
