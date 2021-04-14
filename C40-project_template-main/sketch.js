var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score = 0;

var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;


function preload(){
  back_img = loadImage("images/jungle1.png");
  player_img = loadImage("images/basket.png");
  fruit1_img = loadImage("images/blueBerry.png");
  fruit2_img = loadImage("images/raseBerry.png");
  fruit3_img = loadImage("images/grapes.png");
  fruit4_img = loadImage("images/blackBerry.png");
  fruit5_img = loadImage("images/starBerry.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  background("jungle1");
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(180, 249, 165);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }

   text ("Score : "+score, 980, 20);
}