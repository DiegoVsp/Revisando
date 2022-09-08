function criaCalculadora() {
  return {
    display: document.querySelector('.display'),


    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },
    pressionaEnter(){
      this.display.addEventListener('keypress', (e) => { //KEYPRESS ENTER
        if(e.keyCode===13){
          this.realizaConta()
        }
      })
    },
    clearDisplay() {
      this.display.value = '';
    },
    apagaUm() {
      this.display.value = this.display.value.slice(0, -1)
    },
    realizaConta() {
      let conta = this.display.value;
      try {
        conta = eval(conta)
        if (conta=== '' || Number.isNaN(conta) || typeof conta !== 'number') {
          alert('Conta Inválida')
          return
        }

        this.display.value = String(conta)
      } catch (e) {
        alert('Conta Inválida')
        return
      }
    },

    cliqueBotoes() {
      // Aqui this é a Calculadora 
      document.addEventListener('click', (e) => { // já aqui o this agora é document

        const el = e.target;

        if (el.classList.contains('btn-num')) {
          // metodo dentro de outro metodo usa o this
          this.btnParaDisplay(el.innerText);
        }
        if (el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }
        if (el.classList.contains('btn-del')) {
          this.apagaUm();
        }
        if (el.classList.contains('btn-eq')) {
          this.realizaConta()
        }
      })//.bind(this) // colocar .bind(this) para dizer que é o this da Calculadora e nao de document
    },
    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  }
}

const calculadora = criaCalculadora();
calculadora.inicia()
