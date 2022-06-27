const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
  endereco: {
    rua: 'Avenida Brasil',
    numero: 320
  }
};
// const nome = pessoa.nome
// const {nome} = pessoa // atribuição via desestruturação
// const endereco = pessoa.endereco.rua
// const { nome = ' ', sobrenome, idade } = pessoa;
// const { nome: n = '', sobrenome } = pessoa;
// const { nome, sobrenome, idade, endereco } = pessoa;
// console.log(nome, sobrenome, idade, endereco)

// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
// const { endereco: { rua, numero },endereco } = pessoa;
const { endereco: { rua:r = 12345, numero },endereco } = pessoa;
// console.log(rua,numero,endereco)
console.log(r,numero,endereco) 

const {nome,...resto}=pessoa;
console.log(nome,resto)
