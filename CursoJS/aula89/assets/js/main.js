// xmlHttpRequest = xhr = ajax
// Códigos HTTP 

// Com Callback
// const request = obj => {
//   const xhr = new XMLHttpRequest();
//   xhr.open(obj.method, obj.url, true);
//   xhr.send();

//   xhr.addEventListener('load', () => {
//     if (xhr.status >= 200 && xhr.status < 300) {
//       obj.success(xhr.responseText); //success *
//     }
//     else {
//       obj.error(xhr.responseText); //error *
//     }
//   })
// }
// document.addEventListener('click', e => {
//   const elemento = e.target;
//   const tag = elemento.tagName.toLowerCase()

//   if (tag === 'a') {
//     e.preventDefault();
//     carregaPagina(elemento);
//   }
// })

// function carregaPagina(elemento) {
//   const href = elemento.getAttribute('href'); //Pegar o HREF
//   const objConfig = {
//     method: 'GET',
//     url: href,
//     success(response) {  //success *
//       carregaResultado(response)
//     },
//     error(errorText) { //error *
//       console.log(errorText);
//     },
//   }
//   request(objConfig)
// }

// function carregaResultado(response) {
//   const resultado = document.querySelector('.resultado');
//   resultado.innerHTML = response;
// }

// Com Promises

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

async function carregaPagina(elemento) {
  const href = elemento.getAttribute('href'); //Pegar o HREF
  const objConfig = {
    method: 'GET',
    url: href
  };
  // request(objConfig)
  //   .then(response => {
  //     carregaResultado(response)
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })

  try {
    const response = await request(objConfig)
    carregaResultado(response)
  } catch (err) {
    console.log(e)
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}