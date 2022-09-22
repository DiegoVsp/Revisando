// filter -> Sempre retorna um array com a mesma quantidade de elementos ou menos

// Retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter(valor) {
//   return valor > 10
// }

const numeroFiltrados = numeros.filter(valor => valor > 10)
console.log(numeroFiltrados)


// Retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
  { nome: 'Diego', idade: 62 },
  { nome: 'Marcos', idade: 13 },
  { nome: 'Fernanda', idade: 32 },
  { nome: 'Isac', idade: 78 }
]
let cinquenta = valor => valor.idade > 50;
let nomesMaiorQueCinco = valor => valor.nome.length > 5; 
// let nomesComA = valor => valor.nome.substr(-1) == 'a';
let nomesComA = valor => valor.nome.toLowerCase().endsWith('a')

const pessoasMaiores = pessoas.filter(nomesComA)
console.log(pessoasMaiores)

