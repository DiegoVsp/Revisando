class Conta {
  constructor(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
  }
  verSaldo() {
    console.log(`Seu saldo é de ${this.saldo}`)
  }
  depositar(quantia) {
    this.saldo += quantia;
    this.verSaldo()
  }
  sacar(quantia) {
    if (quantia > this.saldo) {
      console.log('Saldo Insuficiente ')
      this.verSaldo()
      return
    }
    this.saldo -= quantia
    this.verSaldo()
  }
}

class ContaCorrente extends Conta {
  constructor(agencia, conta, saldo, limite) {
    super(agencia, conta, saldo)
    this.limite = limite
  }
  sacar(quantia) {
    if (quantia > (this.saldo + this.limite)) {
      console.log(`Saldo insuficiente: ${this.saldo}`);
      return;
    }
    this.saldo -= quantia;
    this.verSaldo();
  }
}
const cc = new ContaCorrente('001', '239', 10, 100)
cc.sacar(200)
cc.depositar(100)

console.log(cc)

