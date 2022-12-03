// PROMISES

function rand(min, max) {
  min *= 1000;
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {

    if (typeof msg !== 'string') reject('BAD VALUE') 
    // if (typeof msg !== 'string') reject(new Error('ERRO')) 

    setTimeout(() => {
      resolve(msg)
    }, tempo);

  });
}

esperaAi('Conexão com o BD...', rand(1, 3))
  .then(resposta => {
    console.log(resposta)
    // return esperaAi('Buscando dados da Base', rand(1, 3))
    return esperaAi('1231', rand(1, 3))
  })
  .then(resposta => {
    console.log(resposta)
    return esperaAi('Tratando os dados da Base', rand(1, 3))
  })
  .then(resposta => {
    console.log(resposta)
  })
  .then(() => {
    console.log('Exibe os Dados na tela')
  })
  .catch(e => {
    console.log('ERRO', e)
  });

console.log('Isso aqui é exibido antes de qualquer promise.')
