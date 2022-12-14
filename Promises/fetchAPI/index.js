const userData = document.querySelector('[user-js="user-data"]')


fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Http error: ${response.status}`)
    }
    return response.json()
  })
  .then((users) => {
    for(let user of users){
    // console.log(user.username)
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.innerText = user.username;
    li.appendChild(span);
    // li.innerHTML = `${user.username}`
    userData.appendChild(li)
    }
  })
  .catch((error) => {
    console.log(error)
  })


// const userData = document.querySelector('[user-js="user-data"')
// // console.log(userData

// const url = 'https://randomuser.me/api/?results=10'
// fetch(url)
//   .then(response => {
//     return response.json()
//   })
//   .then((user) => {
//     const authors = user.results
//     authors.map(author => {
//       const li = document.createElement('li')
//       const span = document.createElement('span')
//       span.innerText = author.name.first
//       li.appendChild(span)
//       userData.appendChild(li)
//     })
//     return authors
//   })

