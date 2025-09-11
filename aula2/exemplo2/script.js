// Primeiro, pegamos a referência do botão e do container do nosso HTML
const botao = document.getElementById('botao-carregar');
const container = document.getElementById('conteudo-ajax');

// Adicionamos um "ouvinte de evento" que irá disparar uma função quando o botão for clicado
botao.addEventListener('click', function() {

    // 1. Criar o objeto XMLHttpRequest (o objeto AJAX)
    const ajax = new XMLHttpRequest();

    // 2. Abrir a conexão, especificando o método (GET) e o arquivo a ser buscado
    // 'true' no final indica que a requisição será assíncrona.
    ajax.open('GET', 'conteudo.txt', true);

    // 3. Definir o que acontece quando a requisição for completada e a resposta chegar
    // Usamos o evento 'onload', que é disparado quando a resposta é recebida com sucesso.
    ajax.onload = function() {
        // Verificamos se o status da requisição é 200, que significa "OK" (sucesso)
        if (ajax.status === 200) {
            // Se deu tudo certo, colocamos a resposta (em formato de texto) dentro da nossa div [cite: 365]
            container.innerHTML = ajax.responseText;
        } else {
            // Se ocorreu algum erro, informamos no container
            container.innerHTML = 'Ocorreu um erro ao carregar o arquivo.';
        }
    };

    // 4. Enviar a requisição ao servidor
    // Como estamos apenas buscando dados (GET), enviamos null.
    ajax.send(null);
});