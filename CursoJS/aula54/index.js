// // Funções de Callback
// function rand(min = 1000, max = 3000) { // num. aleatório
//   const num = Math.random() * (max - min) + min
//   return Math.floor(num)
// }
// // console.log(rand())

// function f1(callback) {
//   setTimeout(function () {
//     console.log('f1')
//     if (callback) callback()
//   }, rand());
// }
// function f2(callback) {
//   setTimeout(function () {
//     console.log('f2')
//     if (callback) callback()
//   }, rand());
// }
// function f3(callback) {
//   setTimeout(function () {
//     console.log('f3')
//     if (callback) callback()
//   }, rand());
// }

// // Callback Hell
// // f1(function(){
// //   f2(function(){
// //     f3(function(){
// //       console.log('Olá mundo!')
// //     })
// //   })
// // })

// f1(f1CallBack);

// function f1CallBack() {
//   f2(f2CallBack)
// }
// function f2CallBack() {
//   f3(f3CallBack)
// }
// function f3CallBack() {
//   console.log('Olá mundo!')
// }


// let divisores = 0

// let num = 4

// for (let i = 0; i <= num; i++) {
//   if (num % i == 0) divisores++
// }
// if (divisores == 2) {
//   console.log(`${num} é PRIMO`)
// } else {
//   console.log(`${num} Não é PRIMO`)
// }

// let n1 = 1;
// let n2 = 0;
// let res = 0;

// let num = 5;

// for (let i = 0; i <= num; i++) {
//   res = n1 + n2;
//   console.log(`${res}`)
//   n2 = n1;
//   n1 = res
// }
