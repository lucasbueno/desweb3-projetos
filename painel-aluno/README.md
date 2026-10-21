# Painel do Aluno — AJAX e JSON

Projeto didático desenvolvido para a disciplina de **Desenvolvimento Web III**. A aplicação apresenta, com JavaScript, como consumir um arquivo JSON disponibilizado por um servidor e como transformar dados editados na página em um novo arquivo JSON.

## O que o projeto demonstra

- Fazer uma requisição HTTP `GET` com `XMLHttpRequest` para carregar `dados.json`.
- Converter o texto recebido em um objeto JavaScript com `JSON.parse()`.
- Exibir e editar os dados do aluno na interface.
- Converter o objeto atualizado em uma string JSON com `JSON.stringify()`.
- Criar e baixar um arquivo `dados_atualizados.json` no navegador.

> **Importante:** o botão de envio gera e baixa um arquivo no computador. Ele não envia os dados para um servidor nem altera `dados.json`. Há um exemplo comentado de requisição `POST` em `script.js` para ilustrar como seria a integração com uma API.

## Como executar

Como a aplicação faz uma requisição HTTP para carregar o JSON, abra-a por meio de um servidor local — não diretamente pelo protocolo `file://`.

Uma opção é iniciar o servidor web simples do Python na pasta do projeto:

```bash
python3 -m http.server 8000
```

Depois, acesse [http://localhost:8000](http://localhost:8000) no navegador. Também é possível usar uma extensão de servidor local no editor, como o Live Server do VS Code.

## Como usar

1. Clique em **Buscar Dados via AJAX** para carregar as informações de `dados.json`.
2. Confira o perfil e edite o nome, a nota, as matérias ou o status de matrícula.
3. Clique em **Gerar e Baixar (JSON.stringify)**.
4. Veja a string JSON gerada na página e localize o arquivo `dados_atualizados.json` baixado pelo navegador.

## Estrutura do projeto

| Arquivo | Descrição |
| --- | --- |
| `index.html` | Estrutura da página, controles e áreas de exibição. |
| `script.js` | Requisição AJAX, manipulação dos dados e geração do arquivo JSON. |
| `dados.json` | Dados iniciais do aluno carregados pela aplicação. |
| `style.css` | Estilos da interface. |

## Tecnologias e conceitos

- HTML
- CSS
- JavaScript
- JSON
- `XMLHttpRequest`
- `JSON.parse()` e `JSON.stringify()`
- `Blob` e download de arquivos no navegador
