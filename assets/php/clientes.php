<?php
include "../conexao.php";
$query = "SELECT id, cpf, nome, nascimento, celular, ocupacao, cep, companhia, valor, parcelas FROM clientes";
$resultado = $conn->query($query);
if ($resultado->num_rows > 0) {
    while ($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'cpf' => $row["cpf"],
            'nome' => $row["nome"],
            'nascimento' => $row["nascimento"],
            'celular' => $row["celular"],
            'ocupacao' => $row["ocupacao"],
            'cep' => $row["cep"],
            'companhia' => $row["companhia"],
            'valor' => $row["valor"],
            'parcelas' => $row["parcelas"]
        ];
    }
    $retorna = ['status' => true, 'dados' => $dados];
} else {
    $retorna = ['status' => false, 'msg' => "ERRO"];
}
echo json_encode($retorna);
