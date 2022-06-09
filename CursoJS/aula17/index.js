// let nome = 'Luiz'

// function saudacao(nome){  
//   return `Bom dia ${nome}!`;
// }

// const variavel = saudacao(nome);
// console.log(variavel)

// function soma(a = 1, b = 1) { // sempre que não enviar um parâmetro a e b assumira o valor que foi passado
//   const resultado = a + b; // resultado está dentro do escopo da função por isso não pode ser acessada fora da função
//   return resultado  // nada mais será executado abaixo de return
// }
// const resultado = soma(5,2)
// const resultado = soma('Luiz',' Otávio')

// const resultado = soma()
// console.log(resultado)
// console.log(soma(2, 3))
// console.log(resultado)

// const raiz = function (n) {
//   return n ** 0.5
// };

// console.log(raiz(9))
// console.log(raiz(16))
// console.log(raiz(25))

// Arrow Function
const raiz = (n) =>  n ** 0.5

console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))