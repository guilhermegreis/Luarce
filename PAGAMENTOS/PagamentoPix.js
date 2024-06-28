document.addEventListener("DOMContentLoaded", function() {
    var timer = 8000;
    function updateTimer(){
        if(--timer == 0){
            window.location.href = "PagamentoAprovado"
        }
    }
    setInterval(updateTimer,1000)
})
