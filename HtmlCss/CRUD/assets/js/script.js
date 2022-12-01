'use strict'

const openModal = document.querySelector('#modal')

const closeModal = document.querySelector('#modal-close')


const cadastrarClient = document.querySelector('#cadastrarCliente')

cadastrarClient.addEventListener('click', () => {
  openModal.classList.add('active') 
})

closeModal.addEventListener('click', () => {
  openModal.classList.remove('active')
})