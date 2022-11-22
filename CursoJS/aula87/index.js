function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);

}

// console.log(rand(1, 10))

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {


    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject('Cai no ERRO')
        return
      }
      resolve(msg.toUpperCase() + ' Passei na Promise')
      return;
    }, tempo);
  })
}

// esperaAi('Olá povo!', rand(1, 5)).then(resposta => console.log(resposta))

// Promise.all Promise.race Promise.resolve Promise.reject
const promises = [
  // 'Primeiro valor',
  esperaAi('Promise 1', rand(1, 5)),
  esperaAi('Promise 2', rand(1, 5)),
  esperaAi('Promise 3', rand(1, 5)),
  // esperaAi(1000, 1000),
  // 'Outro valor'
]

// Promise.all(promises).then(valor => console.log(valor)).catch(erro => console.log(erro));
// Promise.race(promises).then(valor => console.log(valor)).catch(erro => console.log(erro));

function baixaPagina() {
  const emChache = true;
  if (emChache) {
    // return Promise.resolve('Página em cache')
    return Promise.reject('Página em cache')
  } else {
    return esperaAi('Baixei a página', 3000);
  }
}
baixaPagina().then((resp) => console.log(resp)).catch(e => console.log('ERROR', e))