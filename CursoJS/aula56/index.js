// Função Fábrica(Factory function)
// Função Construtora
function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`

    },
    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ')
      this.nome = valor.shift()
      this.sobrenome = valor.join(' ')
      // console.log(valor)
    },

    fala(assunto = 'falando sobre nada') {
      return `${this.nome} está ${assunto}`
    },

    altura,
    peso,
    get imc() { //Getter
      const indice = this.peso / (this.altura ** 2)
      return indice.toFixed(2)
    }
  }
  // quando uma função está dentro de um objeto é chamado de método
}
let p1 = criaPessoa('Diego', 'Vespa', 1.8, 80)
console.log(p1.nomeCompleto)
console.log('---** Alterando nome P1 **---')
p1.nomeCompleto = 'Maria Oliveira Silva' //alterando nome
// console.log(p1.sobrenome)
// console.log(p1.fala('falando sobre JS'))
console.log(p1.fala()) //<- Sem passar um assunto ele assume uma assunto padrao
// console.log(p1.imc)
// console.log(p1.nome)
// console.log(p1.sobrenome)
console.log(p1.nomeCompleto)

// let p2 = criaPessoa('Ricardo', 'Motta', 1.9, 123)

// let p3 = criaPessoa('Patricia', 'Alves', 1.8, 56)

// console.log(p2.fala('falando sobre luta livre'))

// console.log(p2.imc)

// console.log(p3.imc)