function ValidaCpf(cpf) {
  this.cpf = cpf
}

ValidaCpf.prototype.valida = function () {
  // if(typeof this.cpf === 'undefined') return false 

  const cpfLimpo = this.cpf.replace(/\D+/g, '')
  const cpfParcial = cpfLimpo.slice(0, -2)
  const primeiroDigito = this.criaDigito(cpfParcial)
  const segundoDigito = this.criaDigito(cpfParcial + primeiroDigito)
  const novoCpf = cpfParcial + primeiroDigito + segundoDigito
  
  // console.log(novoCpf)

  return novoCpf
}
ValidaCpf.prototype.criaDigito = function (cpfParcial) {
  let cpfArray = Array.from(cpfParcial)
  let contadorRegressivo = cpfArray.length + 1

  const total = cpfArray.reduce((acc, valor) => {
    acc += (Number(valor) * contadorRegressivo)
    // console.log(acc)
    contadorRegressivo--
    return acc
  }, 0)
  const digito = 11 - (total % 11)

  return digito > 9 ? '0' : String(digito)
}

const validaCpf = new ValidaCpf('705.484.450-52')
console.log(validaCpf.valida())
