// Retorne a soma do dobro de todos os pares
// Fitlrar pares
// Dobrar os valores
// Reduzir(somar tudo)

const numeros = [8, 1, 3, 2, 5, 7, 9, 13, 22, 24]

// const pares = numeros.filter(num => num % 2 === 0)
// console.log(pares)

// const dobrar = numeros.map(num => num*2)
// console.log(dobrar)

// const total = numeros.reduce((res,atual) => {
//   return res+= atual
// })
// console.log(total)
const pares = numeros
  .filter(num => num % 2 === 0)
  .map(num => num * 2)
  .reduce((acc, num) => acc += num)
  
console.log(pares)