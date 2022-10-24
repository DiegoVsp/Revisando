// Herança com Classes

class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }
  ligar() {
    if (this.ligado) {
      console.log(this.nome + ' já ligado')
      return;
    }
    this.ligado = true;
  }
  desligar() {
    if (!this.ligado) {
      console.log(this.nome + 'já desligado')
      return;
    }
    this.ligado = false;
  }
}
// Herdando
class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo
  }
}
const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10')
s1.ligar()
console.log(s1)

class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi) {
    super(nome)
    this.temWifi = temWifi;
  }
  ligar() {
    console.log('Olha, você alterou o método ligar')
  }
  falaOi(){
    console.log('Oiiiieee')
  }
}
const t1 = new Tablet('Tablet', true)
t1.ligar()
t1.ligar()
t1.falaOi()
console.log(t1)




