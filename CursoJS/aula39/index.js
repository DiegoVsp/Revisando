// While || Do While

const nome = 'Diego'
let i = 0;

// while (i <= 10) {
//   console.log(i)
//   i++
// }
// while (i < nome.length) {
//   console.log(nome[i])
//   i++
// }
// console.log('Segue a vida...')

function random(min, max) {
  const r = Math.random() * (max - min) + min
  // return r
  return Math.floor(r)
}
const min = 1
const max = 50
let rand = random(min, max)
// console.log(rand.toFixed(2))
// console.log(rand)

while (rand !== 10) {
  rand = random(min, max)
  console.log(rand)
}
// console.log(rand!==10)

console.log("**********")
do {
  rand = random(min, max)
} while (rand !== 10);