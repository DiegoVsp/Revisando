// Getter and Setter
function Produto(nome, preco, estoque) {

this.nome = nome;
this.preco = preco;
let estoquePrivado = estoque;

Object.defineProperty(this, 'estoque', {
  enumerable: true, // mostra a chave     
  configurable: true, //não permite a variavel e não permite reconfigur a variavel
  get: function () {
    return estoquePrivado;
  },
  set: function (valor) {
    if (typeof valor !== 'number') {
      throw new TypeError('Tipo Inválido')
    } else {
      estoquePrivado = valor
    }
  }
});

}

const produto1 = new Produto('Sabão', 12.00, 3)

console.log(produto1)
produto1.estoque = 11
console.log(produto1.estoque)

// Factory

// function criaProduto(nome) {
//   return {
//     get nome() {
//       return nome
//     },
//     set nome(valor) {
//       // valor = valor.replace('coisa', '')
//       nome = valor
//     }
//   }
// }
// const p2 = criaProduto('Rádio')
// p2.nome = 'Qualquer coisa'
// console.log(p2)
// console.log(p2.nome)