const nome = "Diego";
const sobrenome = "Vespa";
const idade = 31;
const peso = 83;
const altura = 1.83;
const ano = 2022;

let imc;
let anoNascimento;
imc = peso / (altura * altura);
anoNascimento = ano - idade;

// Com Template Strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}KG 
tem ${altura} de altura e seu IMC é de ${imc}. 
${nome} nasceu em ${anoNascimento}`)