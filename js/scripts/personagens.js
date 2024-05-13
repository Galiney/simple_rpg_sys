document.addEventListener('DOMContentLoaded', function () {
  const personagem = new Personagem(); // Instancia um novo Personagem
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

  // Evento de submissão do formulário
  document.getElementById('formularioPersonagem').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const alinhamento = document.getElementById('alinhamento').value;

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

  // Funções para manipular o nível do personagem
  function handleNivelChange(event) {
    const nivelSelecionado = event.target.value;
    personagem.setNivel(nivelSelecionado);
    personagem.resetarAtributos();
    atualizarValores();
  }

  const radioButtons = document.querySelectorAll('input[name="nivel"]');
  radioButtons.forEach(function (button) {
    button.addEventListener('change', handleNivelChange);
  });

  // Funções para manipular os pontos de atributo
  function handleAtributoChange(atributo, operacao) {
    if (operacao === 'aumentar') {
      personagem.aumentarPonto(atributo);
    } else if (operacao === 'diminuir') {
      personagem.diminuirPonto(atributo);
    }
    atualizarValores();
  }

  document.getElementById('somaForca').addEventListener('click', function () {
    handleAtributoChange('forca', 'aumentar');
  });

  document.getElementById('subtraiForca').addEventListener('click', function () {
    handleAtributoChange('forca', 'diminuir');
  });

  document.getElementById('somaDestreza').addEventListener('click', function () {
    handleAtributoChange('destreza', 'aumentar');
  });

  document.getElementById('subtraiDestreza').addEventListener('click', function () {
    handleAtributoChange('destreza', 'diminuir');
  });

  document.getElementById('somaPercepcao').addEventListener('click', function () {
    handleAtributoChange('percepcao', 'aumentar');
  });

  document.getElementById('subtraiPercepcao').addEventListener('click', function () {
    handleAtributoChange('percepcao', 'diminuir');
  });

  document.getElementById('somaCarisma').addEventListener('click', function () {
    handleAtributoChange('carisma', 'aumentar');
  });

  document.getElementById('subtraiCarisma').addEventListener('click', function () {
    handleAtributoChange('carisma', 'diminuir');
  });

  document.getElementById('somaInteligencia').addEventListener('click', function () {
    handleAtributoChange('inteligencia', 'aumentar');
  });

  document.getElementById('subtraiInteligencia').addEventListener('click', function () {
    handleAtributoChange('inteligencia', 'diminuir');
  });
});
