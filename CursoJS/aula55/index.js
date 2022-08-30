// IIFE -> Immediately invoked function expression

(function (idade, peso, altura) {
  const sobrenome = 'Vespa'
  function criaNome(nome) {
    return nome + ' ' + sobrenome
  }
  function falaNome() {
    console.log(criaNome('Diego'))
  }
  falaNome()
  console.log(idade, peso, altura)
})(31, 84, 1.83)

