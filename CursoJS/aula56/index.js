// Função Fábrica(Factory function)
// Função Construtora
function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    fala: function (assunto) {
      return `${nome} está falando ${assunto}`
    },
    altura,
    peso,
    imc() {
      const indice = this.peso / (this.altura ** 2)
      return indice.toFixed(2)
    }
  }
  // quando uma função está dentro de um objeto é chamado de método
}
let p1 = criaPessoa('Diego', 'Vespa', 1.8, 80)
console.log(p1.fala('falando sobre JS'))
console.log(p1.imc())
// console.log(p1.nome)
// console.log(p1.sobrenome)