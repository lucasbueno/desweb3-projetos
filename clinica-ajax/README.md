# Clínica — PHP, MySQL e AJAX

Aplicação didática de cadastro de médicos e pacientes. O PHP conecta ao MySQL e cria o banco e as tabelas necessários. Os cadastros são enviados por formulários `POST`; adicionalmente, o JavaScript faz uma requisição AJAX para carregar os CRMs dos médicos no formulário de pacientes. A tabela de pacientes referencia a tabela de médicos pelo CRM.

## Arquivos principais

| Arquivo | Descrição |
| --- | --- |
| `index.php` | Exibe os formulários, inicializa o banco e processa os cadastros. |
| `manipula-ajax.js` | Busca os médicos disponíveis e preenche o seletor de CRM. |
| `busca-medicos.inc.php` | Consulta os CRMs e os retorna para a requisição AJAX. |
| `cadastrar-medico.inc.php` | Insere um médico no banco. |
| `cadastrar-paciente.inc.php` | Insere um paciente e associa seu médico responsável. |
| `dados-conexao.inc.php` | Define servidor, usuário, senha, banco e nomes das tabelas. |
| `conectar.inc.php`, `abrir-banco.inc.php`, `definir-utf8.inc.php`, `desconectar.inc.php` | Gerenciam a conexão e a seleção do banco. |
| `criar-banco.inc.php`, `criar-tabelas.inc.php` | Criam o banco e as tabelas, incluindo a chave estrangeira. |
| `formata-banco.css` | Estilos dos formulários e das mensagens. |

## Como executar

É necessário ter PHP com a extensão `mysqli`, um servidor web compatível com PHP e MySQL ou MariaDB. Configure as credenciais e nomes em `dados-conexao.inc.php` para corresponder ao seu ambiente; os valores atuais são `localhost`, usuário `root` sem senha e banco `CTII_clinica`.

Sirva esta pasta pelo servidor PHP/Apache configurado e acesse `index.php`. O script cria o banco e as tabelas durante o carregamento, desde que o usuário do MySQL tenha permissão para isso.

> Este código é um exemplo de sala de aula. As credenciais padrão e a ausência de controles próprios de uma aplicação de produção não devem ser usadas em um servidor público.
