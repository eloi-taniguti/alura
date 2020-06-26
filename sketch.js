

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  
  gerenciador = new Gerenciador('Iniciar', width / 2, height / 2);
  telaInicial = new TelaInicial();
  jogo = new Jogo();
  jogo.setup();

  cenas = {
    jogo,
    telaInicial
  };

  somDoJogo.loop();
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}
