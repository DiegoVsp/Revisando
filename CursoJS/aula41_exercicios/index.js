const num1 = 10
const num2 = 5

// function maiorNum(n1, n2) {
//   return n1 > n2 ? `é o ${n1}` : `é o ${n2}`
// }
// const maior = maiorNum(num1,num2)

// const maior = num1 > num2 ? `é o ${num1}` : `é o ${num2}`
// console.log(`O maior número ${maior}`)

// function maiorNum(num1, num2) {
//   let maior
//   if (num1 > num2) {
//     maior = num1
//   } else {
//     maior = num2
//   }
//   return maior
// }

// console.log(maiorNum(num1,num2))

// function max (num1,num2){
//   if(num1>num2){
//     return num1
//   }
//     return num2

// }
// console.log(max(num1,num2))

// const max2 = (num1, num2) => {
//   return num1 > num2 ? num1 : num2;
// }
// console.log(max2(num1, num2))


// Exercicio MOdo Paisagem

// function ePaisagem(largura, altura) {
//   return largura > altura
// }
// const paisagem = ePaisagem(800, 700)

// console.log(paisagem)

// Arrow function
const ePaisagem = (largura, altura) => largura > altura

const paisagem = ePaisagem(800, 1900)

console.log(paisagem)