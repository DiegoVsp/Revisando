// VALIDANDO FORMULÁRIO
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
    const senhasValidas = this.senhasSaoValidas();
    if (camposValidos && senhasValidas) {
      alert('Formulário Enviado!')
      this.formulario.submit()
    }
  }
  senhasSaoValidas() {
    let valid = true;
    const senha = this.formulario.querySelector('.password')
    const repetirSenha = this.formulario.querySelector('.repeat-password')
    if (senha.value !== repetirSenha.value) {
      valid = false
      this.criaErro(senha, 'Campos senha e repetir senha devem ser iguais')
      this.criaErro(repetirSenha, 'Campos senha e repetir senha devem ser iguais')
    }
    if (senha.value.length < 6 || senha.value.length > 12) {
      valid = false
      this.criaErro(senha, 'Devem estar entre 6 e 12 caracteres')
      this.criaErro(repetirSenha, 'Devem estar entre 6 e 12 caracteres')
    }
    return valid

  }
  checaCampos() {
    let valid = true;
    for (let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove() // não irá adicionar mais textos dos erros
    }
// 1º
   for (let campo of this.formulario.querySelectorAll('.validar')) {
      const label = campo.previousElementSibling.innerHTML;
      if (!campo.value) {
        this.criaErro(campo, `Campo "${label}" não pode estar em branco`)
        valid = false;
      }
      if (campo.classList.contains('cpf')) {
        if (!this.validaCPF(campo)) valid = false;
      }
      if (campo.classList.contains('user')) {
        if (!this.validaUsuario(campo)) valid = false;
      }
    }
    return valid
  }
  validaUsuario(campo) {
    const usuario = campo.value;
    let valid = true;
    if (usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres')
      valid = false;
    }
    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e/ou números. ')
      valid = false;
    }
    return valid
  }
  validaCPF(campo) {
    const cpf = new ValidaCpf(campo.value)
    if (!cpf.valida()) {
      this.criaErro(campo, 'CPF inválido');
      return false
    } else {
      return true
    }
  }

  criaErro(campo, msg) {
    const div = document.createElement('div')
    div.innerHTML = msg
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div)

  }
}
const valida = new ValidaFormulario();