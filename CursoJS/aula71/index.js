// defineProperty - defineProperties

function Produto(nome, preco, estoque) {


  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave 
    value: estoque, // valor da chave
    writable: true, // controla se pode ou não ser alterado
    configurable: true //não permite a variavel e não permite reconfigur a variavel
  });
  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave 
      value: nome, // valor da chave
      writable: true, // controla se pode ou não ser alterado
      configurable: true //não permite a variavel e não permite reconfigur a variavel
    },
    preco: {
      enumerable: true, // mostra a chave 
      value: preco, // valor da chave
      writable: true, // controla se pode ou não ser alterado
      configurable: true //não permite a variavel e não permite reconfigur a variavel
    }
  })
}

const produto1 = new Produto('Sabão', 12.00, 99)
produto1.estoque = 10
console.log(produto1)
// console.log(Object.keys(produto1))