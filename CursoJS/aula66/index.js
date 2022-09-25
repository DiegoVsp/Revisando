// Dobre os valores

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const dobro = numeros.map(valor => valor * 2)
console.log(dobro)

// Para cada elemento:

// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave nome do objeto
// adicione uma chave Id em cada objeto
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
]
const retornaNome = pessoas.map(nome => nome.nome)

const retornaIdade = pessoas.map(idade => ({ idade: idade.idade }))

const comIds = pessoas.map(function (obj, indice) {
  const newObj = {...obj} //spread Operador 
  newObj.id = (indice + 1) * 1999;
  return newObj
})
console.log(comIds)