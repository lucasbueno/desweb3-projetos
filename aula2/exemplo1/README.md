# Exemplo 1 — carregamento de texto com AJAX

Exemplo introdutório de requisição assíncrona com `XMLHttpRequest`. Ao clicar no botão **Carregar Dados**, a página solicita `conteudo.txt` por HTTP e mostra o texto recebido na própria página, sem recarregá-la.

## Arquivos

| Arquivo | Descrição |
| --- | --- |
| `index.html` | Página com o botão e a área em que o texto é exibido. |
| `script.js` | Faz a requisição `GET` e trata a resposta. |
| `conteudo.txt` | Texto carregado pelo exemplo. |

## Como executar

Inicie um servidor HTTP nesta pasta, por exemplo:

```bash
python3 -m http.server 8000
```

Depois, acesse [http://localhost:8000](http://localhost:8000). Não abra o arquivo HTML diretamente com `file://`, pois o navegador pode bloquear a requisição ao arquivo de texto.
