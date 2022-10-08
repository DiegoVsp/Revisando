// Herança
// Produto -> aumento, desconto
// camiseta, Caneca
// Camiseta = Cor, Caneca = material
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco

}
Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
}
Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco) //
  this.cor = cor
}

// Camiseta
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta;

// sobrescrever metodo
Camiseta.prototype.aumento = function (percentual) {
  this.preco = this.preco + ((this.preco * percentual) / 100)
}
const produto = new Produto('Sabão', 7);
const camiseta = new Camiseta('Regata', 7.5, 'preta')

camiseta.aumento(100);
console.log(produto)
console.log(camiseta)

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;
  // criar getters e setters para manipular estoque
  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,

    get: function () {
      return estoque;
    },
    set: function (qtd) {
      if (typeof qtd != 'number') return;
      estoque = qtd
    }
  })
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const caneca = new Caneca('Mario', 45, 'Porcelana', 100)

caneca.aumento(10)
caneca.desconto(20)
caneca.estoque = 1
console.log(caneca)
console.log(caneca.estoque)