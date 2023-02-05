<?php

include "./conexao.php";

$cpf = $_POST["cpf"];
$nome = $_POST["nome"];
$nascimento = $_POST["nascimento"];
$celular = $_POST["celular"];
$ocupacao = $_POST["ocupacao"];
$cep = $_POST["cep"];
$energia = $_POST["energia"];
$valor = $_POST["valor"];
$parcelas = $_POST["parcelas"];

if($conn->connect_error){
    echo "$conn->connect_error";
    die("Connection Failed : ". $conn->connect_error);
} else {
    $stmt = $conn->prepare("insert into clientes(cpf, nome, nascimento, celular, ocupacao, cep, energia, valor, parcelas) values(?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssssss", $cpf, $nome, $nascimento, $celular, $ocupacao, $cep, $energia, $valor, $parcelas);
    $execval = $stmt->execute();
    header("Location: https://api.whatsapp.com/send?phone=555192086700&text=Oi,%20Eu sou o(a) {$nome}, fiz uma simulação pelo site e estou aguardando o resultado!");
    $stmt->close();
    $conn->close();
}
