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