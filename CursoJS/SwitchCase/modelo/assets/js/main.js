// const container = document.querySelector('.container')
const h1 = document.querySelector('h1')

const data = new Date();

const dia = data.getDay()
const diaMes = data.getDate()
const mes = data.getMonth()
const ano = data.getFullYear()
const hora = data.getHours()
const minutos = data.getMinutes();
// let h1 = document.createElement('h1')

// function zeroAEsquerda(num) {
//   return num < 10 ? `0${num}` : num;
// }

function pegaDia(diaSemana) {
  // let diaSemText = ''
  // switch (diaSemana) {
  //   case 0: return diaSemText = 'Domingo'
  //   case 1: return diaSemText = 'Segunda-Feira'
  //   case 2: return diaSemText = 'Terça-Feira'
  //   case 3: return diaSemText = 'Quarta-Feira'
  //   case 4: return diaSemText = 'Quinta-Feira'
  //   case 5: return diaSemText = 'Sexta-Feira'
  //   case 6: return diaSemText = 'Sábado-Feira'
  // }
  const diasSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-feira', 'Sexta-feira', 'Sabado']
  return diasSemana[diaSemana]
}
function pegaMes(mes) {
  // let mesAtual = ''
  // switch (mes) {
  //   case 0: return mesAtual = 'Janeiro'
  //   case 1: return mesAtual = 'Fevereiro'
  //   case 2: return mesAtual = 'Março'
  //   case 3: return mesAtual = 'Abril'
  //   case 4: return mesAtual = 'Maio'
  //   case 5: return mesAtual = 'Junho'
  //   case 6: return mesAtual = 'Julho'
  //   case 7: return mesAtual = 'Agosto'
  //   case 8: return mesAtual = 'Setembro'
  //   case 9: return mesAtual = 'Outubro'
  //   case 10: return mesAtual = 'Novembro'
  //   case 11: return mesAtual = 'Dezembro'
  // }
  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  return meses[mes]
}

const atualMes = pegaMes(mes)
const diaSem = pegaDia(dia)

h1.innerHTML = `Hoje é ${diaSem}, ${diaMes} de ${atualMes} de ${ano} as ${hora}:${minutos}`

// container.appendChild(h1)

// const h1 = document.querySelector('.container h1')
// const data = new Date();
// // const opcoes = {
// //   dateStyle: 'full',
// //   timeStyle: 'short'
// // }
// // h1.innerHTML = data.toLocaleString('pt-BR', opcoes);
// h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' })