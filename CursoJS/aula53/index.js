// Clousure - Habilidade que a função tem de acessar seu escopo léxico

// // Global
// function retornaFuncao() {
//   const nome = 'Diego'
//   return function () {
//     return nome
//   }
// }

// const funcao = retornaFuncao()
// console.log(funcao())





const lista = [-8, 3, 4, 5, -9]

let maior = 0;
let menor = 0;
function maiorEmenor(lista) {

  for (let i = 0; i < lista.length; i++) {
    if (lista[i] < menor) {
      menor = lista[i]
    }
    if (lista[i] > maior) {
      maior = lista[i]
    }

  }
  return { menor, maior }

}
console.log(maiorEmenor(lista))