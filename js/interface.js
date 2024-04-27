function inserirPersonagem(personagem) {
    let personagens = JSON.parse(localStorage.getItem('personagens')) || []; //pega ou cria a lista de personagens do localstorege
    personagens.push(personagem); //insere personagem no objeto criado
    localStorage.setItem('personagens', JSON.stringify(personagens)); //transforma em json novamente
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

function preencherSelect() {
    let personagens = JSON.parse(localStorage.getItem('personagens')) || [];

    let select = document.getElementById('personagem');
    select.innerHTML = ''; // Limpa as opções antes de preencher

    personagens.forEach(personagem => {
        let option = document.createElement('option');
        option.text = personagem.nome; // Use o nome do personagem como texto da opção
        option.value = personagem.nome; // Você pode definir outro valor se necessário
        select.add(option);
    });
}

function deletarPersonagem(index) {
    // Remove o personagem do localStorage
    let personagens = JSON.parse(localStorage.getItem('personagens')) || [];
    personagens.splice(index, 1);
    localStorage.setItem('personagens', JSON.stringify(personagens));

    // Atualiza a lista de personagens
    listarPersonagens();
}