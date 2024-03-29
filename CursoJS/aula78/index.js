// Superclass
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
  if(valor > this.saldo) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function() {
  console.log(
    `Ag/c: ${this.agencia}/${this.conta} | ` +
    `Saldo: R$${this.saldo.toFixed(2)}`
  );
};

function CC(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo); //Herança
  this.limite = limite;
}
CC.prototype = Object.create(Conta.prototype); //Linkando
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor) { //Polimorfismo
  if(valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

function CP(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cc = new CC(11, 22, 10, 100);
// cc.depositar(10);
cc.sacar(100);
// cc.sacar(1);

console.log();

const cp = new CP(12, 10, 100);
// cp.depositar(50);
cp.sacar(100);
cp.verSaldo();

