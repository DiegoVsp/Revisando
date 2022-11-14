// valida CPF

class ValidaCPF {
  constructor(cpf) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpf.replace(/\D+/g, '')
    })

  }
  geraDigito(cpfParcial) {
    let total = 0;
    let multiplicador = cpfParcial.length + 1
    for (let cpf of cpfParcial) {
      total += Number(cpf) * multiplicador
      multiplicador--
      // console.log(total)
    }
    const digito = 11 - (total % 11)
    console.log(digito)
    return digito <= 9 ? String(digito) : '0'
  }
  geraCPF() {
    let cpfParcial = this.cpfLimpo.slice(0, -2)
    let digito1 = this.geraDigito(cpfParcial)
    let digito2 = this.geraDigito(cpfParcial + digito1)
    console.log(digito2)

    this.novo = cpfParcial + digito1 + digito2
    console.log(this.novo)
  }
  valida() {
    // console.log(typeof this.cpfLimpo)
    if (typeof this.cpfLimpo !== 'string') return false
    if (this.cpfLimpo.length !== 11) return false
    this.geraCPF()

    return this.novo === this.cpfLimpo
  }
}

const cpf1 = new ValidaCPF("144.566.777-98")
// console.log(cpf1)
// console.log(cpf1.geraCPF())

// cpf1.geraDigito('14456677798')
console.log(cpf1.valida())
cpf1.valida()