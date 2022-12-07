function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min)) + min;
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject('Cai no ERRO');
        return
      }
      resolve(msg.toUpperCase() + ' - Passei na promise');
      return
    }, tempo);
  })
}
// esperaAi('Fase 1', rand())
//   .then(valor => {
//     console.log(valor);
//     return esperaAi('Fase 2', rand())
//   })
//   .then(valor => {
//     console.log(valor);
//     return esperaAi('Fase 3', rand())
//   })
//   .then(valor => {
//     console.log(valor);
//     return valor
//   }).then(valor => {
//     console.log('Terminamos a Fase: ', valor)
//   }).catch(err => console.log(err));

// Async

async function executa() {
  try {
    const fase1 = esperaAi('Fase 1', rand());
    console.log(fase1);

    setTimeout(() => {
      console.log('Essa promise estava  pendente', fase1)
    }, 1100);

    const fase2 = await esperaAi('Fase 2', rand());
    console.log(fase2);
    const fase3 = await esperaAi('Fase 3', rand());
    console.log(fase3);

    console.log('Terminamos na Fase:', fase3)
  } catch (error) {
    console.log(error)
  }
}
executa()

// Estados: pending -> Pendente
// Estados: fullfilled -> Resolvida
// Estados: rejected -> Rejeitada 

// const teste2 = esperaAi('qqq', rand()).then(valor => { console.log(valor) });
const teste2 = esperaAi('qqq', rand())
console.log(teste2)