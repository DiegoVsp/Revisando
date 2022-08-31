function criaCalculadora() {
  return {
    display: document.querySelector('.display'),





    inicia() {
      this.cliqueBotoes();
    },

    cliqueBotoes() {
      // Aqui this é a Calculadora 
      document.addEventListener('click', (e) => { // já aqui o this agora é document

        const el = e.target;

        if (el.classList.contains('btn-num')) {
          // metodo dentro de outro metodo usa o this
          this.btnParaDisplay(el.innerText);
        }
      }).bind(this) // colocar .bind(this) para dizer que é o this da Calculadora e nao de document
    },
    btnParaDisplay(valor) {
      this.display.value+=valor;
    },
  }
}

const calculadora = criaCalculadora();
calculadora.inicia()
