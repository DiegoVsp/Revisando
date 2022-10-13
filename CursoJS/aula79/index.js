// FactoryFunction + Prototype
// COMPOSIÇÃO / MIXINS

const falar = {
  falar() {
    console.log(`${this.nome} está falando`)
  },
}

const comer = {
  comer() {
    console.log(`${this.nome} está comendo`)
  },
}

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo`)
  }
}
// const pessoaPrototype = { ...falar,...comer,...beber }
const pessoaPrototype = Object.assign({},falar,comer,beber) // Ou dessa maneira

function criaPessoa(nome, sobrenome) {

  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome }
  })
}
const p1 = criaPessoa('Diego', 'Vespa'); //Factory function não tem a palavra new
// console.log(p1)
// p1.falar()
// p1.beber()
// p1.comer()
p1.falar()

const p2 = criaPessoa('Maria', 'Vespa')
p2.comer()