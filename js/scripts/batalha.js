// Supondo que você tenha uma função preencherSelect
preencherSelect('personagem1', 'cardPersonagem1');
preencherSelect('personagem2', 'cardPersonagem2');

// Adiciona um evento de clique ao botão
document.getElementById('botaoBatalha').addEventListener('click', function () {
  let atributoAliadoElemento = document.getElementById('atributoAliado');
  let atributoInimigoElemento = document.getElementById('atributoInimigo');
  let resultadoElemento = document.getElementById('resultado');
  let personagemSelecionado1 = document.getElementById('personagem1').value;
  let personagemSelecionado2 = document.getElementById('personagem2').value;

  // Recupera os dados do personagem armazenados no localStorage
  let personagens = JSON.parse(localStorage.getItem('personagens')) || [];

  // Encontra os personagens selecionados
  let aliadoArmazenado = personagens.find(personagem => personagem.nome === personagemSelecionado1);
  let inimigoArmazenado = personagens.find(personagem => personagem.nome === personagemSelecionado2);

  if (!aliadoArmazenado || !inimigoArmazenado) {
    resultadoElemento.textContent = 'Personagem(s) não encontrado(s).';
    return;
  }

  // Cria a instância de Personagem
  let aliado = new Personagem();
  aliado.preencher(aliadoArmazenado);  // Preenche com os dados do personagem armazenado

  let inimigo = new Personagem();
  inimigo.preencher(inimigoArmazenado);  // Preenche com os dados do personagem armazenado

  let atributoSelecionado = document.getElementById('atributo').value;
  let dado = aliado.selecionarDado(atributoSelecionado);

  let action = new Action(dado, atributoSelecionado, aliado, inimigo);

  let resultado = action.batalha();

  atributoAliadoElemento.textContent = ("+" + aliado.atributos[atributoSelecionado])
  atributoInimigoElemento.textContent = ("+" + inimigo.atributos[atributoSelecionado])

  // Verificando se o resultado retornado tem o formato esperado
  if (Array.isArray(resultado) && resultado.length >= 4) {
    animarDado('dadoAliado', 'resultado', resultado[1], resultado[3])
    animarDado('dadoInimigo', 'resultado', resultado[2], resultado[3])
  } else {
    resultadoElemento.textContent = 'Erro na batalha. Resultado inválido.';
  }

});
