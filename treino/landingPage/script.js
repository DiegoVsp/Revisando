window.addEventListener('scroll', () => {
  let header = document.querySelector('header')
  header.classList.toggle('scroll', scrollY > 0)
})