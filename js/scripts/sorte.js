  preencherSelect('personagem', null);

  // Adiciona um evento de clique ao botão
  document.getElementById('botaoSorte').addEventListener('click', function () {
      let dadoSorteElemento = document.getElementById('dadoSorte');
      let dadoAzarElemento = document.getElementById('dadoAzar');
      let resultadoElemento = document.getElementById('resultado');
      let personagemSelecionado = document.getElementById('personagem').value;

      let personagens = JSON.parse(localStorage.getItem('personagens')) || [];

      let personagemArmazenado = personagens.find(personagem => personagem.nome === personagemSelecionado);

      let personagem = new Personagem(personagemArmazenado.nome, personagemArmazenado.nivel, personagemArmazenado.alinhamento);

      let action = new Action(20, "sorte", personagem);

      let resultado = action.sorte();

      resultadoElemento.textContent = resultado[1];
      dadoSorteElemento.textContent = resultado[2];
      dadoAzarElemento.textContent = resultado[3];

  });