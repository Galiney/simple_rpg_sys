class Action {
    constructor(dado, atributo, aliado = new Personagem(), inimigo = new Personagem(), nivelDesafio=1) {
        if (!(aliado instanceof Personagem) || !(inimigo instanceof Personagem)) {
            throw new Error('Os parâmetros "aliado" e "inimigo" devem ser instâncias da classe Personagem.');
        }
        this.aliado = aliado;
        this.inimigo = inimigo;
        this.niveisDesafios = {
            "forca": { "nivel-1": 2,"nivel-2": 4,"nivel-3": 6,"nivel-4": 8,"nivel-5": 10,"nivel-6": 12,"nivel-7": 14,"nivel-8": 16,"nivel-9": 18,"nivel-10": 20 },
            "destreza": { "nivel-1": 3,"nivel-2": 6,"nivel-3": 8,"nivel-4": 10,"nivel-5": 13,"nivel-6": 15,"nivel-7": 17,"nivel-8": 20,"nivel-9": 22,"nivel-10": 25 },
            "percepcao": { "nivel-1": 6,"nivel-2": 9,"nivel-3": 12,"nivel-4": 15,"nivel-5": 18,"nivel-6": 21,"nivel-7": 24,"nivel-8": 27,"nivel-9": 30,"nivel-10": 33 },
            "carisma": { "nivel-1": 8,"nivel-2": 13,"nivel-3": 17,"nivel-4": 22,"nivel-5": 27,"nivel-6": 31,"nivel-7": 36,"nivel-8": 40,"nivel-9": 45,"nivel-10": 50 },
            "inteligencia": { "nivel-1": 11,"nivel-2": 21,"nivel-3": 31,"nivel-4": 41,"nivel-5": 50,"nivel-6": 60,"nivel-7": 70,"nivel-8": 80,"nivel-9": 90,"nivel-10": 100 },
        }
        this.dadoAliado = Math.floor(Math.random() * dado) + 1;
        this.dadoInimigo = Math.floor(Math.random() * dado) + 1;
        this.somaAliado = this.dadoAliado + aliado.atributos[atributo].valor;
        this.somaInimigo = this.dadoInimigo + inimigo.atributos[atributo].valor;
        this.dificuldadeDesafio = this.niveisDesafios[atributo]["nivel-" + nivelDesafio];
        this.somaDesafio = this.dadoInimigo + this.dificuldadeDesafio;
    }

    getDificuldade() {
        return this.dificuldadeDesafio;
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