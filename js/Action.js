class Action {
    constructor(dado, atributo, aliado, inimigo, desafio) {
        if (!(aliado instanceof Personagem) || !(inimigo instanceof Personagem)) {
            throw new Error('Os parâmetros "aliado" e "inimigo" devem ser instâncias da classe Personagem.');
        }
        this.aliado = aliado;
        this.inimigo = inimigo;
        this.dadoAliado = Math.floor(Math.random() * dado) + 1;
        this.dadoInimigo = Math.floor(Math.random() * dado) + 1;
        this.somaAliado = this.dadoAliado + aliado.atributos[atributo].valor;
        this.somaInimigo = this.dadoInimigo + inimigo.atributos[atributo].valor;
        this.somaDesafio = desafio + this.dadoInimigo;
    }

    resto(valor1, valor2) {
        return valor1 - valor2;
    }

    resultado(tipo, resto) {
        if (tipo === "batalha") {
            return [resto, resto > 0 ? this.aliado.nome : resto < 0 ? this.inimigo.nome : "Empate", this.dadoAliado, this.dadoInimigo];
        } else {
            return [resto, resto > 0 ? "Passou" : resto < 0 ? "Perdeu" : "Neutro", this.dadoAliado, this.dadoInimigo];
        }
    }

    batalha() {
        return this.resultado("batalha", this.resto(this.somaAliado, this.somaInimigo));
    }

    desafio() {
        return this.resultado("desafio", this.resto(this.somaAliado, this.somaDesafio));
    }

    sorte() {
        return this.resultado("sorte", this.resto(this.dadoAliado, this.dadoInimigo));
    }
}