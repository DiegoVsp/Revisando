const pessoa = {
  nome: 'Diego',
  sobrenome: 'Vespa'
}

const chave = 'nome'
console.log(pessoa.nome)
// console.log(pessoa[chave])
// console.log(pessoa['nome'])
console.log(pessoa.sobrenome)
// console.log(pessoa['sobrenome'])

const pessoa1 = new Object()
pessoa1.nome = 'Francisca';
pessoa1.sobrenome = 'Silva';
pessoa1.idade = 31
pessoa1.falaNome = function () {
  console.log(`${this.nome} está falando seu nome`)
}
pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;

}
console.log(pessoa1)
pessoa1.falaNome()
console.log(pessoa1.getDataNascimento())

// Quando functions estão dentro de objetos chamamos de métodos
for (let chave in pessoa1) {
  console.log(chave, pessoa1[chave])

}
// Se é um objeto que precisa criar frequentemente Ex.: Cliente
// Melhor criar um "Molde" que cria esses objetos pra min
// Tudo fica dentro do padrão
// Função Factory / Função Construtor / Classes
console.log('------------------------')
console.log('------Factory Function-------')
function criaPessoa(nome, sobrenome) { //Factory Function
  return {
    nome,
    sobrenome,

    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    }
  }
}

const pessoa2 = criaPessoa('Diego', 'Vespa')
console.log(pessoa2.nomeCompleto)

console.log('------------------------')
console.log('------Construtor Function-------')

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  // Object.freeze(this)
}
// Palavra new cria um objeto vazio
// {} <- this atrelar a palavra this dentro dessa função ao objeto
const p1 = new Pessoa('Diego','Vespa')
p1.nome = 'Outra coisa'
console.log(p1)
