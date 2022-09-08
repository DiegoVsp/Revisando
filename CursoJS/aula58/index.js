// Função Construtora -> Retorna Objetos
// Função Fabrica -> 
// Contrutora -> precisa iniciar com letra maiuscula (ex.: Pessoa(new))

function Pessoa(nome, sobrenome) {
  // Atributos ou métodos privados
  const ID = 123456;
  const metodoInterno = () => {
    // Fazer alguma coisa interna (Ex: validar um CPF)

  }

  // Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = () => {
    console.log(this.nome + ': sou um método')
  }
}

const pessoa1 = new Pessoa('Diego', 'Vespa')
console.log(typeof (pessoa1.nome))
console.log(pessoa1.nome)
pessoa1.metodo()
