<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="utf-8">
    <title>Fundamentos do PHP com MySQL - comunicação assíncrona com AJAX e JavaScript</title>
    <link rel="stylesheet" href="formata-banco.css">
</head>

<body>
    <h1> PHP + MySQL + AJAX + JavaScript </h1>
    <form action="index.php" method="post">
        <fieldset>
            <legend> Módulo de cadastro de médicos </legend>
            <label class="alinha"> Nome: </label>
            <input type="text" name="nome-medico" autofocus placeholder="Forneça o nome do médico"> <br>
            <label class="alinha"> CRM: </label>
            <input type="text" name="crm"> <br>
            <button name="cadastrar-medico" id="cadastrar-medico"> Cadastrar médico </button>
        </fieldset>

        <fieldset id="cadastro-pacientes">
            <legend> Módulo de cadastro de pacientes </legend>
            <label class="alinha"> Paciente: </label>
            <input type="text" name="nome-paciente" placeholder="Forneça o nome do paciente"> <br>
            <label class="alinha"> Data da internação: </label>
            <input type="date" name="data-internacao"> <br>
            
            <label class="alinha"> CRM do médico responsável: </label>
            <select name="crm-atendimento" id="select-medicos"></select> <br> <br>
            
            <button name="cadastrar-paciente"> Cadastrar paciente </button>
        </fieldset>
    </form>

    <?php
        //aqui, as includes regulares de conexão do PHP com o banco de dados
        require "dados-conexao.inc.php";
        require "conectar.inc.php";
        require "criar-banco.inc.php";
        require "abrir-banco.inc.php";
        require "definir-utf8.inc.php";
        
        //atenção especial a include abaixo, que usa o CRM como chave estrangeira na tabela pacientes
        require "criar-tabelas.inc.php";

        if(isset($_POST['cadastrar-medico'])) {
            //comunicação síncrona normal, o AJAX não aparece aqui
            require "cadastrar-medico.inc.php";
        }

        if(isset($_POST['cadastrar-paciente'])) {
            //comunicação síncrona regular, o AJAX não aparece aqui
            require "cadastrar-paciente.inc.php";
        }

        require "desconectar.inc.php";
    ?>

    <script src="manipula-ajax.js"></script>
</body>
</html>
