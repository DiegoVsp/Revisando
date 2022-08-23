// Declaração de função(Function Hoisting)



falaOI()
function falaOI() {
  console.log('OI')
}

// First-Class objects (Objetos de primeira Classe)
// Function expression
const souUmDado = function () {
  console.log('Sou um Dado')
}

function executaFuncao(funcao) {
  console.log('Vou executar sua função abaixo')
  funcao();
}

executaFuncao(souUmDado)

// Arrow function 

const funcaoArrow = () => {
  console.log('Sou um arow function')
};
funcaoArrow()

// Dentro de um objeto

const obj = {
  falar(){
    console.log('Estou falando...')
  }
}
obj.falar();

