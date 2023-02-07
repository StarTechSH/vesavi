$("#imprimir").click(function(e){
    e.preventDefault()
    var divTabela = document.getElementById("rel_clientes")
    var dados = new Blob(['\ufeff' + divTabela.outerHTML], {type:'application/vnd.ms-excel'})
    var url = window.URL.createObjectURL(dados)
    var a = document.createElement('a')
    a.href = url
    a.download = "relatorioClientes"
    a.click()
})