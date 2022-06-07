let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

let aux; //Variável auxiliar para guardar varA

console.log(varA,varB,varC)


aux = varA;
varA = varB;
varB = varC;
varC = aux;

console.log(varA,varB,varC)

// [varA,varB,varC] = [varB,varC,varA]; //jeito moderno de realizar o exercício.

// -----------------**---------------
let umaString = 'O rato roeu a roupa do rei de roma.'
console.log(umaString.replace('Um','Tres'))
console.log(umaString.replace(/t/g,'#'))

console.log(umaString.length) // retorna exatamente o tamanho
console.log(umaString.slice(2,6))
console.log(umaString.slice(-5,-1))
// console.log(umaString.substring(umaString.length -5,umaString.length -1))

console.log(umaString.split(' ', 2));

console.log(umaString.toUpperCase());
console.log(umaString.toLocaleLowerCase());