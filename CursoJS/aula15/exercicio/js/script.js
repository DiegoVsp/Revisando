const numero = Number(prompt('Digite um número'));
// numero = Number(numero)
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");


numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>${numero} + 2 é <strong>${numero + 2}</strong></p></br>`
texto.innerHTML += `<p>Raiz Quadrada: <strong>${numero ** 0.5}</strong></p></br>`
texto.innerHTML += `<p><strong>${numero} é inteiro? ${Number.isInteger(numero)}</strong> </p></br>`
texto.innerHTML += `<p>É NaN? <strong>${Number.isNaN(numero)}</strong></p></br>`
texto.innerHTML += `<p>Arredondando pra baixo é <strong>${Math.floor(numero)}</strong></p></br>`
texto.innerHTML += `<p>Arredondando pra cima é <strong>${Math.ceil(numero)}</strong></p></br>`
texto.innerHTML += `<p>Com duas casas decimais <strong>${numero.toFixed(2)}</strong></p></br>`



