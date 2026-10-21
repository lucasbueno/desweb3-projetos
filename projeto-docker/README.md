# Projeto Docker — PHP, MySQL e phpMyAdmin

Configuração de ambiente local em contêineres para aplicações PHP com Apache e MySQL. O `Dockerfile` usa PHP 8.2 com Apache, instala as extensões `mysqli`, `pdo` e `pdo_mysql` e habilita o módulo `rewrite`. O `docker-compose.yml` define os serviços web, banco de dados e phpMyAdmin.

## Serviços e portas

| Serviço | Acesso local | Detalhes |
| --- | --- | --- |
| `web` | [http://localhost](http://localhost) | PHP com Apache; a pasta `www/` do host é montada em `/var/www/html`. |
| `db` | `localhost:3306` | MySQL 8; banco inicial `meu_banco`, usuário `root`, senha `root`. |
| `phpmyadmin` | [http://localhost:8080](http://localhost:8080) | Interface de administração conectada ao serviço `db`. |

O volume nomeado `db_data` mantém os dados do MySQL entre reinicializações dos contêineres.

## Como executar

1. Instale e inicie o Docker com o plugin Docker Compose.
2. Coloque os arquivos da aplicação PHP em `www/`, que é o diretório publicado pelo Apache.
3. Na pasta deste projeto, execute:

   ```bash
   docker compose up --build
   ```

4. Acesse a aplicação em [http://localhost](http://localhost) e, se necessário, o phpMyAdmin em [http://localhost:8080](http://localhost:8080).

Para encerrar os serviços, use `Ctrl+C` e depois `docker compose down`. Esse comando mantém o volume `db_data`; para remover também os dados persistidos, seria necessário solicitar a remoção explícita do volume.

> As credenciais configuradas são apenas para desenvolvimento local. Não as use em ambientes expostos ou de produção. Dentro da rede do Compose, aplicações PHP devem conectar ao MySQL pelo nome de serviço `db`, não por `localhost`.
