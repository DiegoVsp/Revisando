const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let seconds = 0
let timer

iniciar.addEventListener('click', (e) => {
  // alert('Cliquei em iniciar')  
  // clearInterval(timer)
  timer = setInterval(() => {
    relogio.innerHTML = mostraHora(seconds++)
  }, 1000);
})

pausar.addEventListener('click', (e) => {
  alert('Cliquei em pausar')
  setTimeout(() => {
    clearInterval(timer)
  });
})

zerar.addEventListener('click', (e) => {
  alert('Cliquei em zerar')
  relogio.innerHTML='00:00:00'
  seconds = 0
})

function mostraHora(seconds) {
  
  let data = new Date(seconds * 1000)
  return data.toLocaleTimeString('pt-BR', { timeZone: 'GMT' }) 

}