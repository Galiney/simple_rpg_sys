const DIFICULDADE_DESAFIOS = {
    "forca": { "nivel-1": 2,"nivel-2": 4,"nivel-3": 6,"nivel-4": 8,"nivel-5": 10,"nivel-6": 12,"nivel-7": 14,"nivel-8": 16,"nivel-9": 18,"nivel-10": 20 },
    "destreza": { "nivel-1": 3,"nivel-2": 6,"nivel-3": 8,"nivel-4": 10,"nivel-5": 13,"nivel-6": 15,"nivel-7": 17,"nivel-8": 20,"nivel-9": 22,"nivel-10": 25 },
    "percepcao": { "nivel-1": 6,"nivel-2": 9,"nivel-3": 12,"nivel-4": 15,"nivel-5": 18,"nivel-6": 21,"nivel-7": 24,"nivel-8": 27,"nivel-9": 30,"nivel-10": 33 },
    "carisma": { "nivel-1": 8,"nivel-2": 13,"nivel-3": 17,"nivel-4": 22,"nivel-5": 27,"nivel-6": 31,"nivel-7": 36,"nivel-8": 40,"nivel-9": 45,"nivel-10": 50 },
    "inteligencia": { "nivel-1": 11,"nivel-2": 21,"nivel-3": 31,"nivel-4": 41,"nivel-5": 50,"nivel-6": 60,"nivel-7": 70,"nivel-8": 80,"nivel-9": 90,"nivel-10": 100 },
    "sorte" : { "nivel-1": 0,"nivel-2": 0,"nivel-3": 0,"nivel-4": 0,"nivel-5": 0,"nivel-6": 0,"nivel-7": 0,"nivel-8": 0,"nivel-9": 0,"nivel-10": 0 }
}

class Action {
    constructor(dado, atributo, aliado = new Personagem(), inimigo = new Personagem(), nivelDesafio = 1) {
      if (!(aliado instanceof Personagem)) {
          throw new Error('O parâmetro "aliado" deve ser uma instância da classe Personagem.');
      }
      if (!(inimigo instanceof Personagem)) {
          throw new Error('O parâmetro "inimigo" deve ser uma instância da classe Personagem.');
      }
      if (!DIFICULDADE_DESAFIOS[atributo]) {
          throw new Error(`Atributo inválido: "${atributo}". Certifique-se de usar um atributo existente.`);
      }
      if (nivelDesafio < 1 || nivelDesafio > 10) {
          throw new Error(`Nível de desafio inválido: "${nivelDesafio}". Deve ser um valor entre 1 e 10.`);
      }
      
      this.aliado = aliado;
      this.inimigo = inimigo;
  
      // Gerando valores dos dados e somando com os atributos
      this.dadoAliado = Math.floor(Math.random() * dado) + 1;
      this.dadoInimigo = Math.floor(Math.random() * dado) + 1;
      this.somaAliado = this.dadoAliado + this.aliado.atributos[atributo];
      this.somaInimigo = this.dadoInimigo + this.inimigo.atributos[atributo];
      this.dificuldadeDesafio = DIFICULDADE_DESAFIOS[atributo]["nivel-" + nivelDesafio];
      this.somaDesafio = this.dadoInimigo + this.dificuldadeDesafio;
  
      // Log dos valores calculados
      console.log(`Dado Aliado: ${this.dadoAliado}, Atributo Aliado: ${aliado.atributos[atributo]}, Soma Aliado: ${this.somaAliado}`);
      console.log(`Dado Inimigo: ${this.dadoInimigo}, Atributo Inimigo: ${inimigo.atributos[atributo]}, Soma Inimigo: ${this.somaInimigo}`);
      console.log(`Dificuldade Desafio (Atributo "${atributo}" - Nível ${nivelDesafio}): ${this.dificuldadeDesafio}`);
      console.log(`Soma Desafio: ${this.somaDesafio}`);
    }
  
    getDificuldade() {
      return this.dificuldadeDesafio;
    }
  
    resto(valor1, valor2) {
      return valor1 - valor2;
    }
  
    resultado(tipo, resto) {
        // Log da comparação
        console.log(`Resultado do ${tipo}: Resto = ${resto}, Dado Aliado = ${this.dadoAliado}, Dado Inimigo = ${this.dadoInimigo}`);
        console.log(`Aliado: ${this.aliado.nome} (Soma: ${this.somaAliado}), Inimigo: ${this.inimigo.nome} (Soma: ${this.somaInimigo})`);
        if (tipo === "batalha") {
          return [resto, this.dadoAliado, this.dadoInimigo, resto > 0 ? this.aliado.nome : resto < 0 ? this.inimigo.nome : "Empate", this.somaAliado, this.somaInimigo];
        } else {
          return [resto, this.dadoAliado, this.dadoInimigo, resto > 0 ? "Passou" : resto < 0 ? "Perdeu" : "Neutro", this.somaAliado, this.somaInimigo];
        }
      }
  
    batalha() {
        const resultado = this.resto(this.somaAliado, this.somaInimigo);
        console.log(`Batalha - Resto: ${resultado}, Dado Aliado: ${dadoAliado}, Dado Inimigo: ${dadoInimigo}`);
        return this.resultado("batalha", resultado);
      }
  
    desafio() {
      const resultado = this.resto(this.somaAliado, this.somaDesafio);
      console.log(`Desafio - Resto: ${resultado}`);
      return this.resultado("desafio", resultado);
    }
  
    sorte() {
      const resultado = this.resto(this.dadoAliado, this.dadoInimigo);
      console.log(`Sorte - Resto: ${resultado}`);
      return this.resultado("sorte", resultado);
    }
  }
  