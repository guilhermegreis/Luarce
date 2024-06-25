document.addEventListener('DOMContentLoaded', function() {
    //VALIDACAO E FORMATACAO DOS INPUTS DO FORMULARIO
    const cpf = document.querySelector("#cpf");
    const name_ = document.querySelector("#name"); 
    const number = document.querySelector("#number"); 
    const date = document.querySelector("#date"); 
    const cardName = document.querySelector("#card-nam");
    const ccv = document.querySelector('#ccv');

    //CPF, INSERIDO NO FORMATO XXX.XXX.XXX-XX, SOMEONTE NUMEROS
    cpf.addEventListener("input",function(ev){
        if(ev.inputType !== "insertText") return;
        var pattern = new RegExp(/[0-9]/);
        if(!(pattern.test(ev.data))){
            this.value = this.value.slice(0, -1); 
        }
        if(this.value.length==11){
            this.value+="-";
        }else if((Math.floor(this.value.length/3)-(1+this.value.length % 3)) == 0){
            this.value+=".";
        }
    })
    //NOME, INSERI SOMONE TEXTO, PERMITINDO ACENTUAÇÃO
    name_.addEventListener("input",function(ev){
        if(ev.inputType !== "insertText") return;
        ev.preventDefault()
        var pattern = new RegExp(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/i);
        if(!pattern.test(ev.data) || (ev.data==" " && this.value[this.value.length-2] == " ")){
            this.value = this.value.slice(0, -1);
        }
    })
    //NUMERO DO CARTAO, INSERI NO FORMATO XXXX XXXX XXXX XXXX, SOMENTE NUMEROS
    number.addEventListener("input",function(ev){
        if(ev.inputType !== "insertText") return;
        var pattern = new RegExp(/[0-9]/);
        if(!(pattern.test(ev.data))){
            this.value = this.value.slice(0, -1); 
        }
        if((Math.floor(this.value.length/4)-(1+this.value.length % 4)) == 0 && this.value.length<19){
            this.value+=" ";
        }
    })
    //DATA, SÓ PODE INSERIR UMA DATA NO FUTURO
    date.addEventListener("input",function(ev){
        if(date.value == '' || new Date(date.value).getTime() < new Date().getTime()){
            date.setCustomValidity("Data inválida");
            date.value=''
        }
        date.setCustomValidity("");
    })
    //NOME NO CARTAO, INSERI SOMONE TEXTO, PERMITINDO ACENTUAÇÃO
    cardName.addEventListener("input",function(ev){
        if(ev.inputType !== "insertText") return;
        ev.preventDefault()
        var pattern = new RegExp(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/i);
        if(!pattern.test(ev.data) || (ev.data==" " && this.value[this.value.length-2] == " ")){
            this.value = this.value.slice(0, -1);
        }
    })
    //CCV, SOMONE NUMEROS (LIMITE JA DEFINIDO EM HTML)
    ccv.addEventListener("input",function(ev){
        if(ev.inputType !== "insertText") return;
        var pattern = new RegExp(/[0-9]/);
        if(!(pattern.test(ev.data))){
            this.value = this.value.slice(0, -1); 
        }
    })

     //FAZ REPORT DA VALIDACAO E REDIRECIONA PARA STATUS DO PAGAMENTO
    const awaitingPayment = document.querySelector("#awaiting-payment");
    const payButton = document.getElementById('pay-button')
    const formPayment = document.getElementById('form-payment')
    payButton.addEventListener('click', (ev) =>{
        if(formPayment.checkValidity() == false){
            formPayment.reportValidity()
            return;
        }
        ev.preventDefault();
        awaitingPayment.style.display = 'block'
        setTimeout(()=>{
            //COMO TESTE, SE O CAMPO NOME FOR 'Luarce' REDIRECIONA PARA PAGINA DE ERRO
            if(name_.value == "Luarce"){
                window.location.href = "PagamentoErro.html"
                return
            }

            window.location.href = "PagamentoAprovado.html"
        }, 2000+Math.random()*2000)
    })
})
