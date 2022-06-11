// Entre 0 - 11 - Bom dia!
// Entre 12 - 17 - Boa tarde!
// Entre 18 - 23 - Boa noite!

const hora = 13

if (hora < 12) {
  console.log('Bom dia!');
} else if (hora >= 12 && hora < 18) {
  console.log('Boa tarde!')
} else {
  console.log('Boa noite!');
}

const numero = 10;

if (numero >= 0 && numero <= 5) {
  console.log('Sim, o número está entre 0 e 5')
} else if (numero >= 6 && numero <= 8) {
  console.log('O número está entre 6 e 8');
} else if (numero >= 9 && numero <= 11) {
  console.log('O número está entre 9 e 11');
} else {
  console.log('O número está entre 0 e 11')
}