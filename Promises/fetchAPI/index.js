const userData = document.querySelector('[user-js="user-data"]')
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Http error: ${response.status}`)
    }
    return response.json()
  })
  .then((users) => {
    console.log(users)
  })
  .catch((error) => {
    console.log(error)
  })