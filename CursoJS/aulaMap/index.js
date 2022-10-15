
const pessoas = [
  { id: 3, nome: 'Diego' },
  { id: 2, nome: 'Tiago' },
  { id: 1, nome: 'Francisca' }
];
// const novasPessoas = {};

// for(const {id,nome} of pessoas){
//   console.log(id,nome)
// }
// for(const pessoa of pessoas) {
//   const { id } = pessoa
//   novasPessoas[id] = { ...pessoa }
// }
const novasPessoas = new Map();

for (const pessoa of pessoas) {
  const { id } = pessoa
  novasPessoas.set(id, { ...pessoa })
}
console.log(novasPessoas.get(2)) //Ordem se mantém

// for (const [identifier, { id, nome }] of novasPessoas) {
//   console.log(identifier,id,nome)
// }
// for(const chaves of novasPessoas.keys()){
//   console.log(chaves)
// }
// for(const valores of novasPessoas.values()){
//   console.log(valores)
// }
novasPessoas.delete(2)
console.log(novasPessoas)