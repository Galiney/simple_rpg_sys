function inserirPersonagem(personagem) {
  if (!personagem || !personagem.nome || !personagem.nivel || !personagem.atributos) {
    console.error('Personagem inválido. Certifique-se de que ele possui nome, nível e atributos.');
    return;
  }

  let personagens = JSON.parse(localStorage.getItem('personagens')) || [];
  console.log('Adicionando personagem:', personagem);
  personagens.push(personagem);
  localStorage.setItem('personagens', JSON.stringify(personagens));

  console.log('Personagem adicionado com sucesso.');
  listarPersonagens();
}

function deletarPersonagem(index) {
  // Remove o personagem do localStorage
  let personagens = JSON.parse(localStorage.getItem('personagens')) || [];
  console.log(`Removendo personagem no índice: ${index}`);
  personagens.splice(index, 1);
  localStorage.setItem('personagens', JSON.stringify(personagens));

  console.log('Personagem removido com sucesso.');
  // Atualiza a lista de personagens
  listarPersonagens();
}

function listarPersonagens() {
  let listContainer = document.getElementById('personagens-list');
  if (!listContainer) {
    console.error('Elemento com ID "personagens-list" não encontrado.');
    return;
  }

  let personagens = JSON.parse(localStorage.getItem('personagens')) || [];
  console.log(`Listando ${personagens.length} personagens no total.`);
  listContainer.innerHTML = ''; // Limpa a lista

  personagens.forEach((personagem, index) => {
    let listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    listItem.innerHTML = `
          <span>Nome: ${personagem.nome}, Nível: ${personagem.nivel}, Alinhamento: ${personagem.alinhamento}</span>
          <button class="btn btn-danger btn-sm" onclick="deletarPersonagem(${index})">Excluir</button>`;
    listContainer.appendChild(listItem);
  });
}

function preencherSelect(idSelect, idCard) {
  let select = document.getElementById(idSelect);
  if (!select) {
    console.error(`Elemento com ID "${idSelect}" não encontrado.`);
    return;
  }

  let personagens = JSON.parse(localStorage.getItem('personagens')) || [];
  console.log('Preenchendo select com personagens:', personagens.map(p => p.nome));
  select.innerHTML = ''; // Limpa as opções

  personagens.forEach(personagem => {
    let option = document.createElement('option');
    option.text = personagem.nome;
    option.value = personagem.nome;
    select.add(option);
  });

  if (idCard) {
    console.log(`Preenchendo card para o personagem "${select.value}"`);
    preencherCardPersonagem(idCard, select.value, personagens);
    select.addEventListener('change', () => {
      console.log(`Personagem selecionado: ${select.value}`);
      preencherCardPersonagem(idCard, select.value, personagens);
    });
  }
}

function preencherCardPersonagem(idCard, nomePersonagem, personagens) {
  let cardTitle = document.querySelector(`#${idCard} .card-title`);
  let cardNivel = document.querySelector(`#${idCard} .card-subtitle`);
  let cardAtributos = document.querySelector(`#${idCard} .card-body`);

  if (!cardTitle || !cardNivel || !cardAtributos) {
    console.error(`Elementos do card com ID "${idCard}" não encontrados.`);
    return;
  }

  console.log(`Buscando personagem: ${nomePersonagem}`);
  let personagemSelecionado = personagens.find(personagem => personagem.nome === nomePersonagem);
  if (personagemSelecionado) {
    console.log('Personagem encontrado:', personagemSelecionado);
    cardTitle.textContent = personagemSelecionado.nome;
    cardNivel.textContent = `Nível ${personagemSelecionado.nivel}`;
    cardAtributos.innerHTML = ''; // Limpa os atributos

    Object.entries(personagemSelecionado.atributos).forEach(([atributo, info]) => {
      let p = document.createElement('p');
      p.classList.add('mb-1');
      p.textContent = `${atributo.charAt(0).toUpperCase() + atributo.slice(1)}: `;
      let span = document.createElement('span');
      span.classList.add('fw-semibold');
      span.textContent = info;
      p.appendChild(span);
      cardAtributos.appendChild(p);
    });
  } else {
    console.warn(`Personagem com nome "${nomePersonagem}" não encontrado.`);
  }
}

function animarDado(dadoId, resultadoId, valorFinal, resultadoFinal) {
  const dado = document.getElementById(dadoId);
  const resultado = document.getElementById(resultadoId);
  const som = new Audio('../../assets/sounds/rolagem.mp3'); // Carrega o som fornecido

  let contador = 0;

  // Função interna para gerar números aleatórios
  function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 20) + 1; // Valores entre 1 e 20
  }

  // Função de animação
  function rolarDado() {
    if (contador < 10) {
      dado.textContent = gerarNumeroAleatorio(); // Mostra um número aleatório
      som.play(); // Toca o som
      contador++;
      setTimeout(rolarDado, 100); // Controla a velocidade da animação
    } else {
      dado.textContent = valorFinal; // Define o valor final
      resultado.textContent = resultadoFinal;
    }
  }

  rolarDado();
}

