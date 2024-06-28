document.addEventListener("DOMContentLoaded", function() {
    //VALIDACAO E FORMATACAO DOS INPUTS DO FORMULARIO
    const cpf = document.querySelector("#cpf");
    const name_ = document.querySelector("#name"); 
    const number = document.querySelector("#number"); 
    const date = document.querySelector("#date"); 
    const cardName = document.querySelector("#card-nam");
    const ccv = document.querySelector("#ccv");

    //CPF, INSERIDO NO FORMATO XXX.XXX.XXX-XX, SOMEONTE NUMEROS
    cpf.addEventListener("input",function(ev){
        var raw = this.value.replace(/[^0-9]/g, "");
        var formatted = "";
        for (var i = 0; i < raw.length; i++) {
            if (i > 0 && i % 3 === 0 && i < 9) {
                formatted += ".";
            }else if(i == 9){
                formatted += "-";
            }
            formatted += raw[i];
        }
        this.value = formatted;
    })
    //NOME, INSERI SOMONE TEXTO, PERMITINDO ACENTUAÇÃO
    name_.addEventListener("input",function(ev){
        this.value = this.value.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ\s]/g, "").replace(/\s+/g, ' ').replace(/^\s+/, '');
    })
    //NUMERO DO CARTAO, INSERI NO FORMATO XXXX XXXX XXXX XXXX, SOMENTE NUMEROS
    number.addEventListener("input",function(ev){
        var raw = this.value.replace(/[^0-9]/g, "");
        var formatted = "";
        for (var i = 0; i < raw.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formatted += " ";
            }
            formatted += raw[i];
        }
        this.value = formatted.trim(" ");
    })
    //DATA, SÓ PODE INSERIR UMA DATA NO FUTURO
    date.addEventListener("input",function(ev){
        if(date.value == "" || new Date(date.value).getTime() < new Date().getTime()){
            date.setCustomValidity("Data inválida");
            date.value=""
        }
        date.setCustomValidity("");
    })
    //NOME NO CARTAO, INSERI SOMONE TEXTO, PERMITINDO ACENTUAÇÃO
    cardName.addEventListener("input",function(ev){
        this.value = this.value.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ\s]/g, "").replace(/\s+/g, ' ').replace(/^\s+/, '');
    })
    //CCV, SOMONE NUMEROS (LIMITE JA DEFINIDO EM HTML)
    ccv.addEventListener("input",function(ev){
        this.value = this.value.replace(/[^0-9]/g, "");
    })

     //FAZ REPORT DA VALIDACAO E REDIRECIONA PARA STATUS DO PAGAMENTO
    const awaitingPayment = document.querySelector("#awaiting-payment");
    const payButton = document.getElementById("pay-button")
    const formPayment = document.getElementById("form-payment")
    payButton.addEventListener("click", (ev) =>{
        if(formPayment.checkValidity() == false){
            formPayment.reportValidity()
            return;
        }
        ev.preventDefault();
        awaitingPayment.style.display = "block"
        setTimeout(()=>{
            //COMO TESTE, SE O CAMPO NOME FOR "Luarce" REDIRECIONA PARA PAGINA DE ERRO
            if(name_.value == "Luarce"){
                window.location.href = "PagamentoErro"
                return
            }

            window.location.href = "PagamentoAprovado"
        }, 2000+Math.random()*2000)
    })
})
