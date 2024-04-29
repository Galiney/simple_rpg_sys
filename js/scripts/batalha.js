document.addEventListener('DOMContentLoaded', function () {
    preencherSelect('personagem1', 'cardPersonagem1');
    preencherSelect('personagem2', 'cardPersonagem2');

    // Adiciona um evento de clique ao botão
    document.getElementById('botaoBatalha').addEventListener('click', function () {
        let dadoAliadoElemento = document.getElementById('dadoAliado');
        let dadoInimigoElemento = document.getElementById('dadoInimigo');
        let resultadoElemento = document.getElementById('resultado');
        let personagemSelecionado1 = document.getElementById('personagem1').value;
        let personagemSelecionado2 = document.getElementById('personagem2').value;

        let personagens = JSON.parse(localStorage.getItem('personagens')) || [];

        let aliadoArmazenado = personagens.find(personagem => personagem.nome === personagemSelecionado1);
        let inimigoArmazenado = personagens.find(personagem => personagem.nome === personagemSelecionado2);

        let aliado = new Personagem(aliadoArmazenado.nome, aliadoArmazenado.nivel, aliadoArmazenado.alinhamento);
        let inimigo = new Personagem(inimigoArmazenado.nome, inimigoArmazenado.nivel, inimigoArmazenado.alinhamento);


        let atributoSelecionado = document.getElementById('atributo').value;
        let dado = aliado.selecionarDado(atributoSelecionado);

        let action = new Action(dado, atributoSelecionado, aliado, inimigo);

        let resultado = action.batalha();

        dadoAliadoElemento.textContent = resultado[2];
        dadoInimigoElemento.textContent = resultado[3];
        resultadoElemento.textContent = resultado[1];

    });
});
