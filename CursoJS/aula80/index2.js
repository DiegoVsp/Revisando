// Getters e Setters Classe
const _velocidade = Symbol(); // gera um Id aleatório
// 

class Carro {
  constructor(nome) {
    this.nome = nome
    this[_velocidade] = 0; //utilizando a variável(não precisa do ponto)
  }
  set velocidade(valor) { 
    console.log('SETTER')
    if (typeof valor !== 'number') return;
    if (valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor
  }
  get velocidade() {
    console.log('GETTER')
    return this[_velocidade]
  }
  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }
  frear() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}
const c1 = new Carro('Fusca')

// for (let i = 0; i <= 100; i++) {
//   c1.acelerar()
// }
c1.velocidade = 55
// console.log(c1.velocidade)
console.log(c1[_velocidade])

console.log('')
console.log('--------PESSOA---------')
console.log('')

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome
  }
  get nomeCompleto() {
    return this.nome + ' ' + this.sobrenome
  }
  set nomeCompleto(valor) {
    valor = valor.split(' ');
    this.nome = valor.shift();
    this.sobrenome = valor.join()
  }
}
const p1 = new Pessoa('Diego', 'Vespa')
p1.nomeCompleto = 'Luiz Miranda' // Setter 
console.log(p1.nomeCompleto)