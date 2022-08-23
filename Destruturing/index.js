const numPares = [2, 4, 6, 8, 10]
const numImpares = [3, 5, 7, 9]

const numeros = [...numPares, ...numImpares]
// console.log(numeros)

const [num1, ...num2] = [1, 2, 3, 4, 5, 6]
// const num1 = 1
// const num2 = 2

console.log(num1, num2)

const pessoa = {
  nome: 'Diego',
  idade: '31'
}
const pessoaComTelefone = {
  ...pessoa,
  telefone: 33241266
}

console.log(pessoaComTelefone)

const {nome} = pessoa
console.log(nome)

function imprimirDados({nome,idade}){
  // const {nome, idade} = dados
  console.log(nome,idade)
}
imprimirDados(pessoa)
