const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numero of numeros) {
  if (numero === 2) {
    console.log('Pulei o número 2')
    continue;
  }
  console.log(numero)
}
console.log("*********")
for (let numero of numeros) {
  console.log(numero)
  if (numero === 7) {
    console.log("7 encontrado, saindo ...")
    break;
  }
}

console.log('***For IN ***')
for (let i in numeros) {
  let numero = numeros[i]

  console.log(numero)
  if (numero === 7) {
    console.log('7 encontrado, saindo...')
    break
  }
}