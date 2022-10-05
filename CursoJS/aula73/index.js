// Objetos assim como arrays são valores passados por referencia

// Object.values //retorna valor
// Object.entries //retorna chave e valor em arrays 
// Object.getOwnPropertyDescriptor(o,'prop')
// Object.assign(des,any)
// ...(spread)

// Já vimos
// Object.keys //(congela as chaves)
// Object.freeze//(congela o objeto)
// Object.defineProperties//(define várias propriedades)
// Object.defineProperty //(define uma propriedade)

const produto = { nome: 'Produto', preco: 1.80 }
// const caneca = { ...produto, material: 'Porcelana' } //spread é mais intuitivo
// const caneca = Object.assign({}, produto, { material: 'Porcelana' })
// const caneca = produto // aponta para produto
// const caneca = { nome: produto.nome, preco: produto.preco } //pior forma

// caneca.nome = 'Outro Nome'
// caneca.preco = 2.50

// Object.freeze(produto)
// produto.nome='Outro Name2'
// console.log(produto)

// console.log(caneca)
// console.log(Object.keys(produto))


Object.defineProperty(produto, 'nome', {
  writable:false,
  configurable:false,// sendo falso eu não consigo deletar a propriedade nome de produto
  value:'Qualquer outra coisa'
})
console.log(Object.getOwnPropertyDescriptor(produto,'nome'))
produto.nome = 'Outra coisa'
delete produto.nome
// delete produto.preco
console.log(produto)

console.log(Object.values(produto))// retorna os valores do objeto
console.log(Object.keys(produto))// retorna as chaves do objeto
console.log(Object.entries(produto))// retorna os arrays internos

for(let valor of Object.entries(produto)){
  console.log(valor[0],valor[1])
}

