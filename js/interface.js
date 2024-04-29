function inserirPersonagem(personagem) {
    let personagens = JSON.parse(localStorage.getItem('personagens')) || []; //pega ou cria a lista de personagens do localstorege
    personagens.push(personagem); //insere personagem no objeto criado
    localStorage.setItem('personagens', JSON.stringify(personagens)); //transforma em json novamente
    listarPersonagens();
}

function deletarPersonagem(index) {
    // Remove o personagem do localStorage
    let personagens = JSON.parse(localStorage.getItem('personagens')) || [];
    personagens.splice(index, 1);
    localStorage.setItem('personagens', JSON.stringify(personagens));

    // Atualiza a lista de personagens
    listarPersonagens();
}

function listarPersonagens() {
    let personagens = JSON.parse(localStorage.getItem('personagens')) || [];
    let listContainer = document.getElementById('personagens-list');
    listContainer.innerHTML = ''; // Limpa a lista antes de adicionar os personagens

    personagens.forEach((personagem, index) => {
        let listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.innerHTML = `<span>Nome: ${personagem.nome}, Nível: ${personagem.nivel}, Alinhamento: ${personagem.alinhamento}</span>
                                          <button class="btn btn-danger btn-sm" onclick="deletarPersonagem(${index})">Excluir</button>`;
        listContainer.appendChild(listItem);
    });
}

function preencherSelect(idSelect, idCard) {
    let personagens = JSON.parse(localStorage.getItem('personagens')) || [];

    let select = document.getElementById(idSelect);

    // Limpa as opções antes de preencher
    select.innerHTML = ''; 

    personagens.forEach(personagem => {
        let option = document.createElement('option');
        option.text = personagem.nome;
        option.value = personagem.nome;
        select.add(option);
    });

    preencherCard(idCard, select.value, personagens);
    // Adiciona um evento de mudança ao seletor
    select.addEventListener('change', () => {
        preencherCard(idCard, select.value, personagens);
    });
}

function preencherCard(idCard, nomePersonagem, personagens) {
    let cardTitle = document.querySelector(`#${idCard} .card-title`);
    let cardNivel = document.querySelector(`#${idCard} .card-subtitle`);
    let cardAtributos = document.querySelector(`#${idCard} .card-body`);

    let personagemSelecionado = personagens.find(personagem => personagem.nome === nomePersonagem);
    if (personagemSelecionado) {
        cardTitle.textContent = personagemSelecionado.nome;
        cardNivel.textContent = `Nível ${personagemSelecionado.nivel}`;

        // Limpa os atributos do card
        cardAtributos.innerHTML = '';

        // Preenche os atributos do personagem no card
        Object.entries(personagemSelecionado.atributos).forEach(([atributo, info]) => {
            let p = document.createElement('p');
            p.classList.add('mb-1');
            p.textContent = `${atributo.charAt(0).toUpperCase() + atributo.slice(1)}: `;
            let span = document.createElement('span');
            span.classList.add('fw-semibold');
            span.textContent = info.valor;
            p.appendChild(span);
            cardAtributos.appendChild(p);
        });
    }
}