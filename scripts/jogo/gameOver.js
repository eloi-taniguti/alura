class GameOver {
  constructor (imagem) {
    this.imagem = imagem;
    this.x = 0;
  }
  
  exibe() {
    image(this.imagem, this.x, height/4, width, height/4);
    textAlign(CENTER);
    textSize(50);
    text('Pressione ENTER para reiniciar', width/2, height/2 * 1.3);
  }
}