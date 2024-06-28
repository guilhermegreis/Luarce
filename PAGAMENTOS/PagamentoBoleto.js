document.addEventListener("DOMContentLoaded", function() {
    const downloadPdf = document.querySelector("#download-pdf")

    var timer = 20;
    function updateTimer(){
        if(--timer == 0){
            window.location.href = "PagamentoAprovado"
        }
    }
    setInterval(updateTimer,1000)

    downloadPdf.addEventListener("click",function(){
        timer = 6;
    })
})
