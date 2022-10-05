const p1 = {
  nome: 'Computador',
  preco: 3000,
  quantidade: 2
}

// Função Construtora
// this é uma referencia para o próprio objeto
const Produto = function (name, price, quantity) {
  this.name = name,
  this.price = price,
  this.quantity=quantity
}

Produto.prototype.total = function(){
  return this.price*this.quantity
}

const p2 = new Produto('Sabão',2,2)
console.log(p2.total())
console.log(p2)

// console.log(p2.__proto__)

Produto.prototype.add=function(quant){
   this.quantity+=quant
}
Produto.prototype.remove=function(quant){
  if(this.quantity>=quant) this.quantity-=quant
}

Produto.prototype.label = function (){
  return `Dados do Produto: ${this.name} Preço: R$${this.price} Quantidade: ${this.quantity}`
}
p2.add(3)
console.log(p2)
console.log(p2.total())
p2.remove(4)
console.log(p2)

console.log(p2.label())