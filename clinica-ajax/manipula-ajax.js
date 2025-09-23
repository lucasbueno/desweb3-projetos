function recebeMedicos() {
    //acessar o fieldset dos pacientes
    let objFieldset = document.getElementById("cadastro-pacientes");
    
    //desativar o fieldset logo que a página é carregada no navegador.
    objFieldset.disabled = true;

    //acessar o select do CRM dos médicos
    let objSelect = document.getElementById("select-medicos");

    //criar o objeto ajax
    let ajax = new XMLHttpRequest();

    //associar o objeto Ajax com um arquivo em PHP no servidor.
    ajax.open("GET", "busca-medicos.inc.php", true);

    //enviar a requisição via Ajax
    ajax.send(null);

    //receber no ajax, os dados retornados pelo código em PHP e colocá-los dentro do select
    ajax.onload = function() {
        //ajax retornou ao navegador. Testamos se a requisição não falhou
        if (ajax.status == 200) {
            //o ajax devolve os CRMs trazidos do PHP e os coloca (como option) dentro do select
            objSelect.innerHTML = ajax.responseText;
            
            //se o que o ajax trouxe do PHP não for zero, ativa o fieldset de cadastro de pacientes
            if (ajax.responseText != "0") {
                objFieldset.disabled = false; //ativa o fieldset
            }
        }
    };
}

//no momento em que a página de cadastro for carregada, disparamos o objeto AJAX
window.addEventListener("load", recebeMedicos);
