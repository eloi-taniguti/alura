let imagemCenario;
let imagemTelaInicial;
let imagemPersonagem;
let imagemInimigoGota;
let imagemInimigoVoador;
let imagemInimigoTroll;
let imagemGameOver;
let imagemVida;

let somDoPulo;
let cenario;
let somDoJogo;
let personagem;
let gameOver;
let pontuacao;
let jogo;
let vida;

let cenaAtual = 'telaInicial';
let cenas;
let telaInicial;
let gerenciador;
let fita;
let mapa = [];

let threshold = 10;

const inimigos = [];

const matrizInimigoGota = this.criarMatriz(4, 7, 104, 100);
      
const matrizPersonagem = this.criarMatriz(4, 4, 220, 270);

const matrizInimigoTroll = this.criarMatriz(5, 5, 400, 400);

const matrizInimigoVoador = this.criarMatriz(3, 5, 200, 150)



function criarMatriz(coluna, linha, larguraImagem, alturaImagem) {
  let matriz = [];
  const numColuna = coluna;
  const numLinha = linha;
  const imagemX = larguraImagem;
  const imagemY = alturaImagem;

  let x = 0;
  let y = 0;
  let array = (numColuna * numLinha);

  for (let i = 0; i < array; i++) {
    matriz[i] = []; // create nested array
    for (let j = 0; j < 2; j++) {
      matriz[i] = [x];
      matriz[i][j] = y * imagemY;
    }
    if (x == imagemX * (numColuna - 1)) {
      x=0;
      y++
    } else {
      x = x + imagemX;
    }
  }
  return matriz;
}