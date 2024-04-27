//criar classe log????
function rolarDado(dado) {
    return Math.floor(Math.random() * dado) + 1;
}

function resultado(valor1, valor2) {
    return valor1 - valor2; 
}

function batalha(atributo, personagem1, personagem2) {
    let dado1 = rolarDado(personagem1.atributos[atributo].dado);
    let dado2 = rolarDado(personagem2.atributos[atributo].dado);
    let soma1 = personagem1.atributos[atributo].valor + dado1;
    let soma2 = personagem2.atributos[atributo].valor + dado2;
    let resto = resultado(soma1, soma2); //se negativo vence o responsavel pelo valor1, se positivo o contrario e se zero empate.
    if (resto > 0) {
        return [resto, personagem1.nome, dado1, dado2]
    } else if (resto < 0) {
        return [resto, personagem2.nome, dado1, dado2]
    } else
        return [resto, "Empate", dado1, dado2];
}

function desafio(atributo, personagem, dificuldade) {
    let dadoAtributo = personagem.atributos[atributo].dado; //dizendo qual o dado utilizado no desafio, emprestando a classe do Personagem (mudar isso?)
    let dado1 = rolarDado(personagem.atributos[atributo].dado);
    let dado2 = rolarDado(dadoAtributo);
    let soma1 = (personagem1.atributos[atributo].valor + dado1);
    let soma2 = (dificuldade + dado2);
    let resto = resultado(soma1, soma2);
    if (resto > 0) {
        return [resto, "Passou", dado1, dado2]
    } else if (resto < 0) {
        return [resto, "Perdeu", dado1, dado2]
    } else
        return [resto, "Neutro", dado1, dado2];
}

function sorte() {
    let dado1 = rolarDado(20);
    let dado2 = rolarDado(20);
    let resto = resultado(dado1, dado2) //esquerda sempre é quem rola, direita é a má sorte.
    if (resto > 0) {
        return [resto, "Passou", dado1, dado2]
    } else if (resto < 0) {
        return [resto, "Perdeu", dado1, dado2]
    } else
        return [resto, "Neutro", dado1, dado2];
}

function inserirPersonagem(personagem) {
    let personagens = JSON.parse(localStorage.getItem('personagens')) || [];
    personagens.push(personagem);
    localStorage.setItem('personagens', JSON.stringify(personagens));
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