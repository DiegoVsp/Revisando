// Escopo Léxico

const nome = 'Diego' // <<<<------

function falaNome() {
  console.log(nome) //   <<--
}
// falaNome()

function usaFalaNome() {
  // const nome = 'Otavio' <-
  falaNome();
}
usaFalaNome()