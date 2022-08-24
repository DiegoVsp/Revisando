// Parametros da Função
// argumentos que sustenta todos os argumentos enviados
// function funcao(a, b, c) {
//   let total = 0;
//   for (let argumento of arguments) {
//     total += argumento
//   }
//   console.log(total, a, b, c)
// }
// funcao(1, 2, 3, 4, 5, 6, 7)

// function funcao2(a, b, c, d, e, f) {
//   console.log(a, b, c, d, e, f)
// }
// funcao2(1, 2, 3)

// function funcao3(a, b = 0) {
//   // b = b || 0 //Maneira antiga de se resolver caso b não tenha um valor
//   console.log(a + b)
// }
// funcao3(1, 2)

// Atribuição via desestruturação
// function funcao4({ nome, sobrenome, idade }) {
//   console.log(nome, sobrenome, idade)
// }
// const pessoa = {
//   nome: 'Diego',
//   sobrenome: 'Vespa',
//   idade: 31
// }
// funcao4({ nome, sobrenome, idade } = pessoa)

// function funcao5([valor1, valor2, valor3]) {
//   console.log(valor1, valor2, valor3)
// }
// funcao5(['Diego', 'Fernando', 'Ricardo'])

const conta = function (operador, acumulador, ...numeros) {// rest sempre deve ser omultimo no parametro
  for (let numero of numeros) {
    if (operador === '+') acumulador += numero
    if (operador === '-') acumulador -= numero
    if (operador === '*') acumulador *= numero
    if (operador === '/') acumulador /= numero
  }
  console.log(acumulador)
};

conta('+', acumulador = 1, 20, 30, 40, 50)

const conta2 = (...args) => { //rest operator funciona em qualquer tipo de função
  console.log(args)
}
conta2('+', 1, 20, 30, 40, 50)