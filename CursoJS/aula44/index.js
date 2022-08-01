// Try,Catch, Throw

// try {
//   console.log(nãoExiste)
// } catch (error) {
//   console.log('nãoExisto não existe')
//   console.log(error)
// }

// function soma(x, y) {
//   if (typeof x !== 'number' || typeof y !== 'number') {
//     throw new Error('x and y must be numbers')
//   }
//   return x + y
// }

// try {
//   console.log(soma(3, 2))
//   console.log(soma('3', 2))

// } catch (error) {
//   // console.log(error)
//   console.log('Alguma coisa mais amigavel pro usuário.')
// }

// Try,Catch, Throw, Finally

// try {
//   console.log(a)
//   console.log('Abri um arquivo');
//   console.log('Manipulei o arquivo e gerou um erro')
//   console.log('Fechei um arquivo');
//   // É executado quando não há erros
// } catch (error) {
//   console.log('Tratando o Erro')
//   // É executada quando há erros
// } finally {
//   console.log('FINALLY: Eu sempre sou executado')
//   // Sempre
// }

function retornaHora(data) {
  // data e uma instacia de date
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instancia de Date')
  }
  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })
}

try {
  const data = new Date('01-01-1970 12:58:12');
  const hora = retornaHora(11);
  console.log(hora)
} catch (e) {
  //tratar erro
}finally{
  console.log('tenha um bom dia.')
}
