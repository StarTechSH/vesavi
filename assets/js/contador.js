$(document).ready(function () {
    localStorage.setItem("count", "12890")
    var acre = [1, 2, 3]
    var pe = Math.floor(Math.random() * acre.length);

    setTimeout(() => {
        let cont = localStorage.getItem("count")
    }, 2000);

    setInterval(() => {
        let qtd = localStorage.getItem("count")
        let nqtd = parseInt(qtd) + parseInt(pe)
        $("#qtd").text(nqtd)
        localStorage.setItem("count", nqtd)
    }, 30000);

})
