//              -5        -4        -3      -2            -1  
//               0         1         2       3             4  
const nomes = ['Diego', 'Tiago', 'Maria', 'Francisca', 'Renata']

// nomes.splice(índice, delete, elementos)
// const removidos = nomes.splice(3,2);
// const removidos = nomes.splice(-2, 1);
// const removidos = nomes.splice(3, 0, 'Luiz'); //adicionando
// const removidos = nomes.splice(3, 1, 'Luiz');
// const removidos = nomes.splice(3, 2, 'Luiz','Fernando');
// const removidos = nomes.splice(-2,Number.MAX_VALUE);

// pop 
// const removidos = nomes.splice(-1, 1);

// shift 
// const removidos = nomes.splice(0, 1)

// push
// nomes.splice(nomes.length, 0, 'Luiz', 'Fernando')

// Unshift
nomes.splice(0,0,'Breno','Marcos')
// console.log(nomes, removidos);
console.log(nomes);


