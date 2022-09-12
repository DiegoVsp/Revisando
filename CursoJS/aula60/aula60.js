// Function recursiva

function recursiva(max) {
  console.log(max)
  if (max >= 10) return
  max++
  recursiva(max)
}
recursiva(0)

// let n1 = 1
// let n2 = 0
// let res = 0

// const recursiva = (x) => {
//   if (x >= 10) return
//   res = n1 + n2;
//   n2 = n1;
//   n1 = res;
//   console.log(res)
//   x++
//   recursiva(x)
// }
// recursiva(1)

// let n1 = 1
// let n2 = 0
// let res = 0

// for (let i = 0; i <= 10; i++) {
//   res = n1 + n2
//   n2 = n1
//   n1 = res
//   console.log(res)
// }