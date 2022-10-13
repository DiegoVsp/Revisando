const tabuada = [2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i <= 10; i++) {
  let res = tabuada * i;
  console.log(`${tabuada} X ${i} = ${res}`)
}

console.log('-----------------')

for (let num of tabuada) {
  console.log('----------')
  for (let i = 0; i <= 10; i++) {
    let res = num * i
    console.log(`${num} X ${i} = ${res}`)
  }
}

// function Animal(raca, cor) {
//   this.raca = raca;
//   this.cor = cor
// }


// function Cao(raca, cor, late) {
//   Animal.call(this, raca, cor)
//   this.late = late
// }
// Cao.prototype = Object.create(Animal.prototype);
// Cao.prototype.constructor = Cao;

// const cao1 = new Cao("Pinscher", "Marrom", "Au au")
// console.log(cao1)
// console.log(cao1.late)

// function Gato(raca, cor, mia) {
//   Animal.call(this, raca, cor);
//   this.mia = mia;
// }
// Gato.prototype = Object.create(Animal.prototype);
// Gato.prototype.constructor = Gato;
// Gato.prototype.pula = function () {
//   console.log('...')
// }
// const persa = new Gato('Persa', 'Branco e Preto', 'Miauu')
// console.log(persa)
// console.log(persa.mia)

// persa.pula()

// const animal = new Animal('Basset','Preto')

// console.log(animal)

// function Conta(agencia, conta, saldo) {
//   this.agencia = agencia;
//   this.conta = conta;
//   this.saldo = saldo;
// }
// Conta.prototype.depositar = function (quantia) {
//   console.log(this.saldo += quantia);
// }
// Conta.prototype.sacar = function (quantia) {
//   if (this.saldo > quantia) {
//     this.saldo -= quantia
//   } else {
//     console.log('Saldo Insuficiente')
//   }
//   this.verSaldo()
// }
// Conta.prototype.verSaldo = function () {
//   console.log(this.saldo)
// }

// const conta = new Conta(1, 22, 100)
// conta.depositar(500);
// conta.sacar(300);
// conta.verSaldo();

// function CC(agencia, conta, saldo, limite) {
//   Conta.call(this, agencia, conta, saldo)
//   this.limite = limite
// }


// CC.prototype = Object.create(Conta.prototype)
// CC.construtor = CC;

// CC.prototype.sacar = function (quantia) {
//   if (quantia > (this.limite + this.saldo)) {
//     console.log('----Insuficiente------')
//     return
//   }
//   this.saldo -= quantia
//   this.verSaldo()
// }
// const contaCorrente = new CC(01, 23, 10, 100)
// contaCorrente.sacar(100)