const PESO_NIVEIS = [24, 10, 10, 8, 8, 8, 8, 8, 8, 8]; //Quantidade de pontos por nivel.
const PESO_EXPERIENCIA = [50, 100, 150, 200, 250, 300, 350, 400, 450]; //Quantidade necessaria para subir de nivel.
const DROP_EXPERIENCIA = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]; //Quantidade dropada quando derrotado.
const MEDIDAS_ATRIBUTOS = {
    "forca": { "peso": 5, "dado": 4, "valorMaximo": 20 },
    "destreza": { "peso": 4, "dado": 6, "valorMaximo": 25 },
    "percepcao": { "peso": 3, "dado": 8, "valorMaximo": 33 },
    "carisma": { "peso": 2, "dado": 10, "valorMaximo": 50 },
    "inteligencia": { "peso": 1, "dado": 12, "valorMaximo": 100 },
    "sorte": { "peso": 0, "dado": 20, "valorMaximo": Infinity },
}


class Personagem {
    constructor(nome = "Desconhecido", nivel = 1, alinhamento = "Desconhecido") {
        this.nome = nome;
        this.nivel = nivel;
        this.alinhamento = alinhamento;
        this.atributos = { "forca": 0, "destreza": 0, "percepcao": 0, "carisma": 0, "inteligencia": 0 };
        this.experiencia = 0;
        this.pontoAtributos = this.calcularPontos(); // Calcular pontos no momento da criação
    }

    preencher(dados) {
        this.nome = dados.nome || this.nome;
        this.nivel = dados.nivel || this.nivel;
        this.alinhamento = dados.alinhamento || this.alinhamento;
        this.atributos = dados.atributos || this.atributos;
        this.experiencia = dados.experiencia || this.experiencia;
        this.pontoAtributos = this.calcularPontos(); // Recalcula os pontos com base nos atributos
    }

    selecionarDado(atributo) {
        if (atributo in MEDIDAS_ATRIBUTOS) {
            return MEDIDAS_ATRIBUTOS[atributo].dado;
        } else {
            console.error("Atributo inválido:", atributo);
            return null;
        }
    }

    calcularPontos() {
        let pontosAtributos = 0;

        for (const atributo in MEDIDAS_ATRIBUTOS) {
            if (typeof this.atributos[atributo] === 'number' && !isNaN(this.atributos[atributo])) {
                pontosAtributos += this.atributos[atributo] * MEDIDAS_ATRIBUTOS[atributo].peso;
            }
        }

        return this.calcularPontosNivel() - pontosAtributos;
    }

    calcularPontosNivel() {
        let pontos = 0;
        for (let i = 0; i < this.nivel; i++) {
            pontos += PESO_NIVEIS[i];
        }
        return pontos;
    }

    resetarAtributos() {
        Object.keys(this.atributos).forEach(atributo => {
            this.atributos[atributo] = 0;
        });
        this.pontoAtributos = this.calcularPontos();
    }

    aumentarPonto(atributo) {
        if (this.pontoAtributos < MEDIDAS_ATRIBUTOS[atributo].peso) {
            console.warn("Não possui pontos suficientes para aumentar o atributo.");
            return;
        }
        if (this.atributos[atributo] >= MEDIDAS_ATRIBUTOS[atributo].valorMaximo) {
            console.warn("O atributo já atingiu o valor máximo.");
            return;
        }
        this.pontoAtributos -= MEDIDAS_ATRIBUTOS[atributo].peso;
        this.atributos[atributo]++;
    }

    diminuirPonto(atributo) {
        if (this.atributos[atributo] <= 0) {
            console.warn("O atributo já atingiu o valor mínimo.");
            return;
        }
        this.pontoAtributos += MEDIDAS_ATRIBUTOS[atributo].peso;
        this.atributos[atributo]--;
    }

    subirNivel() {
        if (this.nivel < 10) {
            this.nivel++;
            this.pontoAtributos += PESO_NIVEIS[this.nivel - 1];
        }
    }

    setNome(nome) {
        this.nome = nome;
    }

    setAlinhamento(alinhamento) {
        this.alinhamento = alinhamento;
    }

    setNivel(nivel) {
        if (nivel > 0 && nivel <= 10) {
            this.nivel = nivel;
            this.resetarAtributos();
        } else {
            console.error("Nível inválido. O nível deve estar entre 1 e 10.");
        }
    }
}