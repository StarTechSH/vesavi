async function listarClientes() {
    const dados = await fetch("http://localhost/crefaz/assets/php/clientes.php");
    const resposta = await dados.json();
    if (resposta['status']) {
        var infos = resposta["dados"]
        var tabela = document.getElementById("tab_clientes")
        tabela.innerHTML = ""
        infos.forEach(e => {
            tabela.innerHTML += '<tr>'+
                                    `<td>${e.cpf}</td>`+
                                    `<td>${e.nome}</td>`+
                                    `<td>${e.nascimento}</td>`+
                                    `<td>${e.celular}</td>`+
                                    `<td>${e.ocupacao}</td>`+
                                    `<td>${e.cep}</td>`+
                                    `<td>${e.energia}</td>`+
                                    `<td>${e.valor}</td>`+
                                    `<td>${e.parcelas}</td>`+
                                '</tr>'

        });
    } else {
        console.log(resposta["msg"])
    }
}

$(document).ready(function(){
    listarClientes()
})
