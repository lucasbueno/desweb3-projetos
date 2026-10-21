# Exemplo 2 — carregamento de JSON com AJAX

Exemplo didático de `XMLHttpRequest` para buscar `dados.json`. Ao clicar em **Carregar Dados**, o JavaScript recebe o conteúdo como texto, converte-o em objeto com `JSON.parse()` e exibe nome, e-mail, curso e situação do usuário.

## Arquivos

| Arquivo | Descrição |
| --- | --- |
| `index.html` | Página com o botão e a área de exibição. |
| `script.js` | Faz a requisição `GET`, interpreta o JSON e monta a saída. |
| `dados.json` | Dados de exemplo apresentados na página. |

## Como executar

Inicie um servidor HTTP nesta pasta, por exemplo:

```bash
python3 -m http.server 8000
```

Depois, acesse [http://localhost:8000](http://localhost:8000). O servidor é necessário para que o navegador permita a requisição ao arquivo JSON.
