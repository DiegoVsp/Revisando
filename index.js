const tabuada = [2,3,4,5,6,7,8,9,10]

for(let i = 0; i<=10; i++){
  let res = tabuada * i;
  console.log(`${tabuada} X ${i} = ${res}`)
}

console.log('-----------------')

for(let num of tabuada){
  console.log('----------')
  for(let i = 0; i<=10;i++){
    let res = num*i
    console.log(`${num} X ${i} = ${res}`)
  }
}