class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector(".formulario")
    this.eventos();
  }
  eventos() {
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e)
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    // console.log('Formulario não enviado')
    const camposValidos = this.checaCampos();
  }
  checaCampos() {
    let valid = true;
    for (let campo of this.formulario.querySelectorAll('.validar')) {
      if (!campo.value) {
        console.log('campo vazio')
      }
    }
  }
}
const valida = new ValidaFormulario();