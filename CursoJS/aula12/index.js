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