

// fetch('pagina5.html')
//   .then(resposta => {
//     if (resposta.status !== 200) {
//       throw new Error(`Error 404`)
//     }
//     return resposta.text() // retorna outra promise
//   })
//   .then(resposta => console.log(resposta))
//   .catch(e => console.error(e));


const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText); //success *
      }
      else {
        reject(xhr.statusText); //error *
      }
    })
  })
}

document.addEventListener('click', e => {
  const elemento = e.target;
  const tag = elemento.tagName.toLowerCase()

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(elemento);
  }
})

// function carregaPagina(el) {
//   const href = el.getAttribute('href');
//   fetch(href)
//     .then(resposta => {
//       if (resposta.status !== 200) {
//         throw new Error(`Error 404`)
//       }
//       return resposta.text()
//     })
//     .then(html => carregaDadosPagina(html))
//     .catch(e => console.log(e))
// }
// function carregaDadosPagina(resposta) {
//   const resultado = document.querySelector('.resultado');
//   resultado.innerHTML = resposta;
// }

// Convertendo para async await
async function carregaPagina(el) {
  try {
    const href = el.getAttribute('href');
    const response = await fetch(href);

    if (response.status !== 200) throw new Error(`Error 404`)

    const html = await response.text();
    carregaDadosPagina(html);
  } catch (error) {
    console.log(error);
  }

}
function carregaDadosPagina(resposta) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = resposta;
}