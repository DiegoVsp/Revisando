const relogio = document.querySelector('.relogio')
// const iniciar = document.querySelector('.iniciar')
// const pausar = document.querySelector('.pausar')
// const zerar = document.querySelector('.zerar')
let seconds = 0
let timer

function iniciaRelogio() {
  timer = setInterval(() => {
    relogio.innerHTML = criaHoraDosSegundos(seconds++)
  }, 1000);
}
document.addEventListener('click', (e) => {
  // console.log(e.target);
  const elemento = e.target;
  if (elemento.classList.contains('zerar')) {
    // console.log('Voce clicou em zerar')
    clearInterval(timer)
    relogio.classList.remove('pausado')
    relogio.innerHTML = '00:00:00'
    seconds = 0
  }
  if (elemento.classList.contains('iniciar')) {
    // alert('Cliquei em iniciar')  
    relogio.classList.remove('pausado')
    clearInterval(timer)
    iniciaRelogio()
  }
  if (elemento.classList.contains('pausar')) {
    // alert('Cliquei em pausar')
    setTimeout(() => {
      clearInterval(timer)
    });
    relogio.classList.add('pausado')
  }
})

// iniciar.addEventListener('click', (e) => {
//   // alert('Cliquei em iniciar')  
//   relogio.classList.remove('pausado')
//   clearInterval(timer)
//   iniciaRelogio()
// })

// pausar.addEventListener('click', (e) => {
//   // alert('Cliquei em pausar')
//   setTimeout(() => {
//     clearInterval(timer)
//   });
//   relogio.classList.add('pausado')
// })

// zerar.addEventListener('click', (e) => {
//   // alert('Cliquei em zerar')

// })

function criaHoraDosSegundos(seconds) {

  let data = new Date(seconds * 1000)
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'GMT'
  })

}