function Calculadora() {
  this.display = document.querySelector('.display');
  this.inicia = () => {
    this.display.focus();
    this.capturaCliques();
    this.pressionaEnter();
  };

  this.pressionaEnter = () => {
    document.addEventListener('keyup', e => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    })
  }

  this.capturaCliques = () => {
    document.addEventListener('click', event => {
      const el = event.target;
      if (el.classList.contains('btn-num')) this.addNumDisplay(el);
      if (el.classList.contains('btn-clear')) this.limpaDisplay();
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.realizaConta();
    });
  };

  this.limpaDisplay = () => this.display.value = '';
  this.del = () => this.display.value = this.display.value.slice(0, -1);
  this.realizaConta = () => {
    let conta = this.display.value
    try {
      conta=eval(conta)
      if (conta === '' || Number.isNaN(conta) || typeof conta !== 'number') { //Validando
        alert('Conta Inválida!')        
        return
      }
      this.display.value = String(conta)
    } catch (error) {
      alert('Conta Inválida!')
      this.display.value=''  
      return  

    }
  };
  this.addNumDisplay = el => {
    this.display.value += el.innerText;
    this.display.focus();
  };
  ;
}
const calculadora = new Calculadora();
calculadora.inicia()