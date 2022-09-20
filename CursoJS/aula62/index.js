// Valor por referência 
//     0         1         2 
// const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana']
// // Strings, Objetos, Funcções, Números

// nomes[2] = 'Joao';
// // delete nomes[2];
// console.log(nomes);
// console.log('----------------')

// const novo = nomes;
// novo.pop()
// console.log(novo)
// console.log(nomes)

// // spread
// const novo2 = [...nomes]
// novo2.push('Diego')
// console.log(novo2)

// // const [nome,...resto]= nomes
// // console.log(nome)

// console.log('--------------------')
// console.log(nomes.length)

// console.log('----------------')
// const removido = nomes.shift(); // valor removido
// console.log(nomes)
// // console.log(removido)

// // POP remove do final e SHIFT remove do começo

// nomes.push('Joao') //adicionando no final
// console.log(nomes)

// nomes.unshift('Joana') //adicioan no começo
// console.log(nomes)

// console.log('')
// console.log('Fatiar Array -> Slice')
// // const novo3 = nomes.slice(1, 3)// indice final não é incluido
// const novo3 = nomes.slice(1, -2)// indice final não é incluido
// console.log(novo3)

// Converter String em Array
// const nome = 'Luiz Otávio Miranda';
// const nomes = nome.split(' ');
const nomes = ['Luiz', 'Otávio', 'Miranda']
const nome = nomes.join(' ')
console.log(nome)