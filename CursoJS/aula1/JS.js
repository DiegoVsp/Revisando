//Tipos de dados primitivos (String, Undefined,Null,Boolean)

const nome = 'Diego' //String
const num1 = 10 // Number
let nomeAluno; // undefined -> não aponta pra local nenhum na memória.
const sobrenomeAluno = null // Nulo -> não aponta pra local nenhum na memória
const aprovado = false //Boolean = true,false(lógico)

console.log(typeof nome); // verifica tipo da variavel nome

// null é considerado um objeto

const a = [1,2];
const b = a;

console.log(a,b);

b.push(3);
console.log(a,b)

//Aritméticos

//+ Adição/Concatenação
//** Potenciação
//% Resto da divisão

//Precedência
//  ()
//  *
//  / %
//  + -

//Incremento = ++
//Decremento = --

//Operadores de Atribuição

//NaN -> Not a number

// Conversão
//exemplo: const num = '5' -> const num = parseInt('5') ou const num = Number('5');
//parseInt -> numeros Inteiros
//parseFloat -> números com casas decimais
//Number('5')