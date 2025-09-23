<?php
    $medico = $conexao->escape_string(trim($_POST["nome-medico"]));
    $crm = $conexao->escape_string(trim($_POST["crm"]));

    $sql = "INSERT $nomeDaTabela1 VALUES (
        '$crm',
        '$medico')";
    
    $conexao->query($sql) or exit($conexao->error);

    echo "<p> Médico cadastrado com sucesso! </p>";
?>
