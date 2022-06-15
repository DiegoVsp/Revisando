// const data = new Date('1987-04-21 00:00:00')
const data = new Date()

const diaSemana = data.getDay();

function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto;

  switch (diaSemana) {
    case 0:
      return diaSemanaTexto = 'Domingo'

    case 1:
      return diaSemanaTexto = 'Segunda'

    case 2:
      return diaSemanaTexto = 'Terça'

    case 3:
      return diaSemanaTexto = 'Quarta'

    case 4:
      return diaSemanaTexto = 'Quinta'

    case 5:
      return diaSemanaTexto = 'Sexta'

    case 6:
      return diaSemanaTexto = 'Sábado'

    default:
      return diaSemanaTexto = '';
  }

}
const diaSemanaTexto = getDiaSemanaTexto(diaSemana)
console.log(diaSemana, diaSemanaTexto)