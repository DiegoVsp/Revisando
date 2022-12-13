// let randomNumber = 9;

// setTimeout(() => {
//   randomNumber += 100
//   console.log(randomNumber)
// }, 2000)
// console.log(randomNumber)

// // Criando uma promise

// const aPromise = new Promise((resolve, reject) => {
//   const aNumber = 37
//   // resolve(aNumber)
//   reject(aNumber)
// })

// aPromise
//   .then(resposta => resposta) // método then sempre retorna uma nova promise
//   .then(value => {
//     console.log(value)
//   })
//   .catch(rejectValue => {
//     console.log({rejectValue})
//   })

// Requisição de uma API que traz uma imagem de um cachorro a cada request
const url = 'https://dog.ceo/api/breeds/image/random'
const dogImg = document.querySelector('[data-js="dog-img"]')


// fetch(url)
//   .then(dogData => {
//     if (!dogData.ok) {
//       throw new Error(`Http error: ${dogData.status}`)
//     }
//     return dogData.json()
//   })
//   .then(({ message }) => {
//     dogImg.setAttribute('src',message)
//   })
//   .catch((error) => {
//     console.log(error.message)
//   })

const validadeHTTPStatus = dogData => {
  if (!dogData.ok) {
    throw new Error(`Http error: ${dogData.status}`)
  }
  return dogData.json()
}
const setDogImg = ({ message: url }) => {
  dogImg.setAttribute('src', url)
}
const handleRequestError = (error) => {
  console.log(error.message)
}

fetch(url)
  .then(validadeHTTPStatus)
  .then(setDogImg)
  .catch(handleRequestError)