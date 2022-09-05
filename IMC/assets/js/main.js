const form = document.querySelector('.formulario');

const inputPeso = document.querySelector('#peso');
const inputAltura = document.querySelector('#altura');
const resultado = document.querySelector('.resultado');


form.addEventListener('submit', function (event) {
  event.preventDefault();
  const peso = Number(inputPeso.value)
  const altura = Number(inputAltura.value)

  if (!peso) {
    criarResultado('Peso Inválido', false);
    return
  }
  if (!altura) {
    criarResultado('Altura Inválida', false)
    return
  }

  console.log(peso, altura)

  const imc = calculaImc(peso, altura)
  const nivel = nivelImc(imc)
  const msg = `Seu Imc é de ${imc.toFixed(2)} (${nivel})`
  criarResultado(msg, true);
})
function nivelImc(imc) {
  const nivelIMC = [
    'Abaixo do Peso',
    'Peso normal',
    'Sobrepeso',
    'Obesidade grau 1',
    'Obesidade grau 2',
    'Obesidade grau 3'
  ]
  if (imc >= 39.9) {
    return resultado.innerHTML = nivelIMC[5]
  }
  if (imc >= 34.9) {
    return resultado.innerHTML = nivelIMC[4]
  }
  if (imc >= 29.9) {
    return resultado.innerHTML = nivelIMC[3]
  }
  if (imc >= 24.9) {
    return resultado.innerHTML = nivelIMC[2]
  }
  if (imc >= 18.5) {
    return resultado.innerHTML = nivelIMC[1]
  }
  if (imc < 18.5) {
    return resultado.innerHTML = nivelIMC[0]
  }
}

function calculaImc(peso, altura) {
  return peso / (altura ** 2)
}

function criarResultado(resImc, isValid) {
  resultado.innerHTML = ''
  if (isValid) {
    resultado.classList.remove('invalido')
    resultado.classList.add('valido')
  } else {
    resultado.classList.add('valido')
    resultado.classList.add('invalido')
  }
  resultado.innerHTML = resImc
}