# Aula 2 — exemplos de AJAX

Exemplos didáticos da disciplina de **Desenvolvimento Web III** que demonstram como carregar arquivos locais de forma assíncrona com `XMLHttpRequest`.

## Exemplos

- [exemplo1](./exemplo1/README.md): carrega e exibe o conteúdo de um arquivo de texto.
- [exemplo2](./exemplo2/README.md): carrega um arquivo JSON, interpreta os dados e exibe suas propriedades.

## Como executar

As requisições aos arquivos locais precisam ser feitas por HTTP; abrir os HTML diretamente com `file://` pode impedir o carregamento. Inicie um servidor local nesta pasta:

```bash
python3 -m http.server 8000
```

Abra [http://localhost:8000](http://localhost:8000) e escolha um dos exemplos. Também é possível abrir diretamente `exemplo1/` ou `exemplo2/` pelo servidor ou usar uma extensão de servidor local no editor.
