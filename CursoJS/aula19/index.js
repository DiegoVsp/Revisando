// Primitivos (imutáveis) - string, number, boolean, undefined,
// null (bigint,symbol) - Valores copiados
// Referência (mutável) - arrays, object, function - Passados por referência

// let a = [1, 2, 3];
// // let b = a; // apontando para o mesmo valor na memória
// let b = [...a]; // nesse caso está copiando. valores independentes (Spread operator)
// let c = b;


// console.log(a, b);

// a.push(4);
// console.log(a, b)

// b.pop()
// console.log(a, b)

// a.push('Luiz')
// console.log(c)

const a = {
  nome: ' Luiz',
  sobrenome: 'Miranda'
};
// const b = a; 
const b = {...a};// copia de a

a.nome = 'Joao';
console.log(a)
console.log(b)

// let nome = 'Luiz';
// nome = 'Otávio'; // Não está mudando o Dado. Está trocando o valor da variável.

// nome[0]='R'

// console.log(nome[0], nome); // continuará sendo exibido a Letra L

// let a = 'A';
// let b = a; //Copiando o valor de a para b

// console.log(a, b)

// a = 'outra coisa'
// console.log(a, b)
