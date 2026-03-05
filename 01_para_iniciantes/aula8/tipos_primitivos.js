// string, number, undefined, null, boolean, symbol
const nome = 'Paulo'; // strings
const nome1 = 'Luiz'; // strings
const nome2 = `Paulo`; // strings
const num1 = 10; // number
const num2 = 10.80; // number 
let nomeAluno; // underfined = não aponta para lugar nemhum na memória
const sobrenomeAluno = null; // nulo -> não aponta para lugar nemhum na memória
const aprovado = false; // boolean = true, false (lógico)

// const a = [1, 2];
// const b = a;

// console.log(a, b); // [[1, 2], [1, 2]]

// b.push(3);
// console.log(a, b); // [[1, 2, 3], [1, 2, 3]]

let a =2;
const b = a;
console.log(a, b);

a = 3;
console.log(a, b);
