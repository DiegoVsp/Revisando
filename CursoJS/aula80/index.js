// Classe

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome
  }
  // Já linkados no prototype
  falar() {
    console.log(`${this.nome} está falando`)
  }
}

const p1 = new Pessoa("Diego", "Vespa")
p1.falar()

console.log("--------- Constructor -----------")
function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}
Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} está falando`)
}

const p2 = new Pessoa2("Fernando", "Souza")
p2.falar()