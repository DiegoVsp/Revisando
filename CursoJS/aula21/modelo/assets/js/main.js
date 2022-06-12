//Capturar evento submit do formulário
const form = document.querySelector('.form')



form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso')
  const inputAltura = e.target.querySelector('#altura')

  const peso = Number(inputPeso.value)
  const altura = Number(inputAltura.value)

  if(!peso){
    setResultado('Inválido')
  }
})

// Função criar parágrafo
function criaParagrafo() {
  const paragrafo = document.createElement('p');
  paragrafo.classList.add();
  return paragrafo
}

function setResultado(msg) {
  const resultado = document.querySelector('.resultado')

  resultado.innerHTML = '';

  // const p = document.createElement('p');//criando elemento
  //adicionando classe no Paragrafo
  // p.classList.add('paragrafo-resultado');
  // adicionando conteudo no paragrafo
  // p.innerHTML = 'Qualquer coisa';

  const paragrafo = criaParagrafo();
  resultado.appendChild(paragrafo;
}