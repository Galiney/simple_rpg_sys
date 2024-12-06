// Supondo que você tenha uma função preencherSelect
preencherSelect('personagem', 'cardPersonagem');

// Função inicializar ajustada
function inicializar() {
  let nivel = parseInt(document.getElementById('nivelDesafio').value); // Corrigido para pegar o valor correto
  let atributoSelecionado = document.getElementById('atributo').value;
  let nivelEscolhidoElement = document.getElementById('nivelEscolhido');
  let dificuldadeElement = document.getElementById('dificuldade');
  let valorDesafioElemento = document.getElementById('valorDesafio');

  nivelEscolhidoElement.textContent = nivel;
  let personagem = new Personagem();

  // Cria uma instância de Action apenas para calcular a dificuldade
  let actionAux = new Action(0, atributoSelecionado, personagem, personagem, nivel);
  let dificuldadeCalculada = actionAux.getDificuldade();

  dificuldadeElement.textContent = dificuldadeCalculada;

  valorDesafioElemento.textContent = "+" + actionAux.getDificuldade();

  // Recupera os dados do personagem armazenados no localStorage
  let personagens = JSON.parse(localStorage.getItem('personagens')) || [];
  let personagemSelecionado = document.getElementById('personagem').value;

  let personagemArmazenado = personagens.find(personagem => personagem.nome === personagemSelecionado);

  if (!personagemArmazenado) {
    return;
  }
  personagem.preencher(personagemArmazenado);
}

// Inicializa os valores
inicializar();

// Adiciona evento de mudança ao selecionar o nível de desafio
document.getElementById('nivelDesafio').addEventListener('change', inicializar);

// Adiciona evento de clique ao botão de desafio
document.getElementById('botaoDesafio').addEventListener('click', function () {
  let atributoAliadoElemento = document.getElementById('atributoAliado');
  let valorDesafioElemento = document.getElementById('valorDesafio');
  let resultadoElemento = document.getElementById('resultado');
  
  let personagemSelecionado = document.getElementById('personagem').value;
  let nivelDesafio = parseInt(document.getElementById('nivelDesafio').value); 
  let atributoSelecionado = document.getElementById('atributo').value;

  // Recupera os dados do personagem armazenados no localStorage
  let personagens = JSON.parse(localStorage.getItem('personagens')) || [];
  let personagemArmazenado = personagens.find(personagem => personagem.nome === personagemSelecionado);

  if (!personagemArmazenado) {
    resultadoElemento.textContent = 'Personagem não encontrado.';
    return;
  }

  // Cria instância de Personagem e preenche com os dados armazenados
  let personagem = new Personagem();
  personagem.preencher(personagemArmazenado);

  // Seleciona o dado com base no atributo
  let dado = personagem.selecionarDado(atributoSelecionado);

  // Cria a instância de Action
  let action = new Action(dado, atributoSelecionado, personagem, personagem, nivelDesafio);

  // Realiza o desafio e obtém o resultado
  let resultado = action.desafio();

  //return [resto, this.dadoAliado, this.dadoInimigo, resto > 0 ? "Passou" : resto < 0 ? "Perdeu" : "Neutro", this.somaAliado, this.somaInimigo];
  if (Array.isArray(resultado) && resultado.length >= 4) {
    animarDado('dadoAliado', 'resultado', resultado[1], resultado[3])
    animarDado('dadoDesafio', 'resultado', resultado[2], resultado[3])
    atributoAliadoElemento.textContent = "+" + personagem.atributos[atributoSelecionado];
    valorDesafioElemento.textContent = "+" + action.getDificuldade();
  } else {
    resultadoElemento.textContent = 'Erro no desafio. Resultado inválido.';
  }
});
