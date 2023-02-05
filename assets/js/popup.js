import { nomes } from "./nomes.js"

$(document).ready(function () {

    setInterval(() => {
        var pe = Math.floor(Math.random() * nomes.length);
        iziToast.info({
            id: "info",
            title: nomes[pe],
            message: "Está confirmando sua documentacao",
            position: "topLeft"
        })
    }, 900000);

    setInterval(() => {
        var pe = Math.floor(Math.random() * nomes.length);
        iziToast.success({
            id: "success",
            title: nomes[pe],
            message: "Teve seu empréstimo aprovado!",
            position: "topLeft"
           })
    }, 300000);
    
})