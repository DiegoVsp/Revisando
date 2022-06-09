const nome01 = 'Luiz';
const sobrenome01 = 'Miranda';
const idade = 25;

// Objeto
// const pessoa1 = {
//   nome: 'Luiz',
//   sobrenome: 'Miranda',
//   idade: 25
// }
// const pessoa2 = {
//   nome: 'Maria',
//   sobrenome: 'Miranda',
//   idade: 55
// }
// console.log(pessoa1.sobrenome)

// function criaPessoa(nome, sobrenome, idade) { //dentro dos parenteses é chamado de parâmetros
//   return {
//     nome,
//     sobrenome,
//     idade,
//   }
// }
// const pessoa1 = criaPessoa('Luiz', 'Miranda', 25) // dentro dos parenteses aqui é chamado de argumentos
// const pessoa2 = criaPessoa('Maria', 'Oliveira', 55)
// const pessoa3 = criaPessoa('Joao', 'Moreira', 35)
// const pessoa4 = criaPessoa('Junior', 'Lara', 33)
// const pessoa5 = criaPessoa('Jean', 'Otávio', 15)

// console.log(pessoa1.nome)

const pessoa1 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 25,

  fala() { //método - não precisa da palavra function
    // console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
    console.log(`A minha idade atual é ${this.idade} anos`)
  },
  incrementaIdade(){
    this.idade++;
  }
}
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
