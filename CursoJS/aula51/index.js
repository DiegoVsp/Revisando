// Retorno da função

// return
// Retorna um valor
// Termina uma função

function soma(a, b) {
  return a + b;
}

console.log(soma(2, 2))

// document.addEventListener('click', function () {
//   document.body.style.backgroundColor = "red;"
// })

function criaPessoa(nome, sobrenome) {
  return {
    nome: nome,
    sobrenome: sobrenome
  };
}
const pessoa1 = criaPessoa('Diego', 'Vespa')
console.log(pessoa1)
const pessoa2 = {
  nome: 'Joao',
  sobrenome: 'Oliveira'
}
console.log(pessoa2)
console.log(typeof pessoa1)

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + ' ' + resto
  }
  return falaResto;
}

// const olaMundo = falaFrase('Ola')
// console.log(olaMundo('Mundo'))
const fala = falaFrase('Olá')
const resto = fala('Mundo')
console.log(resto)

function criaMultiplicador(multiplicador) {
  // multiplicador //Funcao Closure
  return function multiplicacao(num) {
    return num * multiplicador
  }
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

const numero = duplica(2)
const numero2 = triplica(2)
const numero3 = quadriplica(2)

console.log(numero)
console.log(numero2)
console.log(numero3)