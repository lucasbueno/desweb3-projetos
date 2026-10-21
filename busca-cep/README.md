# Busca CEP

Página didática para consultar endereços brasileiros a partir de um CEP. O usuário informa oito dígitos; o JavaScript valida e aplica uma máscara ao valor, consulta a API pública ViaCEP com `fetch` e apresenta os campos do endereço e o JSON recebido. A interface também exibe etapas da requisição e destaca, ao passar o mouse, a correspondência entre alguns campos do endereço e as propriedades do JSON.

## Arquivos

| Arquivo | Descrição |
| --- | --- |
| `busca-cep.html` | Interface, estilos e lógica JavaScript da consulta. |
| `viacep.json` | Exemplo de resposta da ViaCEP para o CEP `88020-300`. |
| `viacep.xml` | A mesma resposta de exemplo no formato XML; não é carregada pela página. |

## Como executar

Na pasta do projeto, inicie um servidor HTTP local:

```bash
python3 -m http.server 8000
```

Abra [http://localhost:8000/busca-cep.html](http://localhost:8000/busca-cep.html). A consulta real depende de conexão com a internet e do serviço ViaCEP. A página usa Tailwind CSS e a fonte Inter por meio de serviços externos.

## Conceitos demonstrados

- Eventos e manipulação do DOM com JavaScript.
- Validação e formatação de entrada.
- Requisição HTTP assíncrona com `fetch` e `async`/`await`.
- Leitura e mapeamento de uma resposta JSON.
- Estados de carregamento e tratamento de falhas de rede e de CEP não encontrado.
