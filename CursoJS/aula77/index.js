// 705.484.450-52

// const cpf = [7, 0, 5, 4, 8, 4, 4, 5, 0, 5, 2]
const cpf = '705.484.450-52'
let cpfLimpo = cpf.replace(/\D+/g,'');

const validarCpf = (valor) => {

  let cpf = valor.slice(0, 9)
  
  let total = 0
  let multiplicador = 10
  let nvCpf = [];
  for (let i = 0; i < cpf.length; i++) {
    total += Number(cpf[i]) * multiplicador
    // console.log(cpf[i])
    nvCpf.push(cpf[i])
    multiplicador -= 1
  }
  let digito1 = 11 - (237 % 11)
  if (digito1 > 9) {
    return digito1 = 0
  } else {
    nvCpf.push(digito1)
  }

  let multiplicador2 = 11
  let total2 = 0
  for (let i = 0; i < nvCpf.length; i++) {
    total2 += nvCpf[i] * multiplicador2;
    // console.log(total2)
    multiplicador2 -= 1
  }
  let digito2 = 11 - (total2 % 11)
  digito2 > 9 ? 0 : nvCpf.push(digito2)
  return nvCpf
}
const valida = validarCpf(cpfLimpo)
function validacao(cpf, nvCpf) {
  for (let i = 0; i <= cpf.length; i++) {
    return cpf[i] === nvCpf[i] ? `Valido` : `Inválido`
  }
}
// console.log(valida)
const validado = validacao(cpf, valida)
console.log(validado)