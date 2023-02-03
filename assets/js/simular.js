$(document).on("click", "#simular", function () {
    let fm = document.forms[0]
    if ($(fm[0]).val().length > 11 || $(fm[0]).val() == "") {
        alert("CPF Inválido!")
    } else if ($(fm[1]).val().length > 150 || $(fm[1]).val() == "") {
        alert("Nome Inválido!")
    } else if ($(fm[2]).val().length > 10 || $(fm[2]).val() == "") {
        alert("Data de Nascimento Inválida!")
    } else if ($(fm[3]).val().length > 11 || $(fm[3]).val() == "") {
        alert("Celular Inválido!")
    } else if ($(fm[4]).val().length > 40 || $(fm[4]).val() == "") {
        alert("Ocupação Inválida!")
    } else if ($(fm[5]).val().length > 8 || $(fm[5]).val() == "") {
        alert("CEP Inválido")
    } else if ($(fm[6]).val().length > 12 || $(fm[6]).val() == "") {
        alert("Valor Inválido!")
    } else {
        alert("Estamos finalizando sua análise!")
    }
})
