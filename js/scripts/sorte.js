  preencherSelect('personagem', null);

  // Adiciona um evento de clique ao botão
  document.getElementById('botaoSorte').addEventListener('click', function () {
      let dadoSorteElemento = document.getElementById('dadoSorte');
      let dadoAzarElemento = document.getElementById('dadoAzar');
      let resultadoElemento = document.getElementById('resultado');
      let personagemSelecionado = document.getElementById('personagem').value;

      let personagens = JSON.parse(localStorage.getItem('personagens')) || [];

      let personagemArmazenado = personagens.find(personagem => personagem.nome === personagemSelecionado);

      if (!personagemArmazenado){
        resultadoElemento.textContent = 'personagem não encontrado'
      }

      let personagem = new Personagem(personagemArmazenado.nome, personagemArmazenado.nivel, personagemArmazenado.alinhamento);

      let action = new Action(20, "sorte", personagem);

      let resultado = action.sorte();

      if (Array.isArray(resultado) && resultado.length >= 4) {
        animarDado('dadoSorte', 'resultado', resultado[1], resultado[3])
        animarDado('dadoAzar', 'resultado', resultado[2], resultado[3])
      } else {
        resultadoElemento.textContent = 'Erro na batalha. Resultado inválido.';
      }
  });