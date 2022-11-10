// class Pessoa {
//   constructor(nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//   }
//   falar() {
//     console.log('Estou falando')
//   }
//   comer() {
//     console.log('Estou comendo')
//   }
//   beber() {
//     console.log('Estou bebendo')
//   }
// }
// function Pessoa2(nome, sobrenome) {
//   this.nome = nome;
//   this.sobrenome = sobrenome;
// }
// Pessoa2.prototype.falar = () => {
//   console.log('Oláa')
// }
// let pessoa1 = new Pessoa('Diego', 'Vespa')
// console.log(pessoa1.sobrenome)
// pessoa1.beber()

// let pessoa2 = new Pessoa2('Francisca', 'Silva')
// pessoa2.falar()

console.log('*---------------------*')

const _velocidade = Symbol('velocidade'); //utilizado para criar uma chave privada dentro de um objeto
class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0
  }
  acelerar() {
    if (this[_velocidade] >= 100) {
      return
    }
    this[_velocidade]++
  }
  frear() {
    if (this[_velocidade] <= 0) return
    this[_velocidade]--
  }
  get velocidade() {
    console.log('GETTER')
    return this[_velocidade]
  }
  set velocidade(velocidade) {
    console.log('SETTER')
    if (velocidade <= 0 || velocidade >= 100) return
    if (typeof velocidade !== 'number') return
    this[_velocidade] = velocidade
  }
}
let carro = new Carro('Ford')

// for (let i = 0; i < 120; i++) {
//   carro.acelerar()
// }
// console.log(carro)
carro.velocidade = 99
// console.log(carro.velocidade)

console.log('')
console.log('----Class Pessoa------------')

class Pessoa3 {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome
  }
  get nomePcompleto() {
    console.log('Getter')
    return this.nome + ' ' + this.sobrenome
  }
  set nomePcompleto(valor) {
    console.log('Setter')
    valor = valor.split(' ')
    this.nome = valor.shift()
    this.sobrenome = valor.join(' ')

  }

}
let pessoa3 = new Pessoa3('Diego', 'Vespa')

console.log(pessoa3.nomePcompleto)
pessoa3.nomePcompleto = 'Francisca Silva'
console.log(pessoa3)