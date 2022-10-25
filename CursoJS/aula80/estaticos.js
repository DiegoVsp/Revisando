// Métodos de instância e estáticos

class ControleRemoto {
  constructor(tv) {
    this.tv = tv
    this.volume = 0
  }

  aumentarVolume() {
    this.volume += 2;
  }
  // método de instância
  diminuirVolume() {
    this.volume -= 2;
  }
  // método estático
  static trocaPilha(){
    console.log('Ok, vou trocar.')
  }
}

const controle1 = new ControleRemoto('Panasonic')
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
console.log(controle1)

ControleRemoto.trocaPilha()// Método referente a Classe

// console.log(Math.random())//Esse objeto Math, Ele é uma "Classe" que está chamando o método estático random
