function preload() {
  fita = loadJSON('fita/fita.json');
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  imagemTelaInicial = loadImage('imagens/cenario/tela-inicial.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigoGota = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemInimigoTroll = loadImage('imagens/inimigos/troll.png');
  imagemVida = loadImage('imagens/assets/heart.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
}
