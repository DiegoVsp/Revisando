// 705.484.450-52

// const cpf = [7, 0, 5, 4, 8, 4, 4, 5, 0, 5, 2]
// const cpf = '705.484.450-52'
// let cpfLimpo = cpf.replace(/\D+/g,'');
// let cpfLimpo = cpf.replace(/\D+/g, '')

// const validarCpf = (valor) => {

//   let cpf = valor.slice(0, -2)

//   let total = 0
//   let multiplicador = cpf.length+1
//   let nvCpf = [];
//   for (let i = 0; i < cpf.length; i++) {
//     total += Number(cpf[i]) * multiplicador
//     // console.log(cpf[i])
//     nvCpf.push(cpf[i])
//     multiplicador --
//   }
//   let digito1 = 11 - (237 % 11)
//   if (digito1 > 9) {
//     return digito1 = 0
//   } else {
//     nvCpf.push(digito1)
//   }

//   let multiplicador2 = 11
//   let total2 = 0
//   for (let i = 0; i < nvCpf.length; i++) {
//     total2 += nvCpf[i] * multiplicador2;
//     // console.log(total2)
//     multiplicador2 --
//   }
//   let digito2 = 11 - (total2 % 11)
//   digito2 > 9 ? 0 : nvCpf.push(digito2)
//   return nvCpf
// }
// const valida = validarCpf(cpfLimpo)
// function validacao(cpf, nvCpf) {
//   for (let i = 0; i <= cpf.length; i++) {
//     return cpf[i] === nvCpf[i] ? `Valido` : `Inválido`
//   }
// }
// console.log(valida)
// const validado = validacao(cpf, valida)
// console.log(validado)

// Solução Exercicio
function ValidaCpf(cpfEnviado) {
  // getter
  Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get: function () {
      return cpfEnviado.replace(/\D+/g, '')
    }
  })
} 
ValidaCpf.prototype.valida = function () {
  if (typeof this.cpfLimpo === 'undefined') return false
  if (this.cpfLimpo.length !== 11) return false
  if (this.isSequencia()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2)

  const digito1 = this.criaDigito(cpfParcial)
  const digito2 = this.criaDigito(cpfParcial + digito1)
  // console.log(cpfParcial+digito1+digito2)
  const novoCpf = cpfParcial + digito1 + digito2
  return novoCpf === this.cpfLimpo
};
ValidaCpf.prototype.criaDigito = function (cpfParcial) {
  let cpfArray = Array.from(cpfParcial)

  let contadorRegressivo = cpfArray.length + 1;

  const total = cpfArray.reduce((acc, valor) => {
    // console.log(contadorRegressivo, acc)
    acc += (Number(valor) * contadorRegressivo)
    contadorRegressivo--
    return acc
  }, 0)
  const digito = 11 - (total % 11)
  return digito > 9 ? '0' : String(digito)
}
ValidaCpf.prototype.isSequencia = function () {
  const sequence = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  // console.log(sequence === this.cpfLimpo)
  return sequence === this.cpfLimpo
}
const cpf = new ValidaCpf('070.987.720-03');
// console.log(cpf.cpfLimpo)
console.log(cpf.valida())

if (cpf.valida()) {
  console.log('Cpf Válido')
} else {
  console.log('Cpf Inválido')
}