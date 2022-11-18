// Validar CPF utilizando Classe

class ValidaCpf {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, '')
    })
  }

  // Quando não se utiliza a palavra this dentro de um método, isso significa que ele pode se tornar statico
  static geraDigito(cpfParcial) {
    let total = 0;
    let multiplicador = cpfParcial.length + 1

    for (let stringNumerica of cpfParcial) {
      // console.log(stringNumerica)
      total += Number(stringNumerica) * multiplicador
      multiplicador--
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : '0'
  }

  geraNovoCpf() {
    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = ValidaCpf.geraDigito(cpfParcial)
    const digito2 = ValidaCpf.geraDigito(cpfParcial + digito1)

    this.novoCpf = cpfParcial + digito1 + digito2
  }

  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== 'string') return false
    if (this.cpfLimpo.length !== 11) return false
    if (this.eSequencia()) return false
    this.geraNovoCpf()
    // console.log(this.novoCpf)
    return this.novoCpf === this.cpfLimpo
  }
  
  eSequencia() {
    // return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length)
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
  }
}

// let cpf = new ValidaCpf('070.987.720-03')
// let cpf2 = new ValidaCpf('999.999.999-99')
// console.log(cpf.valida())
// console.log(cpf2.valida())
// // cpf.valida()
// console.log('')
// if (cpf.valida()) {
//   console.log('CPF Válido')
// } else {
//   console.log('CPF Inválido')
// }
