// REDUCE

// Some todos os números (reduce)
// Retorne um array com os pares(Filter)
// Retorne um array com o dobro dos valores(Map)

const number = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// // let soma = valor => valor + valor;

// let total = number.reduce(function (acumulador, valor, indice, array) {
//   acumulador += valor;
//   console.log(acumulador,valor)
//   return acumulador;
// }, 0);

// console.log(total)

// Filter
// let total = number.reduce(function (acumulador, valor, indice, array) {
//   if (valor % 8 === 0) acumulador.push(valor) // Não faça com reduce (faça com filter)
//     return acumulador;
// },[]);

// console.log(total)

// Map
// let total = number.reduce(function (acumulador, valor) {
//   acumulador.push(valor*2)
//   return acumulador;
// },[]);

// console.log(total)

// retorne a pessoa mais velha

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 10 },
  { nome: 'Rosana', idade: 64 },
  { nome: 'Wallace', idade: 63 }
]

const maisVelha = pessoas.reduce(function (acumulador, valor) {
  // console.log(acumulador,valor)
  if (acumulador.idade > valor.idade) return acumulador
  return valor
}, 0)
console.log(maisVelha)