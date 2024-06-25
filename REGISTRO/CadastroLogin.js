document.addEventListener('DOMContentLoaded', function() {
    //VALIDACAO DO INPUT DO NOME
    const registerName = document.querySelector("#register-name");
    registerName.addEventListener('input',function(ev){
        if(ev.inputType !== "insertText") return;
        ev.preventDefault()
        var pattern = new RegExp(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/i);
        if(!pattern.test(ev.data) || (ev.data== " " && this.value[this.value.length-2] == " ")){
            this.value = this.value.slice(0, -1);
        }
    })

    //VALIDACAO DAS SENHAS
    const registerPassword = document.querySelector('#register-password');
    const confirmPassword = document.querySelector('#confirm-password');

    function validateRegisterPassword(){
        if(!(confirmPassword.value === registerPassword.value)){
            confirmPassword.setCustomValidity("As senhas não correspondem")
        }else{
            confirmPassword.setCustomValidity("")
        }
    }
    registerPassword.addEventListener('input', validateRegisterPassword);
    confirmPassword.addEventListener('input', validateRegisterPassword);

    //FAZ REPORT DA VALIDACAO E SIMULA ENVIO
    const registerForm = document.querySelector('#register-form');
    const registerButton = document.querySelector('#register-button');
    const logInForm = document.querySelector('#login-form');
    const logInButton = document.querySelector('#login-button');
    const logInFail = document.querySelector('#login-fail');
    
    registerButton.addEventListener('click', function(event) {
        if(!registerForm.checkValidity()){
            registerForm.reportValidity();
            return;
        }
        console.log("Cadastro enviado com sucesso")
    });

    logInButton.addEventListener('click', function(event) {
        if(!logInForm.checkValidity()){
            logInForm.reportValidity()
            return;
        }
        //EXIBE MENSAGEM DE LOG INVALIDO
        setTimeout(()=>{
            logInFail.style.display="block"
        },300+Math.random()*300); 
    });
});