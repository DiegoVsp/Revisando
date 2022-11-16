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

// console.log('*---------------------*')

// const _velocidade = Symbol('velocidade'); //utilizado para criar uma chave privada dentro de um objeto
// class Carro {
//   constructor(nome) {
//     this.nome = nome;
//     this[_velocidade] = 0
//   }
//   acelerar() {
//     if (this[_velocidade] >= 100) {
//       return
//     }
//     this[_velocidade]++
//   }
//   frear() {
//     if (this[_velocidade] <= 0) return
//     this[_velocidade]--
//   }
//   get velocidade() {
//     console.log('GETTER')
//     return this[_velocidade]
//   }
//   set velocidade(velocidade) {
//     console.log('SETTER')
//     if (velocidade <= 0 || velocidade >= 100) return
//     if (typeof velocidade !== 'number') return
//     this[_velocidade] = velocidade
//   }
// }
// let carro = new Carro('Ford')

// // for (let i = 0; i < 120; i++) {
// //   carro.acelerar()
// // }
// // console.log(carro)
// carro.velocidade = 99
// // console.log(carro.velocidade)

// console.log('')
// console.log('----Class Pessoa------------')

// class Pessoa3 {
//   constructor(nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome
//   }
//   get nomePcompleto() {
//     console.log('Getter')
//     return this.nome + ' ' + this.sobrenome
//   }
//   set nomePcompleto(valor) {
//     console.log('Setter')
//     valor = valor.split(' ')
//     this.nome = valor.shift()
//     this.sobrenome = valor.join(' ')

//   }

// }
// let pessoa3 = new Pessoa3('Diego', 'Vespa')

// console.log(pessoa3.nomePcompleto)
// pessoa3.nomePcompleto = 'Francisca Silva'
// console.log(pessoa3)

// console.log()
// console.log()
// console.log('Herança com Classes')

// class DispositivoEletronico {
//   constructor(nome,) {
//     this.nome = nome;
//     this.ligado = false;
//   }
//   ligar() {
//     if (this.ligado) {
//       console.log(this.nome + ' está Ligado')
//       return
//     }
//     this.ligado = true;
//   }
//   desligado() {
//     if (!this.ligado) {
//       console.log(this.nome + ' já está desligado')
//       return
//     }
//     this.ligado = false;

//   }
// }


// let monitor1 = new DispositivoEletronico('monitor')
// monitor1.ligar()
// monitor1.desligado()
// monitor1.desligado()
// // monitor1.ligar()
// console.log(monitor1)
// console.log(monitor1.modelo)

// class Smartfone extends DispositivoEletronico {
//   constructor(nome, cor, modelo) {
//     super(nome);
//     this.cor = cor;
//     this.modelo = modelo
//   }
// }
// class Tablet extends DispositivoEletronico {
//   constructor(name, TemWifi) {
//     super(name)
//     this.TemWifi = TemWifi;
//   }
//   ligar() {
//     console.log('Olha,você alterou o método ligar.')
//   }
//   falarOi() {
//     console.log('Falou OI')
//   }
// }

// let s1 = new Smartfone('Samsung', 'Preto', 'Galaxy S10')
// console.log(s1)
// const t1 = new Tablet('Ipad', true)
// t1.ligar()
// t1.falarOi()

// Métodos Estaticos

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0
  }
  // Metodo de Instancia
  aumentarVolume() {
    this.volume += 2
  }
  diminuiVolume() {
    this.volume -= 2;
  }
  // Método Estatico
  static trocaPilha() {
    console.log('Ok, Vou Trocar')
  }
}
const controle1 = new ControleRemoto('Samasung');
console.log(controle1)
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
console.log(controle1)
controle1.diminuiVolume()
console.log(controle1)

ControleRemoto.trocaPilha()
