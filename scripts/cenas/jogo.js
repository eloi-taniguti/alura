class Jogo {
  constructor() {
    this.mapa = [];
    this.inimigoAtual = 0;
  }
  
  setup() {
    fita.mapa.forEach(({inimigo, velocidade}) => {
      this.mapa.push({
        inimigo,
        velocidade,
      })
    })
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial)

    cenario = new Cenario(imagemCenario, 3);
    gameOver = new GameOver(imagemGameOver);
    pontuacao = new Pontuacao();
    
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
    
    // (matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade)
    const inimigoGota = new Inimigo(matrizInimigoGota, imagemInimigoGota, width - 52, 30, 52, 52, 104, 104, 10);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10);
    const inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, width-200, 0, 200, 200, 400, 400, 10);

    inimigos.push(inimigoGota);
    inimigos.push(inimigoVoador);
    inimigos.push(inimigoTroll);
  }
  
  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula()
      somDoPulo.play()
    }
    if (key === 'Enter') {
      console.log('reiniciar');
      pontuacao.zeraPontos();
      vida.vidas = fita.configuracoes.vidaInicial;
      inimigos.forEach((inimigo) => {
          inimigo.inicio();
        }) 
      loop();
    }
  }
  
  draw() {

    cenario.exibe();
    cenario.move();

    personagem.exibe();
    personagem.aplicaGravidade();

    pontuacao.exibe();
    pontuacao.adicionarPontos();
    
    vida.draw();

    const linhaAtual = this.mapa[this.inimigoAtual];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;
    
    inimigo.exibe();
    inimigo.move();  
    
    if (inimigoVisivel) { //apenas um inimigo por vez
      this.inimigoAtual++;
      inimigo.aparece();
      if (this.inimigoAtual > this.mapa.length - 1) {
        this.inimigoAtual = 0;
      }
      inimigo.velocidade = parseInt(random(10, 30)); // altera velocidade aleatoriamente
    }

    inimigos.forEach((inimigo) => {
       if (personagem.estaColidindo(inimigo)) {
           vida.perdeVida();
           personagem.ficaInvencivel();
           console.log('colidiu')
         
           if (vida.vidas === 0) {
              gameOver.exibe();
              noLoop();            
           }
        }  
    })
  
  }
  
  _botao() {
    // gerenciador.y = height / 7 * 5;
    gerenciador.draw();
  }
}

