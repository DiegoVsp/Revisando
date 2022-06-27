// Atribuição via desestruturação(Arrays) 

// let a = 'A';
// let b = 'B';
// let c = 'C';

// const numeros = [1, 2, 3];
// [a, b, c] = numeros; // reatribuindo valores das variáveis


// console.log(a, b, c)


// ... rest operator, ... spread operator
// const numeros = [1000, 2900, 3500, 423, 5441, 487, 5999, 6123, 7541, 823, 9];
// const [um, dois, tres] = numeros;

// console.log(um, dois, tres) // pegando 1 e 2 valor do array
// // console.log(resto) // pegando o restante dos valores do array

// const [um,,tres,,cinco,,sete] = numeros;
// console.log(um,tres,cinco)

const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// const [,[,,seis]]= numeros
const [lista1, lista2, lista3] = numeros

// console.log(numeros[2][2])
console.log(lista3[1])

