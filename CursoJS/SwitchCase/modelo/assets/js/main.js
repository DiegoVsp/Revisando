const container = document.querySelector('.container')

const data = new Date();
const dia = data.getDay()
const mes = data.getMonth()
const ano = data.getFullYear()
const hora = data.getHours()
const minutos = data.getMinutes();
// let h1 = document.createElement('h1')
let h1 = document.querySelector('h1')

function pegaDia(data) {
  let diaSem = data.getDay()
  let diaSemText = ''
  switch (diaSem) {
    case 0: return diaSemText = 'Domingo'
    case 1: return diaSemText = 'Segunda-Feira'
    case 2: return diaSemText = 'Terça-Feira'
    case 3: return diaSemText = 'Quarta-Feira'
    case 4: return diaSemText = 'Quinta-Feira'
    case 5: return diaSemText = 'Sexta-Feira'
    case 6: return diaSemText = 'Sábado-Feira'
  }
}
function pegaMes(mes) {
  let mesAtual = ''

  switch (mes) {
    case 0: return mesAtual = 'Janeiro'
    case 1: return mesAtual = 'Fevereiro'
    case 2: return mesAtual = 'Março'
    case 3: return mesAtual = 'Abril'
    case 4: return mesAtual = 'Maio'
    case 5: return mesAtual = 'Junho'
    case 6: return mesAtual = 'Julho'
    case 7: return mesAtual = 'Agosto'
    case 8: return mesAtual = 'Setembro'
    case 9: return mesAtual = 'Outubro'
    case 10: return mesAtual = 'Novembro'
    case 11: return mesAtual = 'Dezembro'
  }
}

const atualMes = pegaMes(mes)
const diaSem = pegaDia(data)

h1.innerHTML = `Hoje é ${diaSem}, ${dia} de ${atualMes} de ${ano} as ${hora}:${minutos}`

container.appendChild(h1)