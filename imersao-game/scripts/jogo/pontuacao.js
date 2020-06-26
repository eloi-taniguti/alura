class Pontuacao {
  constructor() {
    this.pontos = 0;
  }
  
  exibe() {
    textAlign(RIGHT);
    textSize(50);
    fill('#fff');
    text(parseInt(this.pontos), width - 30, 50);
  }
  
  adicionarPontos() {
    this.pontos = this.pontos + 0.2;
  }
  
  zeraPontos() {
    this.pontos = 0;
  }
  
  pontosAtual() {
    return parseInt(this.pontos);
  }
}