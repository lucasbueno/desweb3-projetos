// As referências para o botão e o container continuam as mesmas
const botao = document.getElementById('botao-carregar');
const container = document.getElementById('conteudo-ajax');

botao.addEventListener('click', function() {
    const ajax = new XMLHttpRequest();

    // Alteramos o nome do arquivo que queremos buscar para "dados.json"
    ajax.open('GET', 'dados.json', true);

    ajax.onload = function() {
        if (ajax.status === 200) {
            // A resposta (ajax.responseText) ainda é uma STRING, mas agora no formato JSON.
            // Precisamos convertê-la para um objeto JavaScript para poder usar os dados.
            // Para isso, usamos o método JSON.parse()
            const dados = JSON.parse(ajax.responseText);

            // Agora 'dados' é um objeto e podemos acessar suas propriedades (nome, email, etc.)
            // Vamos formatar a saída em HTML para exibir os dados de forma organizada.
            container.innerHTML = `
                <h3>Dados do Usuário:</h3>
                <p><strong>Nome:</strong> ${dados.nome}</p>
                <p><strong>Email:</strong> ${dados.email}</p>
                <p><strong>Curso:</strong> ${dados.curso}</p>
                <p><strong>Status:</strong> ${dados.ativo ? 'Ativo' : 'Inativo'}</p>
            `;
        } else {
            // A mensagem de erro permanece a mesma
            container.innerHTML = 'Ocorreu um erro ao carregar os dados.';
        }
    };

    ajax.send(null);
});