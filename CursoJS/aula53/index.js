// Clousure - Habilidade que a função tem de acessar seu escopo léxico

// Global
function retornaFuncao() {
  const nome = 'Diego'
  return function () {
    return nome
  }
}

const funcao = retornaFuncao()
console.log(funcao())