const celular = {
  marcaCelular: 'ASUS',
  tamanhoTela: {
    vertical: 155,
    Horizontal: 75
  },
  capacidadeBateria: 5000,
  ligar: function () {
    console.log("fazendo ligação...")
  }
}
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
  return {
    marcaCelular,
    tamanhoTela,
    capacidadeBateria,
    ligar() {
      console.log("fazendo ligação...")
    }
  }
}
let motoG = criarCelular('MotoG', 5.5, 5000)
console.log(motoG)

function criaPessoa(nome, sobrenome, idade, peso) {
  return {
    nome,
    sobrenome,
    idade,
    peso,
    falarOi() {
      return `Olá Mundo!`
    },
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    },
    set nomeCompleto(valor){
      valor=valor.split(' ')
      this.nome = valor.shift()
      this.sobrenome = valor.join(' ')
      console.log(valor)
    },
    fala(assunto = 'Falando sobre games'){
      return `${this.nome} está ${assunto}`
    }

  }
}
let pessoa1 = criaPessoa("Diego", "Vespa", 31, 83)
pessoa1.nomeCompleto = 'Fernanda Cristina da Silva'
console.log(pessoa1)
console.log(pessoa1.fala('falando sobre novela'))