let alunoAtual = null;

// ===================================================================
// 1. BUSCANDO DADOS DO SERVIDOR (AJAX - GET)
// ===================================================================
function carregarComAjax() {

    // 1. Criação do objeto AJAX
    let ajax = new XMLHttpRequest();

    // 2. O que fazer quando a resposta retornar do servidor
    ajax.onload = function () {
        // 3. Testa se o status da requisição foi bem-sucedido
        if (ajax.status === 200) {

            // Acessa o texto puro devolvido pelo servidor
            const textoResposta = ajax.responseText;

            // Converte a string JSON em um Objeto JS manipulável
            alunoAtual = JSON.parse(textoResposta);

            // Exibe o JSON cru na tela
            const boxJsonRecebido = document.getElementById('json-recebido');
            boxJsonRecebido.innerText = "// ajax.responseText recebeu:\n" + textoResposta;
            boxJsonRecebido.classList.remove('oculto');

            // Atualiza o visual e libera os campos
            mostrarPerfilAluno();
            habilitarEdicao();
            document.getElementById('btn-carregar').disabled = true;
        } else {
            alert("Erro ao carregar os dados. Código: " + ajax.status);
        }
    };

    // 4. Configuração da requisição (Método, Arquivo, Assíncrono)
    ajax.open('GET', 'dados.json', true);

    // 5. Envio da requisição ao servidor
    ajax.send(null);
}

function mostrarPerfilAluno() {
    const areaResultado = document.getElementById('resultado-perfil');
    const statusMatricula = alunoAtual.matriculado ? '🟢 Ativo' : '🔴 Inativo';

    areaResultado.innerHTML = `
        <h3>👨‍🎓 ${alunoAtual.nome}</h3>
        <p><strong>Nota Atual:</strong> ${alunoAtual.nota}</p>
        <p><strong>Matérias:</strong> ${alunoAtual.materias.join(', ')}</p>
        <p><strong>Status:</strong> ${statusMatricula}</p>
    `;
    areaResultado.classList.remove('oculto');
}

function habilitarEdicao() {
    document.getElementById('novo-nome').value = alunoAtual.nome;
    document.getElementById('nova-nota').value = alunoAtual.nota;
    document.getElementById('novas-materias').value = alunoAtual.materias.join(', ');
    document.getElementById('novo-matriculado').checked = alunoAtual.matriculado;

    document.getElementById('novo-nome').disabled = false;
    document.getElementById('nova-nota').disabled = false;
    document.getElementById('novas-materias').disabled = false;
    document.getElementById('novo-matriculado').disabled = false;
    document.getElementById('btn-enviar').disabled = false;
}

// ===================================================================
// 2. CONVERTENDO PARA JSON E BAIXANDO O NOVO ARQUIVO
// ===================================================================
function salvarEDownload() {
    // 1. Atualiza o objeto JavaScript com as edições feitas em tela
    alunoAtual.nome = document.getElementById('novo-nome').value;
    alunoAtual.nota = Number(document.getElementById('nova-nota').value);
    alunoAtual.materias = document.getElementById('novas-materias').value.split(',').map(m => m.trim());
    alunoAtual.matriculado = document.getElementById('novo-matriculado').checked;

    // 2. Converte o objeto JavaScript de volta para notação JSON
    const jsonParaEnviar = JSON.stringify(alunoAtual);

    // 3. Exibe o resultado na tela de forma didática
    const boxJsonEnviado = document.getElementById('json-enviado');
    boxJsonEnviado.innerText = "// String JSON gerada com sucesso:\n" + jsonParaEnviar;
    boxJsonEnviado.classList.remove('oculto');

    mostrarPerfilAluno();

    // 4. Lógica para forçar o download do arquivo "dados_atualizados.json"
    // Cria um arquivo virtual (Blob) tipado como JSON
    const arquivoVirtual = new Blob([jsonParaEnviar], { type: 'application/json' });

    // Cria um link temporário, simula o clique do usuário e limpa a memória
    const linkDownload = document.createElement('a');
    linkDownload.href = URL.createObjectURL(arquivoVirtual);
    linkDownload.download = 'dados_atualizados.json'; // Nome do novo arquivo
    linkDownload.click();

    URL.revokeObjectURL(linkDownload.href);

    /* Exemplo de código se fossemos enviar para um servidor real (POST)
    const jsonParaEnviar = JSON.stringify(alunoAtual);

    const ajax = new XMLHttpRequest();

    ajax.onload = function () {
        if (ajax.status >= 200 && ajax.status < 300) {
            console.log('JSON enviado com sucesso:', ajax.responseText);
        } else {
            console.error('Erro do servidor:', ajax.status, ajax.responseText);
        }
    };

    ajax.open('POST', '/api/alunos', true);
    ajax.setRequestHeader('Content-Type', 'application/json');
    ajax.send(jsonParaEnviar);*/
}