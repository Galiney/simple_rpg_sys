  preencherSelect('personagem', 'cardPersonagem');

  // Adiciona um evento de mudança ao selecionar o nível de desafio
  document.getElementById('nivelDesafio').addEventListener('change', function() {
      let nivel = parseInt(this.value);
      let atributoSelecionado = document.getElementById('atributo').value;
      let nivelEscolhidoElement = document.getElementById('nivelEscolhido');
      let dificuldadeElement = document.getElementById('dificuldade');
      
      nivelEscolhidoElement.textContent = nivel;

      // Criar uma instância de Personagem apenas para calcular a dificuldade
      let personagemAux = new Personagem();
      let actionAux = new Action(0, atributoSelecionado, personagemAux, personagemAux, nivel);
      
      let dificuldadeCalculada = actionAux.getDificuldade();
      dificuldadeElement.textContent = dificuldadeCalculada;
  });

  // Adiciona um evento de clique ao botão de desafio
  document.getElementById('botaoDesafio').addEventListener('click', function () {
      let dadoSorteElemento = document.getElementById('dadoSorte');
      let dadoAzarElemento = document.getElementById('dadoAzar');
      let resultadoElemento = document.getElementById('resultado');
      let personagemSelecionado = document.getElementById('personagem').value;
      let nivelDesafio = parseInt(document.getElementById('nivelDesafio').value); // Obtém o valor do nível de desafio

      let personagens = JSON.parse(localStorage.getItem('personagens')) || [];
      let personagemArmazenado = personagens.find(personagem => personagem.nome === personagemSelecionado);
      let personagem = new Personagem(personagemArmazenado.nome, personagemArmazenado.nivel, personagemArmazenado.alinhamento);

      let atributoSelecionado = document.getElementById('atributo').value;
      let dado = personagem.selecionarDado(atributoSelecionado);

      // Criar uma instância de Action com o nível de desafio correto
      let action = new Action(dado, atributoSelecionado, personagem, personagem, nivelDesafio);

      let resultado = action.desafio();

      dadoSorteElemento.textContent = resultado[2];
      dadoAzarElemento.textContent = resultado[3];
      resultadoElemento.textContent = resultado[1];
  });