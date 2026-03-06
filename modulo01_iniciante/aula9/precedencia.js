/*
Precedencia dos operadores

1° ()
2° **
3° / %
4° + -
*/

// const num1 = 5;
// const num2 = 2;
// const num3 = 10;
// console.log((num1 + num2) * num3);
// console.log(num1 * num2 / num3)

let contador = 10;
// ++contador; // encrementando em 1
// ++contador;
// contador++;
// contador++;

// ----------------------------------------------------------
// Encremento
console.log(++contador);
console.log(contador++);// aqui nao mostra o encremento
console.log(contador);

// Decremento
console.log(--contador);
console.log(contador--);
console.log(contador);

// melhores praticas
contador++;
console.log(contador);

// pulando mais de 1
const passo = 5;
let contador2 = 2;

contador2 = contador2 + passo;
console.log(contador2);
contador2 = contador2 + passo;
console.log(contador2);
contador2 = contador2 + passo;
console.log(contador2);
contador2 = contador2 + passo;
console.log(contador2);

// forma simplificada
contador2 += passo; // contador2 + contador2 + passo
contador2 *= 2;
contador2 /= 2;
console.log(contador2);

// NaN - not a number
const numero1 = 10;
const numero2 = parseFloat('5.2');
console.log(numero1 + numero2);
console.log(typeof numero2)
