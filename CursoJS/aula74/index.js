// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => '(Original) => ' + this.nome + ' ' + this.sobrenome;

}
// Pessoa.prototype === pessoa1.__proto__
Pessoa.prototype.nomeCompleto = function () {
  return this.nome + ' ' + this.sobrenome;
}
// cadeia
// pessoa1 --> Pessoa.prototype --> Object.prototype

// Instancia
const pessoa1 = new Pessoa('Diego', 'Vespa'); //Pessoa função construtora
const pessoa2 = new Pessoa('Jurema', 'Barbeira')// Pessoa função construtora
console.dir(pessoa1.nomeCompleto())

console.dir(pessoa1);
console.dir(pessoa2);


// Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

// Definição de protótipo
// Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções

// Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para 
// criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia
// de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.

const data = new Date() // <-- Date = Função Construtora
console.dir(data)