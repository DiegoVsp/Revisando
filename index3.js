// Factory Functions
// function criaCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
//   return {
//     marcaCelular,
//     tamanhoTela,
//     capacidadeBateria,
//     ligar(){
//       console.log('Fazendo Ligação')
//     }
//   }
// }
// const celular1 = criaCelular('Zenfone',5.5,5000)

// console.log(celular1)

// const volkswagenProto = {
//   logCarInfo() {
//     console.log(`Volkswagen ${this.name}, cor ${this.color}`)
//   }
// }

// const toyotaProto = {
//   logCarInfo() {
//     console.log(`Toyota ${this.name}, cor ${this.color}`)
//   }
// }
// const carMaker = ({ name, color }, carInfo) => {
//   const car = Object.create(carInfo)

//   car.name = name
//   car.color = color

//   return car
// }

// const amarok = carMaker({ name: "Amarok", color: "Preta" }, volkswagenProto)
// const jetta = carMaker({ name: "Jetta", color: "Preta" }, volkswagenProto)
// const corola = carMaker({ name: "Corola", color: "Preta" }, toyotaProto)

// amarok.logCarInfo()
// jetta.logCarInfo()
// corola.logCarInfo()

const sacar = {
  sacar(valor) {
    if (valor > this.saldo) {
      console.log(`Saldo insuficiente: ${this.saldo}`);
      return;
    }

    return this.saldo -= valor;

  }
}
const depositar = {
  depositar(quantia) {
    return this.saldo += quantia;
  }
}

const verSaldo = {
  verSaldo() {
    return `Seu saldo é de ${this.saldo}`
  }
}

const contaProto = Object.assign({}, sacar, verSaldo, depositar)
// const contaProto = { ...sacar, ...verSaldo, ...depositar }

function contaCorrente(agencia, conta, saldo) {
  const cc = Object.create(contaProto)
  cc.agencia = agencia;
  cc.conta = conta;
  cc.saldo = saldo
  return cc
}
const cc = contaCorrente(001, 231, 150)
console.log(cc.sacar(99))
console.log(cc.depositar(50))
console.log(cc.verSaldo())

const cc2 = contaCorrente(002,232,230)
console.log(cc2)
console.log(cc2.sacar(20))
console.log(cc2.verSaldo())
