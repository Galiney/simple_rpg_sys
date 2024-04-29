class Personagem {
    constructor(nome = "Desconhecido", nivel = 1, alinhamento = "Deconhecido") {
        this.nome = nome;
        this.nivel = nivel;
        this.alinhamento = alinhamento;
        this.pesoNiveis = [24, 10, 10, 8, 8, 8, 8, 8, 8, 8]; //Quantidade de pontos por nivel.
        this.pontoAtributos = this.calcularPontos(); //Quantidade de pontos para distribuir nos atributos.
        this.experiencia;
        this.pesoExperiencia = [50, 100, 150, 200, 250, 300, 350, 400, 450]; //Quantidade necessaria para subir de nivel.
        this.dropExperencia = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]; //Quantidade dropada quando derrotado.
        this.atributos = {
            "forca": { "valor": 0, "peso": 5, "dado": 4, "valorMaximo": 20 },
            "destreza": { "valor": 0, "peso": 4, "dado": 6, "valorMaximo": 25 },
            "percepcao": { "valor": 0, "peso": 3, "dado": 8, "valorMaximo": 33 },
            "carisma": { "valor": 0, "peso": 2, "dado": 10, "valorMaximo": 50 },
            "inteligencia": { "valor": 0, "peso": 1, "dado": 12, "valorMaximo": 100 },
            "sorte": { "valor": 0, "peso": 0, "dado": 20 },
        }
    }

    selecionarDado(atributo) {
        if (atributo in this.atributos) {
            return this.atributos[atributo].dado; // Retorna o valor do dado correspondente ao atributo
        } else {
            console.error("Atributo inválido:", atributo); // Se o atributo não existir, exibe uma mensagem de erro
            return null; // Retorna null se o atributo for inválido
        }
    }

    calcularPontos() {
        let pontos = 0;
        for (let i = 0; i < this.nivel; i++) {
            pontos += this.pesoNiveis[i];
        }
        return pontos;
    }

    aumentarPonto(atributo) {
        if (this.pontoAtributos < this.atributos[atributo].peso) {
            return
        }
        this.pontoAtributos -= this.atributos[atributo].peso;
        this.atributos[atributo].valor++;
    }

    subirNivel() {
        this.nivel++;
        var i = this.nivel;
        this.pontoAtributos += this.pesoNiveis[i - 1];
    }
};