document.addEventListener('DOMContentLoaded', function() {
    //CARREGA AS OPCOES DE PARCELAMENTO
    const parcelas = document.getElementById("parcelas"); 
    const parcelaOpcoes = [[1,0], [2,.04], [4,.06], [10,.12], [12,.15]]; // [ [PARCELAS , JUROS], [ , ] , ...]
    const valorTotal =  256; // localStorage.getItem("pedidoSubTotal")*1 

    parcelaOpcoes.forEach((parcela)=>{
        var parcelasQtd = parcela[0];
        var parcelaJuros = parcela[1];
        var valorCJuros = valorTotal*(1+parcelaJuros);
        var valorParcela = valorCJuros/parcelasQtd;
        var element = document.createElement("option")
        element.value = parcelasQtd;
        element.innerText = `${parcelasQtd} X R$${valorParcela.toFixed(2)}`

        parcelas.append(element)
    })

    //JA QUE <SELECT> NAO É ENVIADO ATRAVES DO FORM, CRIAMOS UM <INPUT> OCULTO, QUE SEMPRE ATUALIZAMOS COM O VALOR DE <SELECT>, APESAR DE NAO FAZERMOS NENHUM ENVIO.
    const parcelasInput = document.getElementById("parcelasInput");
    parcelas.addEventListener('input',function(){
        parcelasInput.value = this.value;
    })
    parcelasInput.value = this.value;
})