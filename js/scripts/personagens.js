  // Seleciona os botões de soma e subtração para cada atributo
  const btnSomaForca = document.getElementById('somaForca');
  const btnSubtraiForca = document.getElementById('subtraiForca');
  const btnSomaDestreza = document.getElementById('somaDestreza');
  const btnSubtraiDestreza = document.getElementById('subtraiDestreza');
  const btnSomaPercepcao = document.getElementById('somaPercepcao');
  const btnSubtraiPercepcao = document.getElementById('subtraiPercepcao');
  const btnSomaCarisma = document.getElementById('somaCarisma');
  const btnSubtraiCarisma = document.getElementById('subtraiCarisma');
  const btnSomaInteligencia = document.getElementById('somaInteligencia');
  const btnSubtraiInteligencia = document.getElementById('subtraiInteligencia');
  const personagem = new Personagem(); // Instancia um novo Personagem
  atualizarValores();

  // Função para atualizar os valores exibidos na página
  function atualizarValores() {
      // Atualiza os valores dos spans com os valores dos atributos do personagem
      document.getElementById('spanForca').textContent = personagem.atributos.forca.valor;
      document.getElementById('spanDestreza').textContent = personagem.atributos.destreza.valor;
      document.getElementById('spanPercepcao').textContent = personagem.atributos.percepcao.valor;
      document.getElementById('spanCarisma').textContent = personagem.atributos.carisma.valor;
      document.getElementById('spanInteligencia').textContent = personagem.atributos.inteligencia.valor;
      document.getElementById('spanPontosNivel').textContent = personagem.calcularPontosNivel(); // Calcula os pontos do nível
      document.getElementById('spanPontosRestantes').textContent = personagem.pontoAtributos; // Obtém os pontos restantes do personagem
  }

  function handleNivelChange() {
      // Seleciona todos os botões de nível
      const radioButtons = document.querySelectorAll('input[name="nivel"]');

      // Percorre todos os botões de nível
      radioButtons.forEach(function (button) {
          // Verifica se o botão está selecionado
          if (button.checked) {
              // Atualiza o nível do personagem
              personagem.setNivel(button.value);
              personagem.resetarAtributos();

              // Atualiza os valores na página
              atualizarValores();
          }
      });
  }

  const radioButtons = document.querySelectorAll('input[name="nivel"]');
  radioButtons.forEach(function (button) {
      button.addEventListener('change', handleNivelChange);
  });

  // Adiciona eventos de clique aos botões de soma e subtração
  btnSomaForca.addEventListener('click', function () {
      personagem.aumentarPonto('forca');
      atualizarValores();
  });

  btnSubtraiForca.addEventListener('click', function () {
      personagem.diminuirPonto('forca');
      atualizarValores();
  });

  btnSomaDestreza.addEventListener('click', function () {
      personagem.aumentarPonto('destreza');
      atualizarValores();
  });

  btnSubtraiDestreza.addEventListener('click', function () {
      personagem.diminuirPonto('destreza');
      atualizarValores();
  });

  btnSomaPercepcao.addEventListener('click', function () {
      personagem.aumentarPonto('percepcao');
      atualizarValores();
  });

  btnSubtraiPercepcao.addEventListener('click', function () {
      personagem.diminuirPonto('percepcao');
      atualizarValores();
  });

  btnSomaCarisma.addEventListener('click', function () {
      personagem.aumentarPonto('carisma');
      atualizarValores();
  });

  btnSubtraiCarisma.addEventListener('click', function () {
      personagem.diminuirPonto('carisma');
      atualizarValores();
  });

  btnSomaInteligencia.addEventListener('click', function () {
      personagem.aumentarPonto('inteligencia');
      atualizarValores();
  });

  btnSubtraiInteligencia.addEventListener('click', function () {
      personagem.diminuirPonto('inteligencia');
      atualizarValores();
  });

  // Evento de submissão do formulário
  document.getElementById('formularioPersonagem').addEventListener('submit', function (event) {
      event.preventDefault(); // Impede o envio do formulário padrão

      // Obtém os valores dos campos do formulário
      var nome = document.getElementById('nome').value;
      var alinhamento = document.getElementById('alinhamento').value;

      personagem.setNome(nome);
      personagem.setAlinhamento(alinhamento);

      // Insere o novo personagem na lista
      inserirPersonagem(personagem);

      // Limpa os campos do formulário
      document.getElementById('nome').value = '';
      document.getElementById('alinhamento').value = '';

      // Feedback ao usuário (opcional)
      alert('Personagem criado com sucesso!');
  });

  // Listar personagens após o carregamento completo da página
  listarPersonagens();