// // For of

// const nomes = ['Diego Vespa', 'Otávio', 'Henrique'];
// console.log(' ');
// console.log('Clássico');

// For clássico - Geralmente com iteráveis (array ou string)
// For in - Retorna o índice ou chave (string,array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

// for (let i = 0; i < nomes.length; i++) {
//   console.log(nomes[i]);
// }

// console.log('')
// console.log('For In')

// for (let i in nomes) {
//   console.log(nomes[i])
// }
// console.log('  ')
// console.log('For Of')
// for (let valor of nomes) {
//   console.log(valor)
// }

// // For each
// console.log('')
// console.log('For Each')
// nomes.forEach(function (valor, indice, array) {
//   console.log(valor, indice, array)
// })


// Com objeto
const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio'
}
for (let key in pessoa) {
  console.log(key, pessoa[key])
}