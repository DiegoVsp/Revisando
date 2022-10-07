// // New Object -> Object.prototype
// const objA = {
//   chaveA: 'A'
//   // __proto__: Object.prototype
//   // Object.prototype -> Ele não tem proto é o ultimo da cadeia 
// }



// const objB = {
//   chaveB: 'B'
//   // __proto__:objA
// }
// Object.setPrototypeOf(objB, objA)

// console.log(objA.__proto__ === Object.prototype)
// console.log(objB.chaveA)

// const objC = new Object();
// objC.chaveC = 'C';

// Object.setPrototypeOf(objC,objB)
// // Object.setPrototypeOf(objC,objA)
// console.log(objC.chaveB)

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco
}
Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - ((this.preco * percentual) / 100)
}

Produto.prototype.aumenta = function (percentual) {
  this.preco = this.preco + ((this.preco * percentual) / 100)
}

const p1 = new Produto('Sabão', 12)
p1.desconto(10)
p1.aumenta(100)
console.log(p1)

const p2 = {
  nome:'Caneca',
  preco:7
}

Object.setPrototypeOf(p2,Produto.prototype)
p2.aumenta(20)
console.log(p2)

// const p3 = Object.create(Object.prototype)
// p3.nome = 'Outra coisa'
// p3.preco = 15
// Object.setPrototypeOf(p3,Produto.prototype)
// p3.aumenta(100)
// console.log(p3)

const p3 = Object.create(Produto.prototype)
p3.preco = 4
p3.aumenta(10)
console.log(p3)