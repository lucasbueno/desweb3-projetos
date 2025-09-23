<?php
    $paciente = $conexao->escape_string(trim($_POST["nome-paciente"]));
    $data = $conexao->escape_string(trim($_POST["data-internacao"]));
    $crmMedico = $conexao->escape_string(trim($_POST['crm-atendimento']));

    $sql = "INSERT $nomeDaTabela2 VALUES (
        null,
        '$paciente',
        '$data',
        '$crmMedico')";

    $conexao->query($sql) or exit($conexao->error);
    
    echo "<p> Paciente cadastrado com sucesso! </p>";
?>
