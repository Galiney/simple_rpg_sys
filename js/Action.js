class Action {
    constructor(dado, aliado, inimigo, desafio) {
        this.dadoAmigo = rolarDado(dado);
        this.dadoInimigo = rolarDado(dado);
        this.somaAliado = dadoAmigo + aliado.atributos[atributos].valor;
        this.somaInimigo = dadoInimigo + inimigo.atributos[atributos].valor;
        this.somaDesafio = desafio + dadoInimigo;
    }

    rolarDado(dado) {
        return Math.floor(Math.random() * dado) + 1;
    }

    diferenca(valor1, valor2) {
        return valor1 - valor2;
    }

    resultado(tipo, resto) {
        if (tipo === "batalha") {
            return [resto, resto > 0 ? personagem1.nome : resto < 0 ? personagem2.nome : "Empate"];
        } else {
            return [resto, resto > 0 ? "Passou" : resto < 0 ? "Perdeu" : "Neutro"];
        }
    }

    batalha() {
        let resto = resultado(this.somaAliado, this.somaInimigo); //se negativo vence o responsavel pelo valor1, se positivo o contrario e se zero empate.
        this.resultado("batalha", resto);
    }

    desafio() {
        let resto = resultado(this.somaAliado, this.somaDesafio);
        this.resultado("desafio", resto);
    }

    sorte() {
        let resto = resultado(this.dadoAliado, this.dadoInimigo); //esquerda sempre é quem rola, direita é a má sorte.
        this.resultado("sorte", resto);
    }