document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('formularioPersonagem').addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio do formulário padrão

        // Obtém os valores dos campos do formulário
        var nome = document.getElementById('nome').value;
        var alinhamento = document.getElementById('alinhamento').value;
        var radioButtons = document.querySelectorAll('input[name="btnradio"]');
        var nivel

        radioButtons.forEach(function(button) {
            // Verifica o botão selecionado
            if (button.checked) {
                nivel = button.value;
            }
        });

        // Cria um novo personagem
        var novoPersonagem = new Personagem(nome, nivel, alinhamento);

        // Insere o novo personagem na lista
        inserirPersonagem(novoPersonagem);

        // Limpa os campos do formulário
        document.getElementById('nome').value = '';
        document.getElementById('nivel').value = '';
        document.getElementById('alinhamento').value = '';

        // Feedback ao usuário (opcional)
        alert('Personagem criado com sucesso!');
    });

    // Listar personagens após o carregamento completo da página
    listarPersonagens();
});