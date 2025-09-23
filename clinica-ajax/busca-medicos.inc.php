<?php
    //antes, inserir as includes necessárias à conexão
    require_once "dados-conexao.inc.php";
    require_once "conectar.inc.php";
    require_once "abrir-banco.inc.php";
    require_once "definir-utf8.inc.php";
    
    $sql = "SELECT crm FROM $nomeDaTabela1";
    $resultado = $conexao->query($sql);

    //se o PHP encontrou um CRM ou mais na tabela médicos, colocar o valor de cada CRM dentro da tag <option>
    if($conexao->affected_rows > 0)
    {
        while($registro = $resultado->fetch_array())
        {
            $crm = $registro[0];
            $crm = htmlentities($crm, ENT_QUOTES, "UTF-8");
            echo "<option> $crm </option>";
        }
    }
    else
    {
        //se o PHP não encontrou nenhum CRM, envia o valor zero ao ajax
        echo "0";
    }
?>
