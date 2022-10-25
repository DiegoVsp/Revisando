window.addEventListener('scroll', () => {
  let header = document.querySelector('header')
  header.classList.toggle('sticky', scrollY > 0)
})