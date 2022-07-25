const paragrafo = document.querySelector('.paragrafo')

const ps = paragrafo.querySelectorAll('p')

const estiloBody = getComputedStyle(document.body); // pega stylos do Boy
const backgroundBody = estiloBody.backgroundColor

console.log(backgroundBody)

for (let p of ps) {
  p.style.backgroundColor = backgroundBody
  p.style.color = '#FFF'
}
