const frutas = ['Pera', 'Maça', 'Uva'];

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

// for (let indice in frutas) { // lê os indices ou chaves do objeto
//   console.log(indice)
// }

// for(conteudo of frutas){
//   console.log(conteudo)
// }

const pessoas = {
  nome: 'Diego',
  sobrenome: 'Vespa',
  idade: 30
}
for(let chave in pessoas){
  console.log(chave, pessoas[chave])  // <<<----------------------
}
// const chave = 'nome';
// console.log(pessoas.nome)
// console.log(pessoas['nome'])
// console.log(pessoas[chave])